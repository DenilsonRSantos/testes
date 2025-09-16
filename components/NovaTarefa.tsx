'use client';
import { useState, FormEvent } from 'react';

type Props = { onAdd: (titulo: string) => void };

export default function NovaTarefa({ onAdd }: Props) {
  const [titulo, setTitulo] = useState('');
  const podeEnviar = titulo.trim().length > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!podeEnviar) return;
    onAdd(titulo.trim());
    setTitulo('');
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form-nova-tarefa" className="form">
      <label htmlFor="titulo" className="sr-only">Nova tarefa</label>
      <input
        id="titulo"
        className="input"
        placeholder="Digite a tarefa..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit" className="button" disabled={!podeEnviar}>Adicionar</button>
    </form>
  );
}
