import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Head>
        <title>Next.js</title>
      </Head>
      <header className="p-2 bg-slate-600 text-white font-bold w-full flex justify-end">
        <Link href="/new-page" className="">
          Criar um componente
        </Link>
      </header>
      <div className="flex flex-col p-8 ">
        <h1 className="text-4xl font-bold my-10">Next.js</h1>
        <h2 className="text-xl font-semibold">Next.js Roteamento</h2>
        <p className="text-lg">
          Neste exemplo, vamos explorar os conceitos básicos de criação de rotas
          no Next.js.
        </p>
        <div className="pl-4">
          <h3 className="text-xl font-semibold mt-4">Rotas da Web</h3>
          <p className="text-lg">
            As rotas web são criadas automaticamente para arquivos dentro do
            diretório pages. Por exemplo, se você criar um arquivo chamado
            pages/sobre.js.
          </p>
        </div>
        <div className="pl-4">
          <h3 className="text-xl font-semibold mt-4">Rotas da API</h3>
          <p className="text-lg">
            As rotas da API são criadas automaticamente para arquivos dentro do
            diretório pages/api. Por exemplo, se você criar um arquivo chamado
            pages/api/hello.js.
          </p>
        </div>

        <h1 className="text-xl font-semibold mt-4">Arquivo global.css</h1>
        <p className="text-lg">
          O arquivo global.css é usado para estilização global em todas as
          páginas do aplicativo Next.js e se encontra no diretório src/styles.
        </p>

        <h1 className="text-xl font-semibold mt-4">Arquivo _app.js</h1>
        <p className="text-lg">
          O arquivo _app.js é um componente especial que envolve todas as
          páginas do aplicativo. É usado para manter um estado global, adicionar
          layout comum e definir cabeçalhos personalizados.
        </p>

        <h1 className="text-xl font-semibold mt-4">Arquivo _document.js</h1>
        <p className="text-lg">
          O arquivo _document.js é usado para personalizar o HTML e o cabeçalho
          da página para todas as páginas do aplicativo. É útil para adicionar
          meta tags, scripts externos e outras personalizações.
        </p>
      </div>
    </main>
  );
}
