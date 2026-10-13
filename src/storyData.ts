export const storyChapters = [
  'Abertura', 'Marie Curie', 'Ada Lovelace', 'Katherine Johnson',
  'Outras pioneiras', 'A inspiração continua', 'Como nasceu', 'O que queremos construir', 'Entre na plataforma',
];

export const pioneers = [
  { name: 'Hedy Lamarr', years: '1914–2000', area: 'Comunicações', image: '/images/hedy-lamarr.jpg', alt: 'Retrato histórico de Hedy Lamarr', contribution: 'Com o compositor George Antheil, co-desenvolveu e patenteou uma proposta de comunicação por salto de frequência, pensada para tornar sinais de rádio mais resistentes a interferências.', source: 'https://commons.wikimedia.org/wiki/File:Hedy_Lamarr_1944.jpg' },
  { name: 'Grace Hopper', years: '1906–1992', area: 'Computação', image: '/images/grace-hopper.jpg', alt: 'Retrato oficial de Grace Hopper na Marinha dos Estados Unidos', contribution: 'Desenvolveu um dos primeiros compiladores e ajudou a impulsionar linguagens de programação mais próximas da linguagem humana, incluindo o trabalho que levou ao COBOL.', source: 'https://commons.wikimedia.org/wiki/File:Grace_hopper.jpg' },
  { name: 'Dorothy Vaughan', years: '1910–2008', area: 'Matemática e programação', image: '/images/dorothy-vaughan.jpg', alt: 'Retrato jovem de Dorothy Vaughan, cedido pela família', contribution: 'Liderou a unidade segregada West Area Computing da NACA e tornou-se especialista em FORTRAN quando a computação eletrônica chegou à NASA.', source: 'https://commons.wikimedia.org/wiki/File:Dorothy_Johnson_Vaughan.jpg' },
];

export const professionalCategories = [
  'Todas', 'Desenvolvimento de software', 'Inteligência artificial', 'Ciência de dados', 'Engenharia',
  'Pesquisa científica', 'Segurança da informação', 'Design e tecnologia', 'Matemática e física',
];

export const professionals = [
  { id:'ana', name:'Ana', role:'Desenvolvedora de software', category:'Desenvolvimento de software', initials:'A', color:'rose', skills:['JavaScript','Acessibilidade','Projetos web'], experience:'Constrói produtos digitais e gosta de explicar programação por meio de projetos pequenos.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'julia', name:'Júlia', role:'Cientista de dados', category:'Ciência de dados', initials:'J', color:'sage', skills:['Dados','Visualização','Python'], experience:'Investiga padrões em conjuntos de dados e transforma perguntas em análises visuais.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'camila', name:'Camila', role:'Engenheira', category:'Engenharia', initials:'C', color:'plum', skills:['Prototipagem','Sistemas','Trabalho em equipe'], experience:'Desenvolve protótipos, testa ideias e trabalha com equipes multidisciplinares.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'luiza', name:'Luiza', role:'Pesquisadora em inteligência artificial', category:'Inteligência artificial', initials:'L', color:'gold', skills:['Aprendizado de máquina','Ética','Pesquisa'], experience:'Estuda como sistemas aprendem padrões e como desenvolver tecnologia com responsabilidade.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'maya', name:'Maya', role:'Analista de segurança da informação', category:'Segurança da informação', initials:'M', color:'blue', skills:['Privacidade','Redes','Segurança'], experience:'Ajuda equipes a entender riscos e projetar sistemas que protegem informações.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'bia', name:'Bia', role:'Designer de tecnologia', category:'Design e tecnologia', initials:'B', color:'coral', skills:['Pesquisa com pessoas','Prototipagem','Interfaces'], experience:'Desenha experiências digitais acessíveis e testa ideias com pessoas usuárias.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
  { id:'nina', name:'Nina', role:'Física e pesquisadora', category:'Matemática e física', initials:'N', color:'sage', skills:['Física','Modelagem','Experimentação'], experience:'Usa modelos matemáticos e experimentos para investigar fenômenos físicos.', about:'Perfil inteiramente fictício, criado para demonstrar como estudantes poderiam explorar áreas e experiências profissionais.' },
];

export const demoProjects = [
 {title:'Dados que contam histórias', category:'Ciência de dados', icon:'◌', about:'Um projeto demonstrativo de visualização que transforma uma tabela pública em gráficos e perguntas investigáveis.'},
 {title:'Jardim com sensores', category:'Engenharia', icon:'✳', about:'Protótipo fictício que combina sensores simples e programação para observar a umidade do solo.'},
 {title:'Pequeno guia de segurança', category:'Segurança da informação', icon:'⌑', about:'Uma experiência educativa sobre senhas fortes, privacidade e hábitos digitais mais seguros.'},
];

export const conversations = [
 {id:'ana', name:'Ana', role:'Desenvolvedora de software', initials:'A', color:'rose', messages:[
  {from:'student',text:'Oi! Estou no ensino médio e quero aprender programação, mas ainda não sei por onde começar. Como foi para você?',time:'14:02'},
  {from:'professional',text:'Oi! Que legal saber do seu interesse. Eu comecei aprendendo lógica de programação e fazendo pequenos projetos. Você não precisa saber tudo de uma vez.',time:'14:04'},
  {from:'student',text:'Você acha que preciso ser muito boa em matemática?',time:'14:06'},
  {from:'professional',text:'Ter uma base de matemática ajuda, mas o mais importante é praticar, fazer perguntas e continuar aprendendo. Você pode começar com projetos simples e evoluir aos poucos.',time:'14:08'},
 ]},
 {id:'julia', name:'Júlia', role:'Cientista de dados', initials:'J', color:'sage', messages:[
  {from:'student',text:'Tenho curiosidade sobre inteligência artificial e ciência de dados. Qual é a diferença entre essas áreas?',time:'10:16'},
  {from:'professional',text:'A ciência de dados trabalha com informações para encontrar padrões e apoiar decisões. A inteligência artificial envolve técnicas que permitem que sistemas realizem tarefas como reconhecer padrões e gerar previsões.',time:'10:18'},
  {from:'student',text:'Existe algum projeto que eu possa fazer para começar?',time:'10:21'},
  {from:'professional',text:'Você pode começar analisando uma pequena tabela de dados, criando gráficos e tentando responder a uma pergunta com os resultados.',time:'10:23'},
 ]},
 {id:'camila', name:'Camila', role:'Engenheira', initials:'C', color:'plum', messages:[
  {from:'student',text:'Eu gosto de tecnologia, mas ainda estou em dúvida sobre qual carreira seguir.',time:'16:42'},
  {from:'professional',text:'Isso é normal! Você pode explorar diferentes áreas, conhecer projetos e conversar com profissionais antes de decidir.',time:'16:44'},
  {from:'student',text:'Como posso descobrir qual combina mais comigo?',time:'16:47'},
  {from:'professional',text:'Experimente atividades diferentes, observe o que desperta sua curiosidade e converse com pessoas que trabalham nessas áreas. Você não precisa decidir tudo agora.',time:'16:49'},
 ]},
];
