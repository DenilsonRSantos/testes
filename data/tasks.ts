export type Tarefa = { id: string; titulo: string };

const MOCK: Tarefa[] = [
  { id: '1', titulo: 'Estudar Next.js 15' },
  { id: '2', titulo: 'Escrever testes com RTL' }
];

export async function fetchTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(MOCK);
}
