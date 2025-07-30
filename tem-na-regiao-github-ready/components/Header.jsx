export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">Tem na Região</h1>
      <nav className="mt-2 space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/comercios" className="hover:underline">Comércios</a>
        <a href="/eventos" className="hover:underline">Eventos</a>
        <a href="/vagas" className="hover:underline">Vagas</a>
        <a href="/sobre" className="hover:underline">Sobre</a>
        <a href="/contato" className="hover:underline">Contato</a>
      </nav>
    </header>
  );
}