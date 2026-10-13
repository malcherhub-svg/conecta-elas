# Conecta Elas — decisões de experiência e avaliação

> **Escopo atualizado:** o produto tem nove capítulos cinematográficos de história/propósito, seguidos de uma área de plataforma separada com Comunidade, Profissionais, Projetos, chat local demonstrativo e Oportunidades. A aba e a tela de Desafios/quiz foram removidas; o minigame “Descubra seu Universo” permanece em Projetos. Menções abaixo a quiz e desafios descrevem hipóteses e roteiros acadêmicos anteriores, não funcionalidades visíveis atuais. A validação atual limita-se ao build e testes automatizados; ainda não houve teste com pessoas nem avaliação heurística independente.

## Escopo e status

Este documento descreve decisões implementadas no protótipo e hipóteses que ainda precisam de validação. Não houve avaliação com participantes reais. Os perfis e projetos apresentados na interface são demonstrações fictícias. Campos de evidência real ficam pendentes até a realização de sessões autorizadas.

## DCU: hipótese de persona e jornada

**Persona hipotética inicial (não representa participante entrevistada):** estudante do ensino fundamental ou médio, curiosa sobre programação, com acesso ocasional pelo celular. Gosta de exemplos práticos, mas pode não conhecer mulheres da área e pode hesitar em pedir ajuda em público.

| Dimensão | Hipótese inicial |
|---|---|
| Necessidades | Orientação compreensível, exemplos práticos, referências diversas, segurança e liberdade para explorar no próprio ritmo. |
| Dificuldades | Pouca familiaridade com termos STEM, receio de errar, acesso móvel e falta de informação sobre quem verá dados e publicações. |
| Objetivos | Encontrar uma atividade inicial, aprender algo concreto e reconhecer caminhos possíveis de estudo. |
| Contexto | Uso curto, possivelmente em celular e em ambiente escolar ou doméstico compartilhado. |

**Jornada hipotética:** chega pela abertura → entende a proposta → escolhe uma área → explora um projeto → resolve um desafio com explicação → considera buscar mentoria → identifica limites de segurança e como voltar. A interface usa títulos claros, exemplos demonstrativos, filtros, feedback após resposta e navegação sempre visível para apoiar essa jornada. Validar essas hipóteses com estudantes, responsáveis e educadores antes de tomar decisões de produto.

| Decisão de interface | Necessidade atendida / justificativa |
|---|---|
| Dez cenas horizontais com capítulos numerados, menu, progresso e setas | Torna a estrutura e as ações de navegação visíveis; oferece mais de uma forma de avançar. |
| Rótulo junto a ícone, texto junto a estados visuais | Evita depender apenas de cor ou de interpretação de símbolos. |
| Busca e filtros com estado vazio e ação para limpar | Permite refinar e recuperar a exploração sem memorizar categorias. |
| Quiz com explicação e sem relógio | Apoia aprendizagem e avaliação da resposta, sem pressionar velocidade. |
| Avisos para dados demonstrativos e ações sem backend | Evita sugerir que perfis são reais ou que uma solicitação foi enviada. |
| Rolagem interna em telas estreitas e preferência por movimento reduzido | Mantém o conteúdo utilizável em diferentes dispositivos e preferências. |

## Golfo de Execução e Golfo de Avaliação

**Execução:** a usuária identifica ações por botões verbais, menu de cenas numerado, filtros nomeados, sequência de etapas e controles do quiz. As setas, instrução inicial e teclas anunciadas reduzem a distância entre intenção e ação.

**Avaliação:** a cena ativa, progresso, alternativa selecionada, confirmação, pontuação e explicação tornam o resultado observável. Estados vazios e avisos de protótipo explicam quando não há correspondência ou quando uma operação não foi enviada.

### Problemas levantados como hipóteses (não observados em teste)

| Problema hipotético | Golfo | Evidência disponível | Solução no protótipo / validação pendente |
|---|---|---|---|
| Uma pessoa pode interpretar rolagem para baixo como movimento vertical da página | Execução | A composição tem capítulos lado a lado; isso é risco de entendimento, não evidência de participante | Instrução “Role para explorar”, setas e menu; validar compreensão e calibrar wheel. |
| Uma solicitação de mentoria pode parecer enviada mesmo sem backend | Avaliação | Não existe serviço de envio configurado | Mensagem informa que nada foi enviado; validar se o aviso é percebido. |
| Um erro no quiz pode ser interpretado como fracasso | Avaliação | Hipótese de leitura do feedback, sem teste | Feedback neutro com explicação educativa e convite para continuar. |
| No celular, o gesto horizontal pode conflitar com rolagem vertical | Execução | Restrição de espaço e gestos concorrentes são hipótese técnica | Rolagem interna vertical, gesto lateral com limiar e controles alternativos; testar em aparelhos reais. |

## Matriz das heurísticas de Nielsen

| Heurística | Aplicação | Localização | Justificativa |
|---|---|---|---|
| 1. Visibilidade do estado | Cena ativa, contador, progresso, feedback do quiz | Barra inferior e cena 7 | A pessoa percebe posição e resultado. |
| 2. Correspondência com o mundo real | Vocabulário cotidiano, jornada numerada, exemplos de projetos | Cenas 3–7 | Termos familiares aproximam a interface das tarefas. |
| 3. Controle e liberdade | Menu direto, setas, Home/End, filtros resetáveis, repetir quiz | Global, cenas 5–7 | Permite escolher caminho e recuperar controle. |
| 4. Consistência e padrões | Botões, cartões, capítulos e paleta recorrentes | Todas | Padrões reduzem reaprendizagem. |
| 5. Prevenção de erros | Confirmar resposta só após seleção; ações sem backend claramente identificadas | Cenas 5 e 7 | Evita submissão acidental ou falsa expectativa. |
| 6. Reconhecimento em vez de memorização | Menu com nomes, filtros visíveis, conteúdo e opções na tela | Global, cenas 5–7 | Reconhecer opções exige menos memória. |
| 7. Flexibilidade e eficiência | Navegação por mouse, toque, teclado, menu ou indicador | Global | Diferentes ritmos e preferências têm alternativas. |
| 8. Design estético e minimalista | Hierarquia visual, conteúdo por capítulo e espaço em branco | Todas | Mantém foco no objetivo de cada tela. |
| 9. Diagnóstico e recuperação de erros | Estados vazios, botão de limpar, feedback e mensagens de não envio | Cenas 5–7 | Explica o que ocorreu e como se recuperar. |
| 10. Ajuda e documentação | Instrução inicial, aviso de protótipo, README e este documento | Cena 1 e documentação | Orienta navegação, escopo e limites. |

### Ficha de avaliação heurística

Não foi realizada inspeção por avaliador independente. Portanto, gravidade observada não foi atribuída. Preencher a ficha durante uma inspeção futura; escala: 0 = não é problema, 1 = cosmético, 2 = menor, 3 = grave, 4 = catastrófico.

| Problema encontrado | Heurística | Evidência concreta | Gravidade (0–4) | Correção sugerida |
|---|---|---|---|---|
| [preencher após inspeção] | [número] | [captura/local/ação] | [atribuir após avaliação] | [ação] |
| [preencher após inspeção] | [número] | [captura/local/ação] | [atribuir após avaliação] | [ação] |

## Cor e contraste

| Cor | Uso proposto | Observação |
|---|---|---|
| Vinho `#8E3B5A` | Identidade e ações principais | Texto branco sobre vinho ~7,2:1; vinho sobre creme ~6,8:1. |
| Rosa suave `#E8B4C8` | Realces e superfícies secundárias | Decorativa; texto principal é marrom escuro. |
| Creme `#FFF7F1` | Fundo | Conforto visual; texto principal usa marrom escuro. |
| Verde-sálvia `#A8B5A2` | Apoio e indicadores | Superfície decorativa; não é usada sozinha para transmitir estado. |
| Marrom `#35252B` | Texto e superfícies de destaque | Marrom sobre creme ~13,7:1. |

Razões são estimativas calculadas com luminância relativa WCAG 2.x; devem ser confirmadas em ferramenta automatizada no navegador e revisadas em cada estado, inclusive foco, hover e desativado. O critério de referência é 4,5:1 para texto normal e 3:1 para texto grande. Não usar cor como único sinal de resposta correta, erro ou seleção: há ícone, texto e contorno.

## Engenharia Semiótica

- **Signos estáticos:** hierarquia de títulos, cartões, cores, rótulos e ícones acompanham o significado textual.
- **Signos dinâmicos:** barra de progresso, cena ativa, foco, alternativa selecionada e feedback mostram mudanças após ações.
- **Signos metalinguísticos:** instrução de navegação, rótulos “demonstração”, avisos de não envio e notas sobre protótipo explicam como interpretar o sistema.
- Setas indicam direção; botões têm nomes acessíveis; foco é visível; controles desativados usam estado nativo e rótulo/contexto.

## Inclusão, ética e privacidade

O protótipo usa elementos semânticos, rótulos de formulário, texto alternativo para a imagem da marca, estados com `role=status`, foco de teclado, contraste de texto e respeito a `prefers-reduced-motion`. Em produção, validar WCAG 2.2 AA com leitor de tela, zoom, alto contraste, teclado e dispositivos móveis.

Não coletar dados pessoais para demonstrar a navegação. Nenhum formulário transmite informações. Antes de um lançamento comunitário: definir base legal e consentimento adequado, política de retenção e exclusão, acesso mínimo a dados, moderação capacitada, canal de denúncia, resposta a incidentes, regras contra assédio e supervisão apropriada para menores. Não iniciar contato individual entre adultos e menores sem salvaguardas e governança explícitas. Comentários não estão habilitados.

## Roteiro de teste de comunicabilidade (MAC)

Realizar com pelo menos duas pessoas reais, mediante consentimento e protocolo adequado à idade; se menores, envolver responsáveis e equipe escolar conforme exigido. Moderador observa sem orientar inicialmente; pedir que a pessoa pense em voz alta. Registrar gravação/tela apenas com autorização. Anonimizar e remover identificadores.

1. Encontre uma mentora de programação.
2. Localize um projeto de ciências.
3. Responda a um desafio e explique o feedback recebido.
4. Navegue para outra cena usando a navegação horizontal.
5. Encontre as informações sobre impacto na escola.
6. Identifique como voltar ao início.

Etiquetas possíveis do MAC devem ser aplicadas somente quando comportamento e fala sustentarem a interpretação. Exemplos de vocabulário: “Cadê?” (busca por algo não percebido), “E agora?” (incerteza sobre próximo passo), “Ué, o que houve?” (surpresa diante de resultado inesperado). Considerar também outras etiquetas do método quando a evidência indicar. Não atribuir etiqueta por adivinhação.

| Participante anonimizada | Tarefa | Comportamento observado | Etiqueta MAC | Evidência (fala/ação/tempo) | Possível correção |
|---|---|---|---|---|---|
| P01 (pendente) | [1–6] | [registrar] | [somente com evidência] | [citação curta/ação] | [proposta] |
| P02 (pendente) | [1–6] | [registrar] | [somente com evidência] | [citação curta/ação] | [proposta] |

## Antes e depois — registro de correções

O estado anterior corresponde ao início vazio do workspace, não a uma versão do produto com participantes ou captura conhecida. As soluções abaixo foram implementadas como decisões preventivas derivadas de hipóteses, sem alegar achados de teste. Capturas reais antes/depois e evidências observadas permanecem pendentes; gerar após sessão de teste e registrar ambiente e versão.

| Item | Imagem anterior | Problema e evidência | Heurística/golfo | Solução implementada | Imagem posterior / justificativa |
|---|---|---|---|---|---|
| Navegação | Pendente; não havia interface no workspace | Hipótese: gesto horizontal é pouco descobrível; evidência de uso real pendente | Nielsen 6/7; Execução | Instrução, menu, contador, setas, teclado e gesto | Captura pendente. Redundância de controles pode facilitar descoberta e recuperação. |
| Mentoria | Pendente; não havia interface no workspace | Hipótese: perfil fictício pode ser confundido com pessoa real; evidência pendente | Nielsen 5/9; Avaliação | Rótulo de demonstração e aviso que pedido não é enviado | Captura pendente. Explicita o estado e reduz falsa expectativa. |
| Quiz | Pendente; não havia interface no workspace | Hipótese: resposta errada pode não explicar aprendizagem; evidência pendente | Nielsen 1/9; Avaliação | Confirmação, estado de alternativa, mensagem e explicação | Captura pendente. Torna resultado perceptível e recuperação educativa. |

## Checklist pré-lançamento

- [x] Integrar a logo original intacta em `public/assets/logo-conecta-elas.png`; cópia verificada por SHA-256. Não foi fornecida versão separada para favicon.
- [ ] Configurar contato/créditos autorizados e integrações de backend.
- [ ] Auditar contraste automatizado e manual, leitor de tela, teclado, zoom e mobile.
- [ ] Fazer inspeção heurística e completar gravidade baseada em evidência.
- [ ] Conduzir sessões MAC, preencher evidências reais e atualizar capturas antes/depois.
- [ ] Implementar governança, segurança, moderação, denúncia e privacidade antes de qualquer comunidade real.

## Complemento da narrativa e da plataforma (versão atual)

### Jornada e decisões de DCU

O fluxo começa com histórias de mulheres na ciência, passa da referência histórica à missão do projeto, explica os pilares conexão/orientação/oportunidades e termina na plataforma. Essa ordem procura responder, antes de pedir exploração, “por que isso existe?” e “o que posso fazer aqui?”. Na plataforma, a navegação fica separada da apresentação para permitir descoberta sem repetir a narrativa.

Persona continua sendo hipótese inicial: estudante do ensino médio curiosa sobre tecnologia, que ainda não escolheu profissão e precisa de exemplos acessíveis, oportunidade de fazer perguntas e clareza sobre segurança. Jornada: conhecer pioneiras → compreender a proposta → explorar áreas/profissionais demonstrativas → abrir projeto ou conversa fictícia → experimentar o quiz → entender que interações reais exigem serviços e salvaguardas futuras.

### Engenharia semiótica e engenharia cognitiva

Na plataforma, categorias nomeadas, campos com rótulo, cartões com ação explícita e navegação por abas ajudam a formular a intenção (Golfo de Execução). Filtros selecionados, mensagens de estado vazio, aviso de demonstração e confirmação de que a mensagem ficou somente no protótipo ajudam a interpretar resultados (Golfo de Avaliação). O histórico de chat tem marcação visual de demonstração; o texto deixa claro que a mensagem não foi enviada a uma pessoa.

Signos estáticos incluem retratos com legenda, categorias, ícones nomeados e rótulos “demonstração”. Signos dinâmicos incluem capítulo ativo, foco, filtros selecionados, resposta e progresso do quiz, conversa escolhida e mensagem local acrescentada. Signos metalinguísticos são as instruções de navegação e os avisos que explicam os limites do protótipo.

### Fontes históricas e imagens

As frases em destaque de Marie Curie, Ada Lovelace e Katherine Johnson são textos inspiracionais escritos para o site e explicitamente não são citações históricas. Fontes de referência para contribuições biográficas:

- [Marie Curie — Nobel Prize](https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/biographical/)
- [Ada Lovelace — Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/ada-lovelace)
- [Katherine Johnson — NASA](https://science.nasa.gov/people/katherine-johnson/)
- [Dorothy Vaughan — NASA](https://www.nasa.gov/people/dorothy-vaughan/)
- [Retrato de Dorothy Vaughan jovem — Wikimedia Commons, domínio público, original cedido pela família](https://commons.wikimedia.org/wiki/File:Dorothy_Johnson_Vaughan.jpg)
- [Hedy Lamarr — Smithsonian](https://dashboard.si.edu/newsdesk/snapshot/hedy-lamarr-golden-age-film-star-and-important-inventor)
- [Grace Hopper — Computer History Museum](https://computerhistory.org/profile/grace-murray-hopper/)

Os arquivos dos retratos, páginas de origem e respectivas informações de licença estão registrados no objeto `pioneers` em `src/storyData.ts`; os arquivos servidos localmente ficam em `public/images/`. Conferir termos de reutilização e atribuição das páginas de origem antes de redistribuir o site em outros contextos. A ferramenta de geração de imagem não estava disponível; imagens contemporâneas ilustrativas de estudantes não foram inventadas nem substituídas por fotos sem licença verificada.

### Chat demonstrativo, privacidade e oportunidades

Há três conversas roteirizadas com nomes explicitamente fictícios. É possível selecioná-las, digitar e acrescentar mensagem à conversa ativa no estado local da página. Não existe transmissão, persistência ou entrega real; recarregar restaura o roteiro. Não há comentários públicos. O painel de oportunidades esclarece que são futuras e não garantidas. Para comunidade real são necessários autenticação e autorização, consentimento apropriado, regras de contato, minimização/retensão de dados, denúncia, moderação e proteção específica para menores.

### MAC: tarefas atualizadas

Para a avaliação futura com pelo menos duas participantes reais, usar o roteiro original acrescido de: (a) encontrar uma profissional em uma área escolhida; (b) abrir uma das conversas demonstrativas e enviar uma mensagem, explicando o que aconteceu; e (c) voltar da plataforma à apresentação ou ao início. As etiquetas “Cadê?”, “E agora?” e “Ué, o que houve?” só devem ser atribuídas diante da fala/ação observada que as sustente. Preencher tabela por participante anonimizada, tarefa, comportamento, etiqueta, evidência e correção; resultados permanecem pendentes.

### Antes/depois e ficha heurística

As três linhas de melhoria existentes são hipóteses preventivas do protótipo, não correções baseadas em achados de participantes. Capturas anteriores/posteriores de uma versão publicada e evidências observadas devem ser coletadas em avaliação real antes de chamar essas alterações de “achados”. A ficha de gravidade permanece vazia até uma inspeção documentada; não atribuir nota presumida. Sugestões adicionais a avaliar: tornar evidente que o chat é local, explicar ausência de envio externo e facilitar retorno entre plataforma e capítulos.
