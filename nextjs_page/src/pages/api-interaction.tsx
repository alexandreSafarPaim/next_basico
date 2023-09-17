/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/layout/Layout";

function InteracaoComApi() {
  return (
    <Layout
      title="Interação com API"
      links={[
        { href: "/data-fetch", text: "Voltar" },
        { href: "/react-hooks", text: "React Hooks" },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">Interação com API</h1>

      <p className="my-2">Podemos interagir com uma API de várias formas:</p>
      <ul className="list-disc list-inside">
        <li>Buscando dados (GET)</li>
        <li>Enviando dados (POST)</li>
        <li>Atualizando dados (PUT)</li>
        <li>Deletando dados (DELETE)</li>
      </ul>
      <p className="my-2">
        No caso de uma requisição GET, podemos usar o{" "}
        <code className="bg-gray-200 p-1 rounded">fetch</code> para buscar os
        dados
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          fetch(&quot;https://meu-servidor.com&quot;).then((resposta) =&gt;
          &#123;
          <br />
          &nbsp;&nbsp;console.log(resposta);
          <br />
          &#125;);
        </code>
      </pre>
      <p className="my-2">
        Para enviar dados, podemos usar o{" "}
        <code className="bg-gray-200 p-1 rounded">fetch</code> com o método
        POST:
      </p>
      <p className="my-2">
        O método POST recebe um segundo argumento, que é um objeto com as
        informações que queremos enviar. Podemos enviar um objeto com os dados
        que queremos enviar no formato JSON ou podemos enviar um objeto do tipo
        FormData, que é um objeto que representa um formulário HTML.
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          fetch(&quot;https://meu-servidor.com&quot;, &#123;
          <br />
          &nbsp;&nbsp;method: &quot;POST&quot;,
          <br />
          &nbsp;&nbsp;body: JSON.stringify(&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;nome: &quot;Fulano&quot;,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;idade: 30,
          <br />
          &nbsp;&nbsp;&#125;),
          <br />
          &#125;).then((resposta) =&gt; &#123;
          <br />
          &nbsp;&nbsp;console.log(resposta);
          <br />
          &#125;);
        </code>
      </pre>
      <p className="my-2">
        A atualização de dados funciona da mesma forma do POST porem com o
        método PUT:
      </p>
      <p className="my-4">
        A deleção de dados funciona da mesma forma do GET porem com o método
        DELETE:
      </p>
      <div className="mt-4 bg-gray-200 p-4 rounded">
        <p>
          Todas as requisições HTTP retornam uma{" "}
          <code className="bg-gray-200 p-1 rounded">Promise</code>, então
          podemos usar o método{" "}
          <code className="bg-gray-200 p-1 rounded">then</code> para acessar a
          resposta do servidor.
        </p>
        <p>
          A resposta do servidor é um objeto com várias informações, como o
          status da requisição e o corpo da resposta.
        </p>
        <p>
          Para acessar o corpo da resposta, podemos usar o método{" "}
          <code className="bg-gray-200 p-1 rounded">json</code>:
        </p>
      </div>
    </Layout>
  );
}

export default InteracaoComApi;
