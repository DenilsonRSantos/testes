import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  test('renderiza input e botão', () => {
    const mock = jest.fn();
    render(<NovaTarefa onAdd={mock} />);
    expect(screen.getByPlaceholderText(/digite a tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar/i })).toBeDisabled();
  });

  test('habilita o botão quando há texto', () => {
    const mock = jest.fn();
    render(<NovaTarefa onAdd={mock} />);
    const input = screen.getByPlaceholderText(/digite a tarefa/i);
    const botao = screen.getByRole('button', { name: /adicionar/i });
    fireEvent.change(input, { target: { value: 'Comprar leite' } });
    expect(botao).toBeEnabled();
  });

  test('submete e limpa o input', () => {
    const mock = jest.fn();
    render(<NovaTarefa onAdd={mock} />);
    const input = screen.getByPlaceholderText(/digite a tarefa/i);
    fireEvent.change(input, { target: { value: 'Estudar testes' } });
    fireEvent.submit(screen.getByRole('form', { name: /form-nova-tarefa/i }));
    expect(mock).toHaveBeenCalledWith('Estudar testes');
    expect((input as HTMLInputElement).value).toBe('');
  });
});
