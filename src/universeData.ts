export type UniverseAreaId =
  | 'software'
  | 'data-ai'
  | 'engineering'
  | 'design'
  | 'cybersecurity'
  | 'research'
  | 'environmental'
  | 'management';

export type UniverseStageId = 'curiosity' | 'problem-solving' | 'future' | 'impact' | 'creation';

export type UniverseOption = {
  label: string;
  icon: 'code' | 'chart' | 'build' | 'design' | 'shield' | 'research' | 'leaf' | 'plan';
  weights: Partial<Record<UniverseAreaId, number>>;
  signals: Partial<Record<UniverseAreaId, string>>;
};

export type UniverseQuestion = {
  id: number;
  stage: UniverseStageId;
  prompt: string;
  options: UniverseOption[];
};

export const universeStages: { id: UniverseStageId; label: string; range: [number, number] }[] = [
  { id: 'curiosity', label: 'Sua curiosidade', range: [0, 1] },
  { id: 'problem-solving', label: 'Como você resolve problemas', range: [2, 3] },
  { id: 'future', label: 'Sua forma de imaginar o futuro', range: [4, 5] },
  { id: 'impact', label: 'Ciência e impacto', range: [6, 7] },
  { id: 'creation', label: 'Seu estilo de criação', range: [8, 9] },
];

export const universeAreas: Record<UniverseAreaId, {
  name: string;
  icon: UniverseOption['icon'];
  phrase: string;
  description: string;
  mission: string;
  interests: [string, string, string];
  projectCategories: string[];
  professionalCategories: string[];
}> = {
  software: {
    name: 'Desenvolvimento de software', icon: 'code',
    phrase: 'Você não precisa esperar pelo futuro. Pode começar a programá-lo.',
    description: 'Sua curiosidade pode se transformar em sites, aplicativos, jogos e ferramentas capazes de resolver problemas reais.',
    mission: 'Imagine uma dificuldade do cotidiano e desenhe as funcionalidades de um aplicativo que poderia ajudar.',
    interests: ['Programação', 'Aplicativos e jogos', 'Soluções digitais'],
    projectCategories: ['software'], professionalCategories: ['Desenvolvimento de software'],
  },
  'data-ai': {
    name: 'Ciência de dados e inteligência artificial', icon: 'chart',
    phrase: 'Cada pergunta abre caminho para uma nova descoberta.',
    description: 'Você demonstra interesse em investigar informações, reconhecer padrões e compreender problemas com ajuda dos dados.',
    mission: 'Escolha um pequeno conjunto de dados públicos, crie um gráfico e escreva três descobertas que ele sugere.',
    interests: ['Análise de dados', 'Inteligência artificial', 'Reconhecimento de padrões'],
    projectCategories: ['dados', 'ciência de dados'], professionalCategories: ['Ciência de dados', 'Inteligência artificial'],
  },
  engineering: {
    name: 'Engenharia e robótica', icon: 'build',
    phrase: 'Imagine o impossível. Depois, descubra como construí-lo.',
    description: 'Você pode gostar de transformar ideias em protótipos, testar soluções e compreender como as coisas funcionam.',
    mission: 'Desenhe um protótipo de um dispositivo que resolva um problema simples e explique como funcionaria.',
    interests: ['Robótica e eletrônica', 'Prototipagem', 'Invenções'],
    projectCategories: ['engenharia', 'robótica'], professionalCategories: ['Engenharia'],
  },
  design: {
    name: 'Design digital e UX/UI', icon: 'design',
    phrase: 'Grandes experiências começam quando alguém pensa nas pessoas.',
    description: 'Você pode se interessar por unir criatividade, tecnologia, acessibilidade e facilidade de uso.',
    mission: 'Desenhe a tela inicial de um aplicativo e peça a alguém para explicar como o utilizaria.',
    interests: ['Design de interfaces', 'Acessibilidade', 'Experiência das pessoas'],
    projectCategories: ['design', 'interface'], professionalCategories: ['Design e tecnologia'],
  },
  cybersecurity: {
    name: 'Cibersegurança', icon: 'shield',
    phrase: 'Sua curiosidade pode ajudar a proteger o mundo digital.',
    description: 'Você pode gostar de investigar problemas, antecipar riscos e encontrar maneiras de tornar sistemas mais seguros.',
    mission: 'Analise um cenário fictício de segurança digital e liste três melhorias para proteger as pessoas usuárias.',
    interests: ['Privacidade', 'Redes e sistemas', 'Prevenção de riscos'],
    projectCategories: ['segurança', 'cibersegurança'], professionalCategories: ['Segurança da informação'],
  },
  research: {
    name: 'Ciências e pesquisa', icon: 'research',
    phrase: 'Não tenha medo de perguntar o que ninguém explicou ainda.',
    description: 'Você pode gostar de formular perguntas, testar hipóteses, observar resultados e ampliar o conhecimento.',
    mission: 'Escolha uma pergunta científica, formule uma hipótese e planeje um experimento seguro para investigá-la.',
    interests: ['Método científico', 'Investigação', 'Experimentação'],
    projectCategories: ['pesquisa', 'ciência'], professionalCategories: ['Pesquisa científica', 'Matemática e física'],
  },
  environmental: {
    name: 'Tecnologia ambiental', icon: 'leaf',
    phrase: 'Use suas ideias para construir um futuro que vale a pena preservar.',
    description: 'Você pode gostar de combinar ciência e tecnologia para compreender problemas ambientais e investigar soluções sustentáveis.',
    mission: 'Escolha um problema ambiental local e proponha como dados, sensores ou um aplicativo poderiam ajudar a monitorá-lo.',
    interests: ['Sustentabilidade', 'Sensores e monitoramento', 'Ciência ambiental'],
    projectCategories: ['ambiental', 'sustentabilidade'], professionalCategories: ['Pesquisa científica', 'Engenharia'],
  },
  management: {
    name: 'Gestão de tecnologia', icon: 'plan',
    phrase: 'Uma grande ideia ganha força quando encontra um caminho para acontecer.',
    description: 'Você pode gostar de organizar projetos, reunir pessoas, definir prioridades e transformar objetivos em resultados concretos.',
    mission: 'Monte um plano simples para um projeto tecnológico, com objetivo, tarefas, responsáveis e etapas.',
    interests: ['Planejamento de projetos', 'Colaboração', 'Estratégia e inovação'],
    projectCategories: ['gestão', 'inovação'], professionalCategories: [],
  },
};

const option = (label: string, icon: UniverseOption['icon'], weights: UniverseOption['weights'], signals: UniverseOption['signals']): UniverseOption => ({ label, icon, weights, signals });

export const universeQuestions: UniverseQuestion[] = [
  {
    id: 1, stage: 'curiosity', prompt: 'Você ganhou um dia para criar algo novo. O que escolheria fazer?',
    options: [
      option('Criar um aplicativo, site ou jogo.', 'code', { software: 2, management: .45 }, { software: 'Você se interessou por transformar uma ideia em algo digital que outras pessoas possam usar.', management: 'Você também demonstrou vontade de tirar uma ideia do papel.' }),
      option('Investigar dados e descobrir padrões.', 'chart', { 'data-ai': 2, research: .55 }, { 'data-ai': 'Você quis procurar relações e pistas escondidas nas informações.', research: 'Sua escolha também valoriza perguntas e investigação.' }),
      option('Montar um robô ou inventar um dispositivo.', 'build', { engineering: 2, environmental: .4 }, { engineering: 'Você escolheu experimentar com mecanismos e protótipos.', environmental: 'Sua curiosidade também pode se conectar a tecnologias que observam o mundo físico.' }),
      option('Desenhar uma experiência digital bonita e fácil de usar.', 'design', { design: 2, management: .45 }, { design: 'Você destacou a criação visual e a facilidade de uso.', management: 'Você também pensou em como uma ideia chega às pessoas.' }),
      option('Descobrir como proteger um sistema contra ameaças.', 'shield', { cybersecurity: 2, 'data-ai': .35 }, { cybersecurity: 'Você se interessou em antecipar riscos e proteger sistemas.', 'data-ai': 'Investigar sinais também aproxima sua escolha da análise de dados.' }),
    ],
  },
  {
    id: 2, stage: 'curiosity', prompt: 'Qual desses desafios mais desperta sua curiosidade?',
    options: [
      option('Criar uma ferramenta que resolva um problema do cotidiano.', 'code', { software: 2, management: .45 }, { software: 'Você se interessou em criar uma solução prática com tecnologia.', management: 'Você também percebeu o valor de transformar necessidades em um plano.' }),
      option('Analisar informações para entender um fenômeno.', 'research', { research: 2, 'data-ai': .8 }, { research: 'Você quis entender como e por que algo acontece.', 'data-ai': 'Comparar evidências também é uma parte importante do trabalho com dados.' }),
      option('Construir ou melhorar uma máquina.', 'build', { engineering: 2, environmental: .45 }, { engineering: 'Você preferiu compreender e aperfeiçoar como algo funciona.', environmental: 'Tecnologias físicas também podem apoiar o monitoramento ambiental.' }),
      option('Tornar uma plataforma mais acessível e agradável.', 'design', { design: 2, research: .4 }, { design: 'Você colocou as necessidades das pessoas no centro da solução.', research: 'Observar a experiência ajuda a fazer perguntas melhores.' }),
      option('Investigar um problema digital e descobrir sua origem.', 'shield', { cybersecurity: 2, 'data-ai': .45 }, { cybersecurity: 'Você demonstrou interesse em investigar falhas e suas causas.', 'data-ai': 'Encontrar padrões nos sinais também pode ajudar na investigação.' }),
    ],
  },
  {
    id: 3, stage: 'problem-solving', prompt: 'Quando algo não funciona como deveria, qual é sua primeira reação?',
    options: [
      option('Examinar o código e testar soluções.', 'code', { software: 2, 'data-ai': .35 }, { software: 'Você gosta da ideia de testar mudanças e observar o que acontece.', 'data-ai': 'Testes também podem gerar dados úteis para comparar soluções.' }),
      option('Comparar informações para identificar um padrão.', 'chart', { 'data-ai': 2, research: .7 }, { 'data-ai': 'Você prefere buscar evidências antes de concluir.', research: 'Comparar evidências é parte central de uma investigação.' }),
      option('Examinar as peças, testar o funcionamento e experimentar ajustes.', 'build', { engineering: 2, environmental: .4 }, { engineering: 'Você tende a explorar o sistema e testar ajustes concretos.', environmental: 'Observar equipamentos também pode revelar como usam energia ou recursos.' }),
      option('Observar como as pessoas utilizam o produto e onde sentem dificuldade.', 'design', { design: 2, management: .55 }, { design: 'Você percebe que uma solução precisa funcionar para quem a utiliza.', management: 'Ouvir as pessoas pode ajudar a organizar melhorias com prioridade.' }),
      option('Investigar possíveis falhas e formas de evitar novos problemas.', 'shield', { cybersecurity: 2, research: .4 }, { cybersecurity: 'Você pensa em prevenção além de corrigir o problema imediato.', research: 'Investigar causas ajuda a formular novas perguntas.' }),
    ],
  },
  {
    id: 4, stage: 'problem-solving', prompt: 'Você está participando de um projeto escolar. Qual tarefa escolheria?',
    options: [
      option('Programar as funcionalidades.', 'code', { software: 2, management: .35 }, { software: 'Você escolheu dar vida às funções de uma ideia.', management: 'Funcionalidades também precisam ser organizadas em etapas.' }),
      option('Organizar os dados e interpretar os resultados.', 'chart', { 'data-ai': 2, research: .6 }, { 'data-ai': 'Você se interessa pelo que os dados podem revelar.', research: 'Interpretar resultados ajuda a responder perguntas.' }),
      option('Montar o protótipo físico.', 'build', { engineering: 2, environmental: .5 }, { engineering: 'Você preferiu construir e testar algo concreto.', environmental: 'Protótipos podem ajudar a testar soluções para desafios ambientais.' }),
      option('Criar o visual e testar a experiência com usuários.', 'design', { design: 2, research: .45 }, { design: 'Você uniu criação visual à escuta de quem usará o produto.', research: 'Testar com pessoas também é uma forma de investigar.' }),
      option('Avaliar riscos e proteger as informações.', 'shield', { cybersecurity: 2, management: .35 }, { cybersecurity: 'Você quer manter informações e sistemas protegidos.', management: 'Cuidar de riscos exige coordenação e processos claros.' }),
    ],
  },
  {
    id: 5, stage: 'future', prompt: 'Qual resultado deixaria você mais orgulhosa?',
    options: [
      option('Ver pessoas utilizando algo que você programou.', 'code', { software: 2, management: .45 }, { software: 'Você se imagina criando uma ferramenta que chega às pessoas.', management: 'Você também valoriza ver uma ideia virar realidade.' }),
      option('Descobrir uma informação importante que estava escondida nos dados.', 'research', { research: 2, 'data-ai': .8 }, { research: 'Uma descoberta obtida com evidências parece especialmente significativa para você.', 'data-ai': 'Você também mostrou afinidade com padrões e informações.' }),
      option('Ver uma invenção funcionando na prática.', 'build', { engineering: 2, environmental: .4 }, { engineering: 'Você valoriza testar uma invenção no mundo real.', environmental: 'A tecnologia prática também pode ajudar a cuidar dos recursos.' }),
      option('Criar uma experiência que facilite a vida das pessoas.', 'design', { design: 2, management: .45 }, { design: 'Você quer tornar a tecnologia mais clara e útil para as pessoas.', management: 'Uma boa experiência pode depender de organizar várias partes do projeto.' }),
      option('Ajudar a tornar um ambiente digital mais seguro.', 'shield', { cybersecurity: 2, research: .35 }, { cybersecurity: 'Você valoriza reduzir riscos no ambiente digital.', research: 'Compreender como o risco surgiu também é parte da investigação.' }),
    ],
  },
  {
    id: 6, stage: 'future', prompt: 'Qual assunto você teria vontade de explorar por mais tempo?',
    options: [
      option('Aplicativos, programação e desenvolvimento de jogos.', 'code', { software: 2, design: .3 }, { software: 'Programação e criação de ferramentas chamaram sua atenção.', design: 'Jogos e aplicativos também podem envolver decisões de experiência.' }),
      option('Inteligência artificial, estatística e análise de dados.', 'chart', { 'data-ai': 2, research: .45 }, { 'data-ai': 'Você tem curiosidade sobre sistemas, modelos e padrões nos dados.', research: 'Analisar modelos também envolve perguntas e experimentos.' }),
      option('Robótica, eletrônica, máquinas e invenções.', 'build', { engineering: 2, environmental: .55 }, { engineering: 'Você quer explorar como máquinas e componentes podem trabalhar juntos.', environmental: 'Sensores e dispositivos também ajudam a acompanhar mudanças ambientais.' }),
      option('Design, acessibilidade, criatividade e comportamento humano.', 'design', { design: 2, research: .4 }, { design: 'Você combina criatividade com interesse pela experiência das pessoas.', research: 'Compreender comportamentos também pede observação.' }),
      option('Privacidade, redes, investigação digital e segurança.', 'shield', { cybersecurity: 2, 'data-ai': .4 }, { cybersecurity: 'Privacidade e segurança digital despertam sua curiosidade.', 'data-ai': 'Investigações digitais também podem usar padrões encontrados nos dados.' }),
    ],
  },
  {
    id: 7, stage: 'impact', prompt: 'Se pudesse resolver um problema do mundo, qual seria sua prioridade?',
    options: [
      option('Criar uma ferramenta digital que facilitasse uma atividade.', 'code', { software: 2, management: .5 }, { software: 'Você imaginou uma ferramenta digital para uma necessidade real.', management: 'Transformar necessidades em prioridades também é parte de organizar soluções.' }),
      option('Usar informações para compreender melhor um problema social.', 'research', { research: 2, 'data-ai': .75 }, { research: 'Você quer compreender o problema antes de propor uma resposta.', 'data-ai': 'Os dados podem ajudar a revelar padrões e desigualdades.' }),
      option('Desenvolver uma tecnologia que ajudasse a economizar água ou energia.', 'leaf', { environmental: 2, engineering: .8 }, { environmental: 'Você se interessou por tecnologia voltada a um futuro mais sustentável.', engineering: 'Projetar soluções de energia e água também envolve engenharia.' }),
      option('Tornar serviços digitais acessíveis a mais pessoas.', 'design', { design: 2, management: .45 }, { design: 'Você valoriza acesso e inclusão como parte da experiência digital.', management: 'Ampliar acesso também exige coordenar pessoas e serviços.' }),
      option('Proteger pessoas contra riscos tecnológicos.', 'shield', { cybersecurity: 2, research: .35 }, { cybersecurity: 'Você quer prevenir danos associados ao uso de tecnologia.', research: 'Investigar riscos ajuda a compreender como preveni-los.' }),
    ],
  },
  {
    id: 8, stage: 'impact', prompt: 'Qual atividade experimental parece mais interessante?',
    options: [
      option('Construir um pequeno aplicativo interativo.', 'code', { software: 2, design: .45 }, { software: 'Você quer experimentar criando algo que responda às ações das pessoas.', design: 'Uma aplicação interativa também envolve escolhas de navegação e clareza.' }),
      option('Criar gráficos e tirar conclusões a partir de um conjunto de dados.', 'chart', { 'data-ai': 2, research: .75 }, { 'data-ai': 'Você quer explorar dados visualmente e tirar conclusões.', research: 'A experiência também se aproxima de testar uma hipótese.' }),
      option('Montar um protótipo usando componentes eletrônicos.', 'build', { engineering: 2, environmental: .6 }, { engineering: 'Você escolheu montar e testar um sistema físico.', environmental: 'Componentes podem medir fenômenos do ambiente, como luz e umidade.' }),
      option('Criar e testar a interface de um aplicativo.', 'design', { design: 2, research: .4 }, { design: 'Você quer observar se uma interface faz sentido para as pessoas.', research: 'Testar uma interface também é um pequeno experimento.' }),
      option('Analisar um cenário fictício de segurança e propor melhorias.', 'shield', { cybersecurity: 2, research: .5 }, { cybersecurity: 'Você quer reconhecer riscos e propor medidas de proteção.', research: 'Analisar cenários também ajuda a testar hipóteses sobre causas.' }),
    ],
  },
  {
    id: 9, stage: 'creation', prompt: 'Em um projeto em equipe, como gostaria de contribuir?',
    options: [
      option('Transformando ideias em funcionalidades.', 'code', { software: 2, management: .45 }, { software: 'Você gostaria de converter uma ideia em funções concretas.', management: 'Organizar prioridades ajuda a escolher o que construir primeiro.' }),
      option('Investigando informações e apresentando conclusões.', 'chart', { 'data-ai': 2, research: .75 }, { 'data-ai': 'Você gostaria de apoiar decisões com evidências.', research: 'Investigar e comunicar conclusões é parte de muitas áreas científicas.' }),
      option('Construindo, testando e aperfeiçoando protótipos.', 'build', { engineering: 2, environmental: .4 }, { engineering: 'Você prefere aprender fazendo e refinando protótipos.', environmental: 'Prototipar também permite testar soluções de menor impacto.' }),
      option('Pensando na experiência das pessoas e na apresentação visual.', 'design', { design: 2, management: .5 }, { design: 'Você dá valor à experiência das pessoas e à comunicação visual.', management: 'Uma boa apresentação também depende de coordenar o trabalho.' }),
      option('Organizando etapas, tarefas e colaboração para o projeto acontecer.', 'plan', { management: 2, software: .45 }, { management: 'Você se interessa em reunir pessoas e organizar caminhos para executar uma ideia.', software: 'Planos bem divididos também apoiam equipes de desenvolvimento.' }),
    ],
  },
  {
    id: 10, stage: 'creation', prompt: 'Qual dessas frases mais combina com o que você gostaria de experimentar?',
    options: [
      option('“Quero transformar uma ideia em algo que as pessoas possam usar.”', 'code', { software: 2, design: .45 }, { software: 'Você quer criar algo funcional a partir de uma ideia.', design: 'O uso por outras pessoas também pode orientar decisões de experiência.' }),
      option('“Quero descobrir o que os dados podem revelar.”', 'chart', { 'data-ai': 2, research: .65 }, { 'data-ai': 'Você se interessa pelas perguntas que dados podem ajudar a responder.', research: 'Buscar descobertas é uma motivação de pesquisa.' }),
      option('“Quero construir algo que antes só existia na minha imaginação.”', 'build', { engineering: 2, environmental: .4 }, { engineering: 'Você quer transformar imaginação em algo que possa ser testado.', environmental: 'Invenções podem ajudar a enfrentar necessidades do ambiente.' }),
      option('“Quero criar experiências que façam sentido para as pessoas.”', 'design', { design: 2, research: .35 }, { design: 'Você quer que uma experiência seja compreensível e significativa.', research: 'Entender as pessoas ajuda a avaliar o que faz sentido.' }),
      option('“Quero coordenar pessoas e etapas para uma ideia virar projeto real.”', 'plan', { management: 2, cybersecurity: .35 }, { management: 'Você quer organizar colaboração, prioridades e execução.', cybersecurity: 'Planejamento também pode incluir cuidado com riscos e segurança.' }),
    ],
  },
];

export type UniverseResult = {
  areaId: UniverseAreaId;
  score: number;
  rawScore: number;
  possibleScore: number;
  reasons: string[];
};

export function calculateUniverseResults(answers: (number | null)[]): UniverseResult[] {
  const earned = Object.fromEntries(Object.keys(universeAreas).map((id) => [id, 0])) as Record<UniverseAreaId, number>;
  const possible = Object.fromEntries(Object.keys(universeAreas).map((id) => [id, 0])) as Record<UniverseAreaId, number>;
  const evidence = Object.fromEntries(Object.keys(universeAreas).map((id) => [id, [] as string[]])) as Record<UniverseAreaId, string[]>;

  universeQuestions.forEach((question, questionIndex) => {
    const answerIndex = answers[questionIndex];
    Object.keys(universeAreas).forEach((key) => {
      const areaId = key as UniverseAreaId;
      const opportunity = Math.max(...question.options.map((choice) => choice.weights[areaId] ?? 0));
      possible[areaId] += opportunity;
    });
    if (answerIndex === null || answerIndex === undefined) return;
    const choice = question.options[answerIndex];
    if (!choice) return;
    Object.entries(choice.weights).forEach(([key, value]) => {
      const areaId = key as UniverseAreaId;
      earned[areaId] += value;
      const signal = choice.signals[areaId];
      if (signal && !evidence[areaId].includes(signal)) evidence[areaId].push(signal);
    });
  });

  return Object.keys(universeAreas).map((key) => {
    const areaId = key as UniverseAreaId;
    return {
      areaId,
      score: possible[areaId] ? (earned[areaId] / possible[areaId]) * 100 : 0,
      rawScore: earned[areaId],
      possibleScore: possible[areaId],
      reasons: evidence[areaId],
    };
  }).sort((a, b) => b.score - a.score || b.rawScore - a.rawScore || a.areaId.localeCompare(b.areaId));
}

export function getUniverseLeaders(results: UniverseResult[], tolerance = 8): UniverseResult[] {
  const leaders = results.filter((result) => result.rawScore > 0 && results[0].score - result.score <= tolerance).slice(0, 2);
  return leaders.length ? leaders : results.slice(0, 1);
}
