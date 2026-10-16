export const storyChapters = [
  'Abertura', 'Marie Curie', 'Ada Lovelace', 'Katherine Johnson',
  'Outras pioneiras', 'Jaqueline Góes de Jesus', 'Ester Cerdeira Sabino', 'Sonia Guimarães',
  'Márcia Cristina Bernardes Barbosa', 'Enedina Alves Marques', 'Nise da Silveira',
  'A inspiração continua', 'Como nasceu', 'O que queremos construir', 'Entre na plataforma',
];

export const pioneers = [
  { name: 'Hedy Lamarr', years: '1914–2000', area: 'Comunicações', image: '/images/hedy-lamarr.jpg', alt: 'Retrato histórico de Hedy Lamarr', contribution: 'Com o compositor George Antheil, co-desenvolveu e patenteou uma proposta de comunicação por salto de frequência, pensada para tornar sinais de rádio mais resistentes a interferências.', source: 'https://commons.wikimedia.org/wiki/File:Hedy_Lamarr_1944.jpg' },
  { name: 'Grace Hopper', years: '1906–1992', area: 'Computação', image: '/images/grace-hopper.jpg', alt: 'Retrato oficial de Grace Hopper na Marinha dos Estados Unidos', contribution: 'Desenvolveu um dos primeiros compiladores e ajudou a impulsionar linguagens de programação mais próximas da linguagem humana, incluindo o trabalho que levou ao COBOL.', source: 'https://commons.wikimedia.org/wiki/File:Grace_hopper.jpg' },
  { name: 'Dorothy Vaughan', years: '1910–2008', area: 'Matemática e programação', image: '/images/dorothy-vaughan.jpg', alt: 'Retrato jovem de Dorothy Vaughan, cedido pela família', contribution: 'Liderou a unidade segregada West Area Computing da NACA e tornou-se especialista em FORTRAN quando a computação eletrônica chegou à NASA.', source: 'https://commons.wikimedia.org/wiki/File:Dorothy_Johnson_Vaughan.jpg' },
  { name: 'Jaqueline Góes de Jesus', years: '1989–', area: 'Biomedicina e virologia', image: '/images/jaqueline-goes.jpg', alt: 'Jaqueline Góes de Jesus participa de cerimônia do Prêmio Mulheres na Ciência', contribution: 'Pesquisadora em biomedicina e vigilância genômica. Participou, com Ester Sabino e equipes da USP e do Instituto Adolfo Lutz, do sequenciamento do SARS-CoV-2 no primeiro caso confirmado no Brasil: o trabalho foi concluído em cerca de 48 horas.', source: 'https://commons.wikimedia.org/wiki/File:Jaqueline_Goes_-_Pr%C3%AAmio_Mulheres_na_Ci%C3%AAncia.jpg' },
  { name: 'Ester Cerdeira Sabino', years: '1960–', area: 'Medicina e imunologia', image: '/images/ester-sabino.jpg', alt: 'Ester Sabino em evento de premiação do Governo do Estado de São Paulo', contribution: 'Médica e imunologista, participou com Jaqueline Góes de Jesus e equipes da USP e do Instituto Adolfo Lutz do sequenciamento do SARS-CoV-2 no primeiro caso confirmado no Brasil, concluído em cerca de 48 horas.', source: 'https://commons.wikimedia.org/wiki/File:ENTREGA_DO_PR%C3%8AMIO_ESTER_SABINO_2022_(51875382473)_(cropped).jpg' },
  { name: 'Sonia Guimarães', years: '1957–', area: 'Física experimental', image: '/images/sonia-guimaraes.jpg', alt: 'Sonia Guimarães, professora e pesquisadora do ITA', contribution: 'Foi a primeira mulher negra brasileira a obter doutorado em Física. Sua pesquisa em Física experimental envolve materiais e dispositivos semicondutores, área em que também desenvolveu sensores.', source: 'https://itaex.org.br/2024/11/20/sonia-guimaraes-uma-professora-emerita-na-luta-por-diversidade-e-inclusao-nas-ciencias/' },
  { name: 'Márcia Cristina Bernardes Barbosa', years: '1960–', area: 'Física da matéria condensada', image: '/images/marcia-barbosa.jpg', alt: 'Márcia Cristina Bernardes Barbosa, física da UFRGS', contribution: 'Investiga as propriedades incomuns da água e de líquidos complexos. Seus estudos ajudam a compreender fenômenos como as anomalias de densidade da água e suas interações com biomoléculas.', source: 'https://www.sbfisica.org.br/v1/sbf/meninas-e-mulheres-cientistas-enfrentam-machismo-na-fisica/' },
  { name: 'Enedina Alves Marques', years: '1913–1981', area: 'Engenharia civil', image: '/images/enedina-alves-marques.jpg', alt: 'Retrato histórico em preto e branco de Enedina Alves Marques', contribution: 'Primeira mulher negra a se formar em Engenharia Civil no Brasil, em 1945. Atuou em obras de infraestrutura no Paraná, incluindo o Plano Hidrelétrico e o levantamento topográfico da Usina Capivari-Cachoeira.', source: 'https://unifei.edu.br/personalidades-do-muro/extensao/enedina-alves-marques/' },
  { name: 'Nise da Silveira', years: '1905–1999', area: 'Psiquiatria e medicina', image: '/images/nise-da-silveira.jpg', alt: 'Retrato de Nise da Silveira, psiquiatra brasileira', contribution: 'Defendeu um cuidado em saúde mental mais humano e se opôs a práticas agressivas como eletrochoque e lobotomia. Criou ateliês de pintura e modelagem como recursos terapêuticos, que deram origem ao Museu de Imagens do Inconsciente.', source: 'https://museuimagensdoinconsciente.org.br/nise-da-silveira/' },
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
