'use client';
import { useState } from 'react';
import type { Tarefa } from '@/data/tasks';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

type Props = { initialTarefas: Tarefa[] };

export default function TarefasCliente({ initialTarefas }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(initialTarefas);
  const total = useContadorDeTarefas(tarefas);

  function handleAdd(titulo: string) {
    setTarefas((prev) => [...prev, { id: String(Date.now()), titulo }]);
  }

  return (
    <section>
      <p className="subtitle">Gerencie suas tarefas rapidamente</p>
      <NovaTarefa onAdd={handleAdd} />
      <p aria-label="contador" className="counter">Total: {total}</p>
      <ul aria-label="lista-tarefas" className="list">
        {tarefas.map((t) => (<li key={t.id} className="item">{t.titulo}</li>))}
      </ul>
    </section>
  );
}
