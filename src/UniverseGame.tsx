import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft, ArrowRight, BarChart3, Check, ChevronLeft, Code2,
  Compass, Database, Leaf, Lightbulb, LockKeyhole, Microscope, Palette,
  RotateCcw, Share2, ShieldCheck, Sparkles, Workflow, Wrench, X,
} from 'lucide-react';
import {
  calculateUniverseResults, getUniverseLeaders, universeAreas,
  universeQuestions, universeStages,
} from './universeData';
import type { UniverseAreaId, UniverseOption } from './universeData';

type View = 'intro' | 'question' | 'reveal' | 'result';
type Props = {
  open: boolean;
  onExit: () => void;
  onExploreProjects: (area: UniverseAreaId) => void;
  onMeetProfessionals: (area: UniverseAreaId) => void;
  onExploreCommunity: () => void;
};

const optionIcons: Record<UniverseOption['icon'], LucideIcon> = {
  code: Code2, chart: BarChart3, build: Wrench, design: Palette,
  shield: LockKeyhole, research: Microscope, leaf: Leaf, plan: Workflow,
};
const areaIcons: Record<UniverseOption['icon'], LucideIcon> = {
  ...optionIcons, chart: Database,
};

const introAreas = [
  { label: 'Software', icon: Code2 }, { label: 'Dados e IA', icon: Database },
  { label: 'Engenharia', icon: Wrench }, { label: 'Design digital', icon: Palette },
  { label: 'Segurança', icon: ShieldCheck }, { label: 'Ciência', icon: Microscope },
  { label: 'Ambiente', icon: Leaf }, { label: 'Gestão', icon: Workflow },
];

export default function UniverseGame({ open, onExit, onExploreProjects, onMeetProfessionals, onExploreCommunity }: Props) {
  const [view, setView] = useState<View>('intro');
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(universeQuestions.length).fill(null));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [howOpen, setHowOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const [scoreAnnounce, setScoreAnnounce] = useState('');
  const exitButton = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | null>(null);

  const results = useMemo(() => calculateUniverseResults(answers), [answers]);
  const question = universeQuestions[questionIndex];
  const selected = answers[questionIndex];
  const currentStage = universeStages.find((stage) => stage.range[0] <= questionIndex && stage.range[1] >= questionIndex)!;
  const completeCount = answers.filter((answer) => answer !== null).length;
  const progress = view === 'result' || view === 'reveal'
    ? 100
    : view === 'intro' ? 0
      : ((questionIndex + (selected === null ? 0 : 1)) / universeQuestions.length) * 100;
  const leaders = getUniverseLeaders(results);
  const mainArea = leaders[0]?.areaId ?? 'software';
  const primaryData = universeAreas[mainArea];
  const shareSummary = leaders.length > 1
    ? `Meu universo em destaque no Conecta Elas combina ${leaders.map((leader) => universeAreas[leader.areaId].name).join(' e ')}. ${primaryData.phrase}`
    : `Meu universo em destaque no Conecta Elas: ${primaryData.name}. ${primaryData.phrase}`;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusTimer = window.setTimeout(() => exitButton.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusTimer);
      previousFocus?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (howOpen) setHowOpen(false);
        else onExit();
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [open, onExit, howOpen]);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  if (!open) return null;

  const start = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    if (completeCount === universeQuestions.length && view === 'result') {
      setView('question');
      setQuestionIndex(0);
      return;
    }
    setQuestionIndex(0);
    setView('question');
  };

  const choose = (optionIndex: number) => {
    setAnswers((current) => current.map((answer, index) => index === questionIndex ? optionIndex : answer));
    setScoreAnnounce('Escolha registrada nesta sessão. Você pode alterá-la antes de terminar.');
  };

  const goBack = () => {
    setScoreAnnounce('');
    if (questionIndex === 0) {
      setView('intro');
      return;
    }
    setQuestionIndex((index) => index - 1);
  };

  const continueToResult = () => {
    if (answers.some((answer) => answer === null)) return;
    setView('reveal');
    if (timer.current !== null) window.clearTimeout(timer.current);
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    timer.current = window.setTimeout(() => setView('result'), reduced ? 0 : 1400);
  };

  const revealNow = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    setView('result');
  };

  const restart = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    setAnswers(Array(universeQuestions.length).fill(null));
    setQuestionIndex(0);
    setShareStatus('');
    setManualCopy(false);
    setScoreAnnounce('A jornada foi reiniciada. Suas respostas anteriores foram apagadas desta sessão.');
    setView('intro');
  };

  const stageDone = (stageId: string) => {
    const stage = universeStages.find((item) => item.id === stageId)!;
    return answers.slice(stage.range[0], stage.range[1] + 1).every((answer) => answer !== null);
  };

  const copyResult = async () => {
    setShareStatus('');
    setManualCopy(false);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareSummary);
        setShareStatus('Resumo copiado. Nenhuma resposta individual foi compartilhada.');
        return;
      }
    } catch {
      // The manual copy field below is the accessible fallback when clipboard access is blocked.
    }
    setManualCopy(true);
    setShareStatus('Selecione e copie o resumo abaixo. Nenhuma resposta individual foi incluída.');
  };

  const shareResult = async () => {
    setShareStatus('');
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Meu universo — Conecta Elas', text: shareSummary });
        setShareStatus('Resultado compartilhado. Nenhuma resposta individual foi incluída.');
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') await copyResult();
      }
      return;
    }
    await copyResult();
  };

  const game = <div className="universe-overlay" role="dialog" aria-modal="true" aria-label="Minigame Descubra seu Universo">
    <div className="universe-backdrop" aria-hidden="true"><i/><i/><i/><i/><span className="universe-nebula nebula-a"/><span className="universe-nebula nebula-b"/></div>
    <header className="universe-topbar">
      <button ref={exitButton} className="universe-return" onClick={onExit}><ArrowLeft size={17}/> Voltar para Projetos</button>
      <a className="universe-brand" href="#plataforma" aria-label="Conecta Elas"><img src="/assets/logo-conecta-elas.png" alt="Logo Conecta Elas"/></a>
      <button className="universe-restart" onClick={restart} aria-label="Reiniciar a experiência"><RotateCcw size={16}/><span>Reiniciar</span></button>
    </header>

    {view === 'intro' && <main className="universe-main universe-intro" key="intro">
      <section className="universe-intro-copy">
        <p className="universe-kicker"><Sparkles size={15}/> UMA JORNADA DE DESCOBERTA</p>
        <h1>Descubra seu<br/><em>universo.</em></h1>
        <p className="universe-intro-quote">“Existem muitos caminhos para transformar o mundo. Vamos descobrir qual desperta sua curiosidade?”</p>
        <p className="universe-intro-description">Responda a perguntas, explore possibilidades e encontre áreas que talvez você ainda não tenha imaginado para o seu futuro.</p>
        <div className="universe-actions">
          <button className="universe-button primary" onClick={start}>Começar minha jornada <ArrowRight size={18}/></button>
          <button className="universe-button secondary" onClick={() => setHowOpen(true)}>Como funciona? <Compass size={17}/></button>
        </div>
        <p className="universe-privacy"><ShieldCheck size={15}/> Sem cadastro e sem envio de respostas. Você pode gostar de várias áreas.</p>
      </section>
      <section className="universe-intro-art" aria-label="Oito áreas de ciência, tecnologia e inovação">
        <div className="universe-orbit orbit-outer"/><div className="universe-orbit orbit-inner"/>
        <div className="universe-core"><Sparkles size={30}/><span>SEU PRÓXIMO<br/>CAMINHO</span></div>
        {introAreas.map((area, index) => { const Icon = area.icon; return <div className={`universe-orbit-node node-${index + 1}`} key={area.label} title={area.label}><Icon size={19}/><span>{area.label}</span></div>; })}
        <span className="universe-star star-a">✦</span><span className="universe-star star-b">✧</span><span className="universe-star star-c">✦</span>
      </section>
      <section className="universe-facts" aria-label="Sobre a experiência">
        <div><Sparkles/><span>Experiência interativa</span></div><div><span className="universe-fact-number">10</span><span>Perguntas em 5 etapas</span></div><div><Compass/><span>Resultado exploratório</span></div><div><span className="universe-fact-number">3–5</span><span>Minutos estimados</span></div>
      </section>
    </main>}

    {view === 'question' && <main className="universe-main universe-question-view" key={`question-${questionIndex}`}>
      <div className="universe-progress-head"><div><span className="universe-kicker">SUA JORNADA</span><b>Etapa {universeStages.findIndex((stage) => stage.id === currentStage.id) + 1} de 5 <i>·</i> {currentStage.label}</b></div><span className="universe-question-count">Pergunta <b>{String(questionIndex + 1).padStart(2, '0')}</b> <i>/</i> 10</span></div>
      <div className="universe-progress-track" role="progressbar" aria-label="Progresso da jornada" aria-valuemin={0} aria-valuemax={10} aria-valuenow={completeCount}><span style={{ width: `${progress}%` }}/></div>
      <nav className="universe-stages" aria-label="Etapas da jornada">{universeStages.map((stage, index) => <button key={stage.id} disabled={index > universeStages.findIndex((item) => item.id === currentStage.id)} className={`${stage.id === currentStage.id ? 'active' : ''} ${stageDone(stage.id) ? 'complete' : ''}`} onClick={() => setQuestionIndex(stage.range[0])}><span>{stageDone(stage.id) ? <Check size={13}/> : `0${index + 1}`}</span><small>{stage.label}</small></button>)}</nav>
      <section className="universe-question-card" aria-labelledby="universe-question-title">
        <p className="universe-question-overline"><span>UMA PERGUNTA PARA EXPLORAR</span><i>✧</i></p>
        <h2 id="universe-question-title">{question.prompt}</h2>
        <p className="universe-select-hint">Escolha a alternativa que mais desperta sua curiosidade. Não existe resposta certa ou errada.</p>
        <div className="universe-options" role="group" aria-label={`Alternativas da pergunta ${questionIndex + 1}`}>
          {question.options.map((choice, optionIndex) => { const Icon = optionIcons[choice.icon]; return <button key={`${question.id}-${optionIndex}`} className={`universe-option ${selected === optionIndex ? 'selected' : ''}`} aria-pressed={selected === optionIndex} onClick={() => choose(optionIndex)}><span className="universe-option-icon"><Icon size={20}/></span><span className="universe-option-label">{choice.label}</span><span className="universe-option-check">{selected === optionIndex ? <Check size={17}/> : String.fromCharCode(65 + optionIndex)}</span></button>; })}
        </div>
        <p role="status" aria-live="polite" className="universe-answer-status">{scoreAnnounce}</p>
      </section>
      <div className="universe-question-controls"><button className="universe-button secondary" onClick={goBack}><ChevronLeft size={17}/> Voltar</button><span>{completeCount} de 10 respostas escolhidas</span><button className="universe-button primary" disabled={selected === null} onClick={() => questionIndex === universeQuestions.length - 1 ? continueToResult() : setQuestionIndex((index) => index + 1)}>{questionIndex === universeQuestions.length - 1 ? 'Ver minha descoberta' : 'Próxima pergunta'} <ArrowRight size={17}/></button></div>
    </main>}

    {view === 'reveal' && <main className="universe-reveal" aria-live="polite"><div className="universe-reveal-orbit"><Sparkles size={36}/></div><p className="universe-kicker">VOCÊ CHEGOU AO FIM DA JORNADA</p><h1>Sua jornada revelou<br/><em>novas possibilidades...</em></h1><div className="universe-reveal-stars" aria-hidden="true">✦　✧　✦</div><button className="universe-button secondary" onClick={revealNow}>Revelar meu resultado <ArrowRight size={17}/></button></main>}

    {view === 'result' && <main className="universe-main universe-result-view" key="result">
      <header className="universe-result-heading"><p className="universe-kicker"><Sparkles size={15}/> JORNADA CONCLUÍDA</p><h1 aria-label="Seu universo em destaque">Seu universo<br/><em>em destaque.</em></h1><p>Este resultado aponta afinidades para você explorar. Ele não define sua capacidade nem determina uma carreira ideal.</p></header>
      <div className="universe-result-layout">
        <section className="universe-result-card" aria-label="Sua área em destaque">
          <div className="universe-result-constellation" aria-hidden="true"><span/><span/><span/><span/><div>{leaders.map((leader) => { const Icon = areaIcons[universeAreas[leader.areaId].icon]; return <Icon key={leader.areaId} size={32}/>; })}</div></div>
          <p className="universe-kicker">{leaders.length > 1 ? 'AFINIDADES PRÓXIMAS' : 'ÁREA COM MAIOR AFINIDADE'}</p>
          <h2>{leaders.map((leader) => universeAreas[leader.areaId].name).join(' + ')}</h2>
          <blockquote>{leaders.length > 1 ? `Seus interesses se encontram em ${leaders.map((leader) => universeAreas[leader.areaId].name).join(' e ')}.` : primaryData.phrase}</blockquote>
          <p className="universe-result-description">{leaders.length > 1 ? leaders.map((leader) => universeAreas[leader.areaId].description).join(' ') : primaryData.description}</p>
          <p className="universe-result-caveat">Afinidades exploratórias com base nas suas escolhas — não são uma avaliação de talento, inteligência ou sucesso futuro.</p>
        </section>
        <div className="universe-result-details">
          <section className="universe-result-panel"><h3>Por que apareceu?</h3><p>Nas suas respostas, alguns temas se repetiram:</p><ul>{(leaders.flatMap((leader) => results.find((result) => result.areaId === leader.areaId)?.reasons ?? []).slice(0, 4).length ? leaders.flatMap((leader) => results.find((result) => result.areaId === leader.areaId)?.reasons ?? []).slice(0, 4) : ['Você explorou diferentes caminhos e este resultado destaca os temas com maior afinidade nas respostas.']).map((reason) => <li key={reason}><Check size={15}/>{reason}</li>)}</ul></section>
          <section className="universe-result-panel"><h3>Interesses relacionados</h3><div className="universe-interest-list">{leaders.flatMap((leader) => universeAreas[leader.areaId].interests).slice(0, 3).map((interest) => <span key={interest}>{interest}</span>)}</div></section>
          {leaders.length > 1 && <section className="universe-result-panel universe-combination"><h3>Uma missão que combina as áreas</h3><p>Escolha uma necessidade real e crie uma proposta que una <b>{universeAreas[leaders[0].areaId].name}</b> e <b>{universeAreas[leaders[1].areaId].name}</b>. Comece pelo desafio: “{universeAreas[leaders[0].areaId].mission}”</p></section>}
          <section className="universe-result-panel universe-mission"><p className="universe-kicker">SUA PRIMEIRA MISSÃO</p><h3>{leaders.length > 1 ? 'Experimente misturar os seus interesses.' : 'Uma ideia para experimentar.'}</h3><p>{leaders.length > 1 ? `Combine esta proposta com a missão de ${universeAreas[leaders[1].areaId].name}: ${universeAreas[leaders[1].areaId].mission}` : primaryData.mission}</p></section>
          <section className="universe-secondary"><h3>Outras órbitas para explorar</h3><div>{results.filter((result) => !leaders.some((leader) => leader.areaId === result.areaId)).slice(0, 2).map((result) => { const area = universeAreas[result.areaId]; const Icon = areaIcons[area.icon]; return <article key={result.areaId}><Icon/><div><b>{area.name}</b><small>{Math.round(result.score)}% de afinidade exploratória</small></div></article>; })}</div><p>Você pode se interessar por várias áreas — e seus interesses podem mudar.</p></section>
        </div>
      </div>
      <section className="universe-related-actions" aria-label="Continue explorando no Conecta Elas"><div><span className="universe-kicker">O PRÓXIMO PASSO É SEU</span><h2>Leve essa curiosidade para mais longe.</h2></div><div className="universe-related-buttons"><button className="universe-button primary" onClick={() => onExploreProjects(mainArea)}>Explorar projetos relacionados <ArrowRight size={16}/></button><button className="universe-button secondary" onClick={() => onMeetProfessionals(mainArea)}>Conhecer profissionais <ArrowRight size={16}/></button><button className="universe-button secondary" onClick={onExploreCommunity}>Conhecer a comunidade <Compass size={16}/></button></div></section>
      <section className="universe-share"><div><h3>Quer guardar essa descoberta?</h3><p>Compartilhe apenas o resumo do resultado — suas respostas ficam privadas nesta sessão.</p></div><div className="universe-share-actions"><button className="universe-button secondary" onClick={shareResult}><Share2 size={16}/> Compartilhar meu resultado</button><button className="universe-text-button" onClick={copyResult}>Copiar resumo</button></div>{shareStatus && <p className="universe-share-status" role="status">{shareStatus}</p>}{manualCopy && <label className="universe-copy-fallback">Resumo para copiar<input readOnly value={shareSummary} onFocus={(event) => event.currentTarget.select()} onClick={(event) => event.currentTarget.select()}/></label>}</section>
      <div className="universe-result-footer"><button className="universe-button secondary" onClick={onExit}><ArrowLeft size={16}/> Voltar para Projetos</button><button className="universe-button secondary" onClick={restart}><RotateCcw size={16}/> Jogar novamente</button><button className="universe-text-button" onClick={() => { setQuestionIndex(0); setView('question'); setShareStatus(''); }}>Rever e alterar minhas respostas</button></div>
    </main>}

    {howOpen && <div className="universe-modal-backdrop" onClick={() => setHowOpen(false)}><section className="universe-how-modal" role="dialog" aria-modal="true" aria-labelledby="universe-how-title" onClick={(event) => event.stopPropagation()}><button className="universe-modal-close" onClick={() => setHowOpen(false)} aria-label="Fechar explicação"><X/></button><span className="universe-modal-icon"><Lightbulb/></span><p className="universe-kicker">SEM RESPOSTAS CERTAS OU ERRADAS</p><h2 id="universe-how-title">Como funciona?</h2><p>Você escolhe alternativas sobre o que desperta sua curiosidade. No final, mostramos áreas com afinidade exploratória a partir do conjunto das suas respostas.</p><ul><li>São 10 perguntas em 5 etapas curtas.</li><li>Você pode voltar e mudar qualquer escolha.</li><li>Suas respostas ficam apenas nesta sessão e não são enviadas.</li><li>O resultado é um convite para explorar, não um teste vocacional.</li></ul><button className="universe-button primary" onClick={() => setHowOpen(false)}>Entendi <Check size={16}/></button></section></div>}
  </div>;

  return createPortal(game, document.body);
}
