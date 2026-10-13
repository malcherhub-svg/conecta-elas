import { describe, expect, it } from 'vitest';
import { calculateUniverseResults, getUniverseLeaders, universeAreas, universeQuestions } from './universeData';

describe('Descubra seu Universo scoring', () => {
  it('has ten complete questions with five choices each and includes all eight areas', () => {
    expect(universeQuestions).toHaveLength(10);
    universeQuestions.forEach((question) => expect(question.options).toHaveLength(5));
    const scoredAreas = new Set(universeQuestions.flatMap((question) => question.options.flatMap((answer) => Object.keys(answer.weights))));
    expect(scoredAreas).toEqual(new Set(Object.keys(universeAreas)));
  });

  it('is deterministic and recomputes rather than accumulating when an answer changes', () => {
    const answers = universeQuestions.map(() => 0);
    const first = calculateUniverseResults(answers);
    expect(calculateUniverseResults(answers)).toEqual(first);
    const edited = answers.slice();
    edited[0] = 4;
    expect(calculateUniverseResults(edited)).toEqual(calculateUniverseResults(edited));
    expect(calculateUniverseResults(edited)).not.toEqual(first);
  });

  it('normalizes area affinities and surfaces near ties as combined leaders', () => {
    const answers = universeQuestions.map(() => 0);
    const results = calculateUniverseResults(answers);
    expect(results.every((result) => result.score >= 0 && result.score <= 100)).toBe(true);
    const tied = [
      { areaId: 'software' as const, score: 75, rawScore: 10, possibleScore: 14, reasons: [] },
      { areaId: 'design' as const, score: 69, rawScore: 9, possibleScore: 13, reasons: [] },
      { areaId: 'research' as const, score: 30, rawScore: 3, possibleScore: 10, reasons: [] },
    ];
    expect(getUniverseLeaders(tied).map((result) => result.areaId)).toEqual(['software', 'design']);
  });

  it('allows every area to appear as the strongest affinity for a coherent set of choices', () => {
    for (const areaId of Object.keys(universeAreas) as (keyof typeof universeAreas)[]) {
      const answers = universeQuestions.map((question) => {
        const options = question.options.map((choice) => choice.weights[areaId] ?? 0);
        return options.indexOf(Math.max(...options));
      });
      const results = calculateUniverseResults(answers);
      expect(getUniverseLeaders(results).map((result) => result.areaId), areaId).toContain(areaId);
    }
  });
});
