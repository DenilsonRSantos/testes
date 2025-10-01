## Como rodar

```bash
npm install
npm run dev
# testes
npm test
# cobertura (opcional)
npm run coverage
```

## Estrutura

```
app/
  globals.css
  layout.tsx
  page.tsx
components/
  NovaTarefa.tsx
  TarefasCliente.tsx
data/
  tasks.ts
hooks/
  useContadorDeTarefas.ts
tests/
  NovaTarefa.test.tsx
  page.test.tsx
  useContadorDeTarefas.test.tsx
jest.config.ts
jest.setup.ts
tsconfig.json
package.json
README.md
next-env.d.ts
```
