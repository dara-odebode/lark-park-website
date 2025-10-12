import Image from 'next/image'

export default function HomePage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <Image 
            src="/logo.png"
            alt="Lark Park Theatre Logo"
            width={200}
            height={200}
        />
        <h1 className="text-6xl font-bold mb-4">WHERE PERFORMANCE MEETS PURPOSE.</h1>
        <p className="max-w-2xl">
        Lark Park Theatre specialise in bringing theatre to communities through through-provoking, engaging, and exciting workshops. With a focus on collaborative devising, Lark Park facilitates the creation of stories most relevant to the people they work with. <br></br>
        As a producing company, Lark Park works with exciting emerging theatre artists, connecting them with venues and supporting the creation of bold new work.
        </p>
      </main>
    )
  }
  