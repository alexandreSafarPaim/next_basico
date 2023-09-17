/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/layout/Layout";

function BuscandoDados() {
  return (
    <Layout
      title="Buscando dados"
      links={[
        { href: "/dynamic-routes", text: "Voltar" },
        { href: "/data-fetch/exemple", text: "Exemplo" },
        { href: "/api-interaction", text: "Interação com API" },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">Buscando dados</h1>

      <p className="my-2">
        Podemos buscar dados de várias formas, mas a mais comum é usando o{" "}
        <code className="bg-gray-200 p-1 rounded">fetch</code> do JavaScript.
      </p>
      <p className="my-2">
        O <code className="bg-gray-200 p-1 rounded">fetch</code> é uma função
        que faz uma requisição HTTP para um servidor e retorna uma{" "}
        <code className="bg-gray-200 p-1 rounded">Promise</code>.
      </p>
      <p className="my-2">
        Para realizar uma requisição HTTP, basta passar a URL do servidor como
        argumento para o <code className="bg-gray-200 p-1 rounded">fetch</code>
        :
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          fetch(&quot;https://meu-servidor.com&quot;);
        </code>
      </pre>
      <p className="my-2">
        O <code className="bg-gray-200 p-1 rounded">fetch</code> retorna uma{" "}
        <code className="bg-gray-200 p-1 rounded">Promise</code>, que pode ser
        resolvida com o método <code className="bg-gray-200 p-1 rounded">then</code>:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          fetch(&quot;https://meu-servidor.com&quot;).then((resposta) =&gt; &#123;
          <br />
          &nbsp;&nbsp;console.log(resposta);
          <br />
          &#125;);
        </code>
      </pre>
      <p className="my-2">
        A resposta do servidor é um objeto com várias informações, como o
        status da requisição e o corpo da resposta.
      </p>
      <p className="my-2">
        Para acessar o corpo da resposta, podemos usar o método{" "}
        <code className="bg-gray-200 p-1 rounded">json</code>:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          fetch(&quot;https://meu-servidor.com&quot;).then((resposta) =&gt; &#123;
          <br />
          &nbsp;&nbsp;resposta.json().then((dados) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(dados);
          <br />
          &nbsp;&nbsp;&#125;);
          <br />
          &#125;);
        </code>
      </pre>
      <p className="my-2">
        O método <code className="bg-gray-200 p-1 rounded">json</code> também
        retorna uma <code className="bg-gray-200 p-1 rounded">Promise</code>,
        então podemos encadear o método <code className="bg-gray-200 p-1 rounded">then</code>:
      </p>
      <p className="my-2">
        Para realizar uma requisição em um componente React, podemos usar o{" "}
        <code className="bg-gray-200 p-1 rounded">useEffect</code>
      </p>
      <p className="my-2">
        O <code className="bg-gray-200 p-1 rounded">useEffect</code> é um hook
        que executa uma função quando o componente é montado ou atualizado.
      </p>
      <p className="my-2">
        Ele recebe dois argumentos: uma função e um array de dependências.
      </p>
      <p className="my-2">
        Quando o array de dependências está vazio, a função é executada apenas
        quando o componente é montado.
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          import &#123; useEffect &#125; from &quot;react&quot;;
          <br />
          <br />
          function MeuComponente() &#123;
          <br />
          &nbsp;&nbsp;useEffect(() =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;fetch(&quot;https://meu-servidor.com&quot;).then((resposta) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resposta.json().then((dados) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(dados);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
          <br />
          &nbsp;&nbsp;&#125;, []);
          <br />
          <br />
          &nbsp;&nbsp;return &lt;div&gt;Meu Componente&lt;/div&gt;;
          <br />
          &#125;
        </code>
      </pre>
      <p className="my-2">
        Podemos armazenar os dados da resposta em um estado usando o{" "}
        <code className="bg-gray-200 p-1 rounded">useState</code>:
      </p>
      <p className="my-2">
        O <code className="bg-gray-200 p-1 rounded">useState</code> é um hook
        que armazena um estado em um componente React.
      </p>
      <p className="my-2">
        Ele recebe um argumento: o valor inicial do estado.
      </p>
      <p className="my-2">
        O <code className="bg-gray-200 p-1 rounded">useState</code> retorna um
        array com dois elementos: o valor do estado e uma função para atualizar
        o estado.
      </p>
      <p className="my-2">
        Para atualizar o estado, basta chamar a função retornada e passar o novo valor
        do estado como argumento
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          import &#123; useEffect, useState &#125; from &quot;react&quot;;
          <br />
          <br />
          function MeuComponente() &#123;
          <br />
          &nbsp;&nbsp;const [dados, setDados] = useState(&#123;&#125;);
          <br />
          <br />
          &nbsp;&nbsp;useEffect(() =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;fetch(&quot;https://meu-servidor.com&quot;).then((resposta) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resposta.json().then((dados) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setDados(dados);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
          <br />
          &nbsp;&nbsp;&#125;, []);
          <br />
          <br />
          &nbsp;&nbsp;return &lt;div&gt;Meu Componente&lt;/div&gt;;
          <br />
          &#125;
        </code>
      </pre>
      <p className="my-2">
        Podemos usar o estado para renderizar os dados na tela:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          return (
          <br />
          &nbsp;&nbsp;&lt;div&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#123;dados.map((dado) =&gt; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;div&gt;&#123;dado&#125;&lt;/div&gt;;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
          <br />
          &nbsp;&nbsp;&lt;/div&gt;
          <br />
          );
        </code>
      </pre>
      <p className="my-2">
        Podemos tratar o fetch de dados dentro de uma função assíncrona, para deixar o código mais legível
        </p>
        <p className="my-2">
        Para isso, basta usar a palavra chave <code className="bg-gray-200 p-1 rounded">async</code> na função e o <code className="bg-gray-200 p-1 rounded">await</code> antes do fetch:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          const buscarDados = async () =&gt; &#123;
          <br />
          &nbsp;&nbsp;const resposta = await fetch(&quot;https://meu-servidor.com&quot;);
          <br />
          &nbsp;&nbsp;const dados = await resposta.json();
          <br />
          &nbsp;&nbsp;setDados(dados);
          <br />
          &#125;;
          <br />
          <br />
          useEffect(() =&gt; &#123;
          <br />
          &nbsp;&nbsp;buscarDados();
          <br />
          &#125;, []);
        </code>
      </pre>
    </Layout>
  );
}

export default BuscandoDados;
