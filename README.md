# Conecta Elas

Protótipo interativo que apresenta a história de mulheres na ciência e a missão do Conecta Elas antes de conduzir à plataforma demonstrativa. A identidade usa a paleta vinho, rosa suave, creme, verde-sálvia e marrom escuro. A logo original permanece em `public/assets/logo-conecta-elas.png`, sem edição.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. `npm run build` gera a versão de produção; `npm run preview` a serve localmente. Execute `npm run test` para os testes automatizados.

## Publicação

O site é publicado no GitHub Pages automaticamente a cada push para `main`. A compilação usa o caminho `/conecta-elas/`, correspondente ao repositório. Depois que o workflow **Deploy to GitHub Pages** concluir, acesse `https://malcherhub-svg.github.io/conecta-elas/`.

## Experiência

- Nove capítulos narrativos horizontais, seguidos de uma plataforma independente.
- Roda do mouse, arraste, toque, teclado, menu, progresso e setas para navegar pela história.
- Busca e filtros locais para perfis demonstrativos e projetos.
- Em Projetos, a experiência **Descubra seu Universo** traz 10 perguntas em cinco etapas, afinidades exploratórias para oito áreas, resultado personalizado e filtros para projetos e perfis demonstrativos. As respostas ficam somente na memória da sessão e continuam disponíveis ao sair temporariamente e voltar ao jogo.
- Três conversas fictícias: envio de mensagem apenas local e temporário; reiniciar a página restaura os exemplos.
- Movimento reduzido e layout responsivo são considerados na plataforma e no minigame.

### Minigame Descubra seu Universo

Abra **Projetos → Começar minha descoberta**. `src/universeData.ts` contém as perguntas, pesos, sinais de resposta, textos e resultados; a pontuação é normalizada pelo máximo possível de cada área em cada pergunta. `src/UniverseGame.tsx` implementa a experiência e `src/universe.css` seus estilos. A classificação expressa afinidades de exploração, não vocação, capacidade ou recomendação profissional. Compartilhamento usa o recurso nativo do navegador quando disponível e oferece resumo copiável como alternativa. Nenhuma resposta é transmitida.

## Conteúdo e integrações

Profissionais, projetos, conversas e autoria são fictícios. Nenhuma mensagem ou solicitação é enviada a alguém. O site não oferece cadastro persistente, autenticação, contato profissional real, publicação, moderação ou oportunidades confirmadas. Esses recursos dependem de backend, regras de privacidade, consentimento, segurança, moderação e salvaguardas adequadas para menores. Contato e créditos da equipe precisam ser configurados pelos responsáveis.

Retratos históricos e fontes estão documentados em `src/storyData.ts` e em [documentação de experiência e ética](docs/UX-ETICA-AVALIACAO.md). São imagens de arquivo; não representam estudantes atuais nem depoimentos.

## Avaliação e limites

Os testes automatizados cobrem a sequência de capítulos, filtros, perfis, conversas locais e a lógica e fluxo principal do minigame. Não foram realizados testes com participantes, auditoria independente de heurísticas ou validação formal de acessibilidade/contraste; os roteiros e campos de evidência pendentes estão na documentação. Não inventamos resultados de pesquisa.
