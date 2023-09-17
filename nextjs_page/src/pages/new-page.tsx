import Head from "next/head";
import Link from "next/link";

// Interface para tipar as props da página
interface Props {
  mensagem: string; // Definimos que a prop "mensagem" deve ser do tipo string
}

function MinhaPagina(props: Props): JSX.Element {
  // Lógica da página aqui
  const mensagem = props.mensagem;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Head>
        <title>New Page</title>
      </Head>
      <header className="p-2 bg-slate-600 text-white font-bold w-full flex justify-between">
      <Link href="/" className="">
          Voltar
        </Link>
        <Link href="/new-component" className="">
          Criar novo componente
        </Link>
      </header>
      <div className="flex flex-col p-8">
        <h1 className="text-4xl font-bold my-4">Criação de Página React (Básico)</h1>

        <h2 className="text-2xl font-semibold my-2">
          Declaração da Função da Página
        </h2>
        <p>Na seguinte seção, declaramos a função da página React.</p>
        <pre className="bg-gray-200 p-2 rounded-md text-sm">
          <code>
            function MinhaPagina() &#123;
            <br />
            &nbsp;&nbsp;// Lógica da página aqui
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;// Retorno da DOM aqui
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </code>
        </pre>
        <h2 className="text-2xl font-semibold my-2 mt-4">
          Exportação da Página
        </h2>
        <p>
          Nesta seção, exportamos a página como um componente React para uso em
          outros lugares.
        </p>
        <pre className="bg-gray-200 p-2 rounded-md text-sm">
          <code>export default MinhaPagina;</code>
        </pre>

        <h2 className="text-2xl font-semibold my-2 mt-4">
          Retorno da DOM (Estrutura JSX)
        </h2>
        <p>
          Nesta parte, mostramos como a função da página retorna elementos JSX
          para construir a estrutura da página.
        </p>
        <pre className="bg-gray-200 p-2 rounded-md text-sm">
          <code>
            function MinhaPagina(props: Props) &#123;
            <br />
            &nbsp;&nbsp;// Lógica da página aqui
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Título da
            Página&lt;/h1&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Esta é uma página React
            básica.&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </code>
        </pre>
      </div>
    </div>
  );
}

export default MinhaPagina;
