/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/layout/Layout";
import React from "react";

function FuncoesNaDom() {
  return (
    <Layout
      title="Funções na DOM"
      links={[
        { href: "/react-hooks", text: "Voltar" },
        { href: "/", text: "Vem mais por aí..." },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">Funções na DOM</h1>

      <p className="my-2">
        No React podemos manipular a interação com a DOM através de funções dos elementos.
      </p>
      <p className="my-2">
        Algumas funções são:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <code className="bg-gray-200 p-1 rounded">onClick</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onMouseOver</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onMouseOut</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onSubmit</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onChange</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onFocus</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">onBlur</code>
        </li>
      </ul>
      <br />
      <br />
      <p className="my-2">
        Para usar essas funções, basta passá-las como propriedades para o elemento:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>&lt;button onClick=&#123;() =&gt; console.log(&quot;Clicou&quot;)&#125;&gt;Clique aqui&lt;/button&gt;</code>
      </pre>
      <p className="my-2">
        Ou podemos passar uma função já criada:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>const handleClick = () =&gt; console.log(&quot;Clicou&quot;);</code>
        <br />
        <code>&lt;button onClick=&#123;handleClick&#125;&gt;Clique aqui&lt;/button&gt;</code>
      </pre>
      <p className="my-2">
        Podemos também passar parâmetros para a função:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>const handleSubmit = (event) =&gt; console.log(event.currentTarget);</code>
        <br />
        <code>&lt;form onSubmit=&#123;(event) =&gt; handleSubmit(event)&#125;&gt;...</code>
      </pre>
      </Layout>
  );

}

export default FuncoesNaDom;