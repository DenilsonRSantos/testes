import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

jest.mock('@/data/tasks', () => ({
  fetchTarefas: jest.fn().mockResolvedValue([
    { id: '1', titulo: 'Mock 1' },
    { id: '2', titulo: 'Mock 2' }
  ])
}));

describe('Página / (Server Component)', () => {
  test('renderiza título e lista inicial', async () => {
    render(await Page());
    expect(screen.getByRole('heading', { name: /lista de tarefas/i })).toBeInTheDocument();
    const contador = await screen.findByLabelText('contador');
    expect(contador).toHaveTextContent('Total: 2');
  });
});
