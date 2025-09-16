'use client';
import { useMemo } from 'react';
import type { Tarefa } from '@/data/tasks';

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = useMemo(() => tarefas.length, [tarefas]);
  return total;
}
