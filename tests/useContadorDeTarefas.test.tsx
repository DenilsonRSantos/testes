import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Tarefa } from '@/data/tasks';

describe('useContadorDeTarefas', () => {
  test('retorna o total correto', () => {
    const tarefas: Tarefa[] = [{ id: '1', titulo: 'A' }, { id: '2', titulo: 'B' }];
    const { result, rerender } = renderHook(({ list }) => useContadorDeTarefas(list), {
      initialProps: { list: tarefas }
    });
    expect(result.current).toBe(2);
    const novas = [...tarefas, { id: '3', titulo: 'C' }];
    rerender({ list: novas });
    expect(result.current).toBe(3);
  });
});
