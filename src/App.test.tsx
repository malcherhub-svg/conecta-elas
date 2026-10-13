import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { assetUrl } from './assets';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

function enterPlatform(){
  fireEvent.click(screen.getByRole('button',{name:'Abrir capítulos'}));
  fireEvent.click(screen.getByRole('button',{name:/Ir ao capítulo 9/}));
  fireEvent.click(screen.getByRole('button',{name:'Explorar a comunidade'}));
}

describe('Conecta Elas story and platform',()=>{
  it('presents nine narrative chapters before the independent platform',()=>{
    render(<App/>);
    expect(screen.getAllByRole('region')).toHaveLength(9);
    expect(screen.getByRole('heading',{name:/O futuro também/})).toBeInTheDocument();
    fireEvent.keyDown(window,{key:'End'});
    expect(screen.getByText(/Sua próxima inspiração pode estar/)).toBeInTheDocument();
    enterPlatform();
    expect(screen.getByRole('navigation',{name:'Navegação da plataforma'})).toBeInTheDocument();
  });

  it('shows historical profiles and clearly marks inspirational phrases',()=>{
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:'Abrir capítulos'}));
    fireEvent.click(screen.getByRole('button',{name:/Ir ao capítulo 2/}));
    expect(screen.getByRole('heading',{name:'Marie Curie'})).toBeInTheDocument();
    expect(screen.getAllByText(/NÃO É UMA CITAÇÃO HISTÓRICA/)).toHaveLength(3);
    expect(screen.getByRole('img',{name:/Retrato de Marie/})).toHaveAttribute('src',assetUrl('/images/marie-curie.jpg'));
  });

  it('filters professional profiles by search and category',()=>{
    render(<App/>);
    enterPlatform();
    fireEvent.click(screen.getByRole('button',{name:'Profissionais'}));
    fireEvent.change(screen.getByLabelText('Buscar profissionais'),{target:{value:'software'}});
    expect(screen.getByRole('heading',{name:'Ana'})).toBeInTheDocument();
    expect(screen.queryByRole('heading',{name:'Júlia'})).not.toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Buscar profissionais'),{target:{value:''}});
    fireEvent.change(screen.getByLabelText('Área'),{target:{value:'Engenharia'}});
    expect(screen.getByRole('heading',{name:'Camila'})).toBeInTheDocument();
  });

  it('switches among three fictitious chats and appends a local message only',()=>{
    render(<App/>);
    enterPlatform();
    fireEvent.click(screen.getByRole('button',{name:'Chat demonstrativo'}));
    fireEvent.click(screen.getByText('Júlia',{exact:true}).closest('button')!);
    expect(screen.getByText(/A ciência de dados trabalha com informações/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ana',{exact:true}).closest('button')!);
    const input=screen.getByLabelText('Escreva uma mensagem demonstrativa');
    fireEvent.change(input,{target:{value:'Que projeto simples você recomenda?'}});
    fireEvent.click(screen.getByRole('button',{name:'Adicionar mensagem à demonstração'}));
    expect(screen.getAllByText('Que projeto simples você recomenda?')).toHaveLength(2);
    expect(screen.getByRole('status')).toHaveTextContent(/não foi enviada a uma pessoa/);
  });

  it('keeps future opportunities clearly unconfirmed',()=>{
    render(<App/>);
    enterPlatform();
    fireEvent.click(screen.getByRole('button',{name:'Oportunidades'}));
    expect(screen.getByText(/Não há vagas ou contratações confirmadas/)).toBeInTheDocument();
  });
});
