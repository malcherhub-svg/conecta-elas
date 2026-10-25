import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Code2, Menu, MoveRight, ShieldCheck, X } from 'lucide-react';
import Platform from './Platform';
import { assetUrl } from './assets';
import { pioneers, storyChapters } from './storyData';

const techPioneers = pioneers.slice(0, 3);
type PlatformEntry = 'discover' | 'professionals' | 'projects';
function Brand({ className = '' }: { className?: string }) {
  return <a className={`brand ${className}`} href="#chapter-1" aria-label="Conecta Elas, início"><img src={assetUrl('/assets/logo-conecta-elas.png')} alt="Logo Conecta Elas" /></a>;
}

export default function App() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [platformEntry, setPlatformEntry] = useState<PlatformEntry>('discover');
  const track = useRef<HTMLDivElement>(null);
  const lastWheel = useRef(0);
  const drag = useRef<{ pointerId: number; x: number; scrollLeft: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const go = useCallback((index: number) => {
    const next = Math.max(0, Math.min(storyChapters.length - 1, index));
    setActive(next);
    setMenuOpen(false);
    document.getElementById(`chapter-${next + 1}`)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', inline: 'start', block: 'nearest' });
  }, []);
  useEffect(() => {
    if (platform || !track.current) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index)); }), { root: track.current, threshold: .58 });
    track.current.querySelectorAll('.story-scene').forEach(scene => observer.observe(scene));
    return () => observer.disconnect();
  }, [platform]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (platform || ['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement)?.tagName)) return;
      if (['ArrowRight', 'PageDown'].includes(event.key)) { event.preventDefault(); go(active + 1); }
      else if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(active - 1); }
      else if (event.key === 'Home') go(0);
      else if (event.key === 'End') go(storyChapters.length - 1);
      else if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [active, go, platform]);
  const wheel = (event: React.WheelEvent) => {
    if (platform) return;
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const delta = horizontal ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 12) return;
    if (!horizontal) {
      const scene = (event.target as HTMLElement).closest<HTMLElement>('.story-scene');
      const canScrollInside = scene && scene.scrollHeight > scene.clientHeight &&
        (delta > 0 ? scene.scrollTop + scene.clientHeight < scene.scrollHeight - 2 : scene.scrollTop > 2);
      if (canScrollInside) return;
    }
    event.preventDefault();
    const now = Date.now();
    if (now - lastWheel.current < 650) return;
    lastWheel.current = now;
    go(active + (delta > 0 ? 1 : -1));
  };
  const startDrag = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || (event.target as HTMLElement).closest('button, a, input, select, textarea')) return;
    drag.current = { pointerId: event.pointerId, x: event.clientX, scrollLeft: track.current?.scrollLeft ?? 0, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: React.PointerEvent<HTMLElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId || !track.current) return;
    const distance = event.clientX - drag.current.x;
    if (Math.abs(distance) > 6) drag.current.moved = true;
    if (drag.current.moved) { event.preventDefault(); track.current.scrollLeft = drag.current.scrollLeft - distance; }
  };
  const endDrag = (event: React.PointerEvent<HTMLElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    suppressClick.current = drag.current.moved;
    drag.current = null;
    window.setTimeout(() => { suppressClick.current = false; }, 0);
  };
  const enterPlatform = (entry: PlatformEntry) => { setPlatformEntry(entry); setPlatform(true); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); };
  if (platform) return <Platform initialTab={platformEntry === 'projects' ? 'projects' : platformEntry} startGame={platformEntry === 'projects'} onReturn={() => { setPlatform(false); requestAnimationFrame(() => go(storyChapters.length - 1)); }} />;
  return <div className="app story-app" onWheel={wheel}>
    <a href="#chapter-7" className="skip-platform">Pular apresentação e explorar tecnologia</a>
    <header className="topbar story-topbar"><Brand /><div className="header-hint"><MoveRight size={15} /> Mulheres que abriram caminhos na tecnologia</div><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir capítulos'}>{menuOpen ? <X /> : <Menu />}</button></header>
    {menuOpen && <nav className="menu-panel story-menu" aria-label="Navegação dos capítulos">{storyChapters.map((title, index) => <button key={title} className={active === index ? 'chosen' : ''} onClick={() => go(index)}><span>{String(index + 1).padStart(2, '0')}</span>{title}{active === index && <Check size={16} />}</button>)}</nav>}
    <div className="story-sr-only" aria-live="polite" aria-atomic="true">Tela {active + 1} de {storyChapters.length}: {storyChapters[active]}</div>
    <main ref={track} className="track story-track" aria-label="História do Conecta Elas" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}>
      {storyChapters.map((chapter, index) => <section id={`chapter-${index + 1}`} data-index={index} className={`scene story-scene chapter-${index + 1}${active === index ? ' is-active' : ''}`} key={chapter} aria-label={`Capítulo ${index + 1}: ${chapter}`}>
        <div className="story-inner">
          {index > 0 && <div className="story-eyebrow"><Code2 /><span>CAPÍTULO {String(index + 1).padStart(2, '0')} · {chapter.toUpperCase()}</span></div>}
          {index === 0 && <div className="opening-layout"><div className="opening-copy"><Brand className="opening-brand" /><p className="story-kicker">TECNOLOGIA, CORAGEM E CONEXÃO</p><h1>O futuro também<br />tem nome de <em>mulher.</em></h1><p className="opening-line">Conheça mulheres que ajudaram a imaginar, construir e transformar a tecnologia.</p><button className="story-button" onClick={() => go(1)}>Conhecer essas histórias <ArrowRight size={17} /></button><button className="story-button gateway-secondary" onClick={() => enterPlatform('discover')}>Pular apresentação <ArrowRight size={17} /></button><button className="story-button gateway-secondary" onClick={() => enterPlatform('professionals')}>Conhecer profissionais <ArrowRight size={17} /></button><button className="story-button gateway-secondary" onClick={() => enterPlatform('projects')}>Começar o minigame <ArrowRight size={17} /></button><span className="story-scroll-hint">Arraste ou deslize para mudar de tela · use o menu ou as setas do teclado</span></div><div className="opening-art" aria-hidden="true"><div className="open-planet planet-large" /><div className="open-planet planet-small" /><div className="science-orbit orbit-one" /><div className="science-orbit orbit-two" /><span className="science-symbol symbol-code">&lt; / &gt;</span><span className="science-symbol symbol-star">✳</span><span className="opening-caption">IDEIAS QUE<br />MUDAM O MUNDO</span><div className="opening-index">01 <i>/ 07</i></div></div></div>}
          {index === 1 && <div className="historian-layout"><figure className="historian-image"><div className="portrait-frame"><img src={assetUrl('/images/ada-lovelace.jpg')} alt="Retrato pintado de Ada Lovelace" loading="eager" decoding="async" /></div><figcaption><span>RETRATO HISTÓRICO</span><a href="https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg" target="_blank" rel="noreferrer">Crédito e origem da imagem <ArrowRight size={14} /></a></figcaption></figure><div className="historian-copy"><p className="story-kicker">UMA PIONEIRA DA COMPUTAÇÃO</p><h2>Ada Lovelace<br /><em>imaginou além dos números.</em></h2><div className="historian-bio"><p>Em suas notas sobre a Máquina Analítica, Ada descreveu uma sequência de operações para calcular números de Bernoulli. Também percebeu que máquinas poderiam manipular símbolos seguindo regras — uma ideia que antecipou possibilidades da computação.</p></div><a className="platform-link" href="https://collection.sciencemuseumgroup.org.uk/people/cp38764/ada-lovelace" target="_blank" rel="noreferrer">Fonte biográfica: Science Museum <ArrowRight size={15} /></a></div></div>}
          {index === 2 && <><div className="history-intro"><div><p className="story-kicker">COMUNICAÇÃO, COMPUTAÇÃO E PROGRAMAÇÃO</p><h2>Três trajetórias<br />na <em>história da tecnologia.</em></h2></div><p>Conheça pioneiras cujas contribuições ajudam a contar a história da tecnologia.</p></div><div className="pioneer-grid">{techPioneers.map((p, i) => <article className="pioneer-card" key={p.name}><div className="pioneer-photo"><img src={assetUrl(p.image)} alt={p.alt} loading="lazy" decoding="async" /><span>0{i + 1}</span></div><div className="pioneer-copy"><div className="pioneer-meta"><span>{p.area}</span><span>{p.years}</span></div><h3>{p.name}</h3><p>{p.contribution}</p><a href={p.source} target="_blank" rel="noreferrer">Fonte e créditos da imagem <ArrowRight size={14} /></a></div></article>)}</div></>}
          {index === 3 && <div className="bridge-layout"><div className="bridge-copy"><p className="story-kicker">A INSPIRAÇÃO CONTINUA</p><h2>Conhecer quem abriu caminhos ajuda a imaginar <em>o que vem depois.</em></h2><p>Hoje, mulheres trabalham em desenvolvimento de software, dados, inteligência artificial, engenharia, design e segurança digital. A tecnologia também pode ser um caminho para você.</p><button className="story-button" onClick={() => go(4)}>Sobre o Conecta Elas <ArrowRight size={16} /></button></div><div className="bridge-now"><Code2 /><b>ESTUDANTES · PROFISSIONAIS · TECNOLOGIA</b></div></div>}
          {index === 4 && <div className="origin-layout"><div className="origin-heading"><p className="story-kicker">UMA IDEIA NASCEU DE UMA PERGUNTA</p><h2>Como aproximar<br />quem sonha de<br /><em>quem já chegou?</em></h2></div><div className="origin-story"><p className="origin-lead">O Conecta Elas é uma iniciativa para aproximar estudantes de mulheres que trabalham com tecnologia.</p><p>A proposta é explorar áreas, conhecer trajetórias, experimentar projetos e imaginar novos caminhos profissionais.</p><p>Esta versão é um protótipo demonstrativo. Os perfis, conversas e projetos são fictícios; nenhuma mensagem é enviada a pessoas reais.</p><div className="origin-tags"><span>Tecnologia</span><span>Representatividade</span><span>Aprendizagem</span></div></div></div>}
          {index === 5 && <><div className="pillars-heading"><p className="story-kicker">O QUE QUEREMOS CONSTRUIR</p><h2>Conexão que vira<br /><em>possibilidade.</em></h2><p>Uma comunidade que aproxima, orienta e ajuda estudantes a descobrir caminhos na tecnologia.</p></div><div className="pillars-grid"><article className="pillar-card"><span className="pillar-number">01</span><div className="pillar-icon"><Code2 /></div><h3>Conhecer</h3><p>Explorar diferentes áreas da tecnologia e trajetórias profissionais.</p></article><article className="pillar-card"><span className="pillar-number">02</span><div className="pillar-icon"><ShieldCheck /></div><h3>Experimentar</h3><p>Aprender com projetos e atividades demonstrativas no próprio ritmo.</p></article><article className="pillar-card"><span className="pillar-number">03</span><div className="pillar-icon"><ArrowRight /></div><h3>Próximos passos</h3><p>Uma comunidade real depende de parcerias, consentimento e mecanismos de segurança.</p></article></div><div className="future-disclaimer"><ShieldCheck size={17} /><span>Ainda não há cadastro, contato real ou vagas confirmadas. O protótipo não envia dados.</span></div><button className="story-button pillar-cta" onClick={() => go(6)}>Conheça a demonstração <ArrowRight size={17} /></button></>}
          {index === 6 && <div className="platform-gateway"><div className="gateway-copy"><Brand className="gateway-brand" /><p className="story-kicker">FIM DA APRESENTAÇÃO · COMEÇO DA DESCOBERTA</p><h2>Explore o que você pode criar com <em>tecnologia.</em></h2><p>Conheça áreas, projetos e perfis fictícios nesta demonstração do Conecta Elas.</p><div className="gateway-actions"><button className="story-button" onClick={() => enterPlatform('discover')}>Começar a explorar <ArrowRight size={17} /></button><button className="story-button gateway-secondary" onClick={() => enterPlatform('professionals')}>Conhecer profissionais <ArrowRight size={16} /></button></div><button className="gateway-replay" onClick={() => go(0)}><ArrowLeft size={14} /> Rever desde o início</button></div><div className="gateway-art"><div className="gateway-disc"><img src={assetUrl('/assets/logo-conecta-elas.png')} alt="" /></div><span className="gateway-sidenote">IDEIAS · CÓDIGO · FUTURO</span></div></div>}
        </div>
      </section>)}
    </main>
    <div className="navigator story-navigator"><button aria-label="Capítulo anterior" disabled={active === 0} onClick={() => go(active - 1)}><ChevronLeft /></button><div className="scene-dots" aria-label={`Capítulo ${active + 1} de ${storyChapters.length}`}>{storyChapters.map((name, i) => <button key={name} className={active === i ? 'current' : ''} title={name} aria-label={`Ir ao capítulo ${i + 1}: ${name}`} onClick={() => go(i)} />)}</div><span className="counter">{String(active + 1).padStart(2, '0')}<i>/</i>{String(storyChapters.length).padStart(2, '0')}</span><div className="progress-track"><span style={{ width: `${(active + 1) / storyChapters.length * 100}%` }} /></div><button aria-label="Próximo capítulo" disabled={active === storyChapters.length - 1} onClick={() => go(active + 1)}><ChevronRight /></button></div>
  </div>;
}
