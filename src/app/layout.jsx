import './globals.css';

export const metadata = {
  title: 'Zion Polyglot | Sua Jornada Global de Idiomas',
  description: 'Explore mundos, converse em tempo real com o Zion e alcance a fluência com IA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0A0D12] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}