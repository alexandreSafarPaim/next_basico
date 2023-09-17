/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/layout/Layout";
import React from "react";

function ExplicacaoLayout() {
  return (
    <Layout
      title="Criando e usando um Layout"
      links={[
        { href: "/new-component", text: "Voltar" },
        { href: "/dynamic-routes", text: "Criar rotas dinâmicas" },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">Criando e usando um Layout</h1>

      <p className="my-2">
        Layouts são componentes React que envolvem outros componentes React.
      </p>
      <p className="my-2">
        Eles são úteis para manter a consistência da interface do usuário em
      </p>
      <p className="my-4">
        todo o seu aplicativo, por exemplo, um cabeçalho e um rodapé.
      </p>

      <h2 className="text-xl font-semibold mt-4">
        Como criar seu próprio layout
      </h2>

      <h3 className="text-lg font-semibold mt-4">
        Passo 1: Criar o componente Layout
      </h3>
      <p className="my-4">
        Crie um novo arquivo chamado{" "}
        <code className="bg-gray-200 p-1 rounded">Layout.tsx</code> dentro da
        pasta <code className="bg-gray-200 p-1 rounded">components/layout</code>{" "}
        e defina o componente:
      </p>
      <pre className="bg-gray-200 p-2 rounded">
        <code>
          interface LayoutProps &#123;
          <br />
          &nbsp;&nbsp;children: React.ReactNode;
          <br />
          &#125;
          <br />
          <br />
          function Layout(&#123; children &#125;: LayoutProps) &#123;
          <br />
          &nbsp;&nbsp;return (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; children &#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;
          <br />
          <br />
          export default Layout;
        </code>
      </pre>
      <br />
      <p>Pra utilizar o componente, podemos fazer de duas formas:</p>
      <p>
        1. Importando o componente dentro do arquivo que queremos utilizar e
        envolvendo o conteúdo com o componente:
      </p>
      <pre className="bg-gray-200 p-2 rounded">
        <code>
          import Layout from &quot;../components/layout/Layout&quot;;
          <br />
          <br />
          function MinhaPagina() &#123;
          <br />
          &nbsp;&nbsp;return (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Layout&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Meu Aplicativo
          React&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Layout&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;
        </code>
      </pre>
      <br />
      <p>
        2. Importar diretamente no arquivo <code>pages/_app.tsx</code> e
        envolver o componente <code>Component</code> com o componente{" "}
        <code>Layout</code>:
      </p>
      <pre className="bg-gray-200 p-2 rounded">
        <code>
          import Layout from &quot;../components/layout/Layout&quot;;
          <br />
          <br />
          function App(&#123; Component, pageProps &#125;: AppProps) &#123;
          <br />
          &nbsp;&nbsp;return (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Layout&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Component
          &#123;...pageProps&#125; /&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Layout&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;
          <br />
          <br />
          export default App;
        </code>
      </pre>
      <br />
      <p>
        Agora, podemos utilizar o layout em qualquer página do nosso aplicativo.
      </p>
      <br />
    </Layout>
  );
}

export default ExplicacaoLayout;
