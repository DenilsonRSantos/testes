import { fetchTarefas } from '@/data/tasks';
import TarefasCliente from '@/components/TarefasCliente';

export default async function Page() {
  const tarefas = await fetchTarefas();
  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <TarefasCliente initialTarefas={tarefas} />
    </main>
  );
}
