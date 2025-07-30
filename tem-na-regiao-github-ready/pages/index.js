import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Bem-vindo ao Tem na Região</h2>
        <p className="text-lg mb-4">Descubra comércios, eventos, vagas e tudo que tá rolando na sua quebrada!</p>
      </main>
      <Footer />
    </>
  )
}