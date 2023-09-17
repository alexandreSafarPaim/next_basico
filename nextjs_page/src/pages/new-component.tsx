/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import Link from "next/link";
import React from "react";

function ExplicacaoComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Head>
        <title>New Component</title>
      </Head>
      <header className="p-2 bg-slate-600 text-white font-bold w-full flex justify-between">
        <Link href="/new-page" className="">
          Voltar
        </Link>
        <Link href="/create-layout" className="">
          Criar Layout
        </Link>
      </header>
      <div className="flex flex-col p-8">
        <h1 className="text-4xl font-bold my-4">
          Quando Criar Componentes React e Por Que São Importantes
        </h1>

        <h2 className="text-xl font-semibold">
          Por que criar componentes React?
        </h2>
        <p className="my-4">
          Componentes React são a base do desenvolvimento em React. Eles são
          unidades independentes e reutilizáveis de código que tornam o
          desenvolvimento mais organizado, modular e fácil de manter. Aqui estão
          algumas razões pelas quais você deve criar componentes:
        </p>

        <ul className="list-disc ml-8 my-4">
          <li>
            <strong>Reutilização de Código:</strong> Componentes podem ser
            reutilizados em todo o seu aplicativo, economizando tempo e esforço.
          </li>
          <li>
            <strong>Separação de Responsabilidades:</strong> Componentes dividem
            a interface do usuário em partes menores e gerenciáveis, cada um com
            uma responsabilidade única.
          </li>
          <li>
            <strong>Facilidade de Manutenção:</strong> Com componentes bem
            definidos, é mais fácil rastrear e corrigir problemas.
          </li>
          <li>
            <strong>Colaboração:</strong> Facilitam a colaboração em equipes, já
            que diferentes membros podem se concentrar em diferentes
            componentes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          Como criar e usar um componente React
        </h2>

        <h3 className="text-lg font-semibold mt-4">
          Passo 1: Criar o componente
        </h3>
        <p className="my-4">
          Crie um novo arquivo chamado{" "}
          <code className="bg-gray-200 p-1 rounded">Botao.tsx</code> dentro da
          pasta <code className="bg-gray-200 p-1 rounded">components</code> e
          defina o componente:
        </p>
        <pre className="bg-gray-200 p-2 rounded">
          <code>
            interface BotaoProps &#123;
            <br />
            &nbsp;&nbsp;texto: string;
            <br />
            &#125;
            <br />
            <br />
            function Botao(props: BotaoProps) &#123;
            <br />
            &nbsp;&nbsp;return (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&gt;&#123;props.texto&#125;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
            <br />
            <br />
            export default Botao;
          </code>
        </pre>
        <br />
        <p>Podemos exportar o nosso componente também da seguinte forma:</p>
        <pre className="bg-gray-200 p-2 rounded">
          <code>
            export function Botao(props: BotaoProps) &#123;
            <br />
            &nbsp;&nbsp;return (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&gt;&#123;props.texto&#125;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </code>
        </pre>
        <br />

        <h3 className="text-lg font-semibold mt-4">
          Passo 2: Usar o componente
        </h3>
        <p className="my-4">
          Agora, você pode usar o componente{" "}
          <code className="bg-gray-200 p-1 rounded">Botao</code> em qualquer
          lugar do seu aplicativo. Por exemplo, em um arquivo chamado{" "}
          <code className="bg-gray-200 p-1 rounded">App.tsx</code>:
        </p>
        <pre className="bg-gray-200 p-2 rounded">
          <code>
            import Botao from &quot;./Botao&quot;;
            <br />
            // Caso tenha exportado o componente sem o default:
            <br />
            // import &#123; Botao &#125; from &quot;./Botao&quot;;
            <br />
            <br />
            function MinhaPagina() &#123;
            <br />
            &nbsp;&nbsp;return (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Meu Aplicativo
            React&lt;/h1&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Botao texto=&quot;Clique em
            mim&quot;; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
            <br />
            <br />
            export default MinhaPagina;
          </code>
        </pre>
      </div>
    </div>
  );
}

export default ExplicacaoComponent;
