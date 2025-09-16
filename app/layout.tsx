import './globals.css';

export const metadata = {
  title: 'Tarefas com Testes',
  description: 'Next.js 15 + Jest/RTL'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <div className="card">{children}</div>
          <p className="footer-note">Next.js 15 • Jest + Testing Library</p>
        </div>
      </body>
    </html>
  );
}
