import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Platform from './Platform';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

function openGame() {
  render(<Platform initialTab="projects" onReturn={vi.fn()}/>);
  fireEvent.click(screen.getByRole('button', { name: /Começar minha descoberta/ }));
}

function chooseFirstOption() {
  const group = screen.getByRole('group', { name: /Alternativas da pergunta/ });
  fireEvent.click(group.querySelector('button')!);
}

describe('Descubra seu Universo experience', () => {
  it('is launched only from Projects and keeps progress when temporarily returning there', () => {
    openGame();
    expect(screen.queryByRole('button', { name: 'Desafios' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Descubra seu universo/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Como funciona/ }));
    expect(screen.getByRole('dialog', { name: 'Como funciona?' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Entendi' }));
    fireEvent.click(screen.getByRole('button', { name: /Começar minha jornada/ }));
    const firstChoice = screen.getByRole('button', { name: /Criar um aplicativo, site ou jogo/ });
    expect(screen.getByRole('button', { name: /Próxima pergunta/ })).toBeDisabled();
    fireEvent.click(firstChoice);
    fireEvent.click(screen.getByRole('button', { name: /Próxima pergunta/ }));
    expect(screen.getByText(/Qual desses desafios mais desperta/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Voltar para Projetos/ }));
    expect(screen.getByRole('heading', { name: /Projetos para inspirar/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Começar minha descoberta/ }));
    expect(screen.getByText(/Qual desses desafios mais desperta/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /^Voltar$/ }));
    expect(screen.getByRole('button', { name: /Criar um aplicativo, site ou jogo/ })).toHaveAttribute('aria-pressed', 'true');
  });

  it('completes all ten prompts and routes the result to related projects', async () => {
    openGame();
    fireEvent.click(screen.getByRole('button', { name: /Começar minha jornada/ }));
    for (let index = 0; index < 10; index += 1) {
      chooseFirstOption();
      fireEvent.click(screen.getByRole('button', { name: index === 9 ? /Ver minha descoberta/ : /Próxima pergunta/ }));
    }
    expect(screen.getByText(/Sua jornada revelou/)).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /Seu universo em destaque/ })).toBeInTheDocument();
    expect(screen.getByText(/Afinidades exploratórias com base nas suas escolhas/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Explorar projetos relacionados/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Conhecer profissionais/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Conhecer a comunidade/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Explorar projetos relacionados/ }));
    expect(screen.getByRole('heading', { name: /Projetos para inspirar/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Descubra seu Universo/ })).toBeInTheDocument();
    expect(screen.getByText(/Projetos demonstrativos relacionados a/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ver todos os projetos/ })).toBeInTheDocument();
  });

  it('offers a private summary fallback and clears answers on restart', async () => {
    openGame();
    fireEvent.click(screen.getByRole('button', { name: /Começar minha jornada/ }));
    for (let index = 0; index < 10; index += 1) {
      chooseFirstOption();
      fireEvent.click(screen.getByRole('button', { name: index === 9 ? /Ver minha descoberta/ : /Próxima pergunta/ }));
    }
    fireEvent.click(screen.getByRole('button', { name: /Revelar meu resultado/ }));
    fireEvent.click(screen.getByRole('button', { name: /Copiar resumo/ }));
    expect(await screen.findByLabelText('Resumo para copiar')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/resumo abaixo/);
    fireEvent.click(screen.getByRole('button', { name: /Jogar novamente/ }));
    expect(screen.getByRole('heading', { name: /Descubra seu universo/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Começar minha jornada/ }));
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });
});
