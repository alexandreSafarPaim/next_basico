export const UseState = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useState</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useState</code> é um hook que
      permite que a gente use o estado do React em componentes funcionais.
    </p>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useState</code> recebe um
      argumento, que é o valor inicial do estado, e retorna um array com duas
      posições:
    </p>
    <ul className="list-disc list-inside">
      <li>o valor atual do estado</li>
      <li>uma função para atualizar o estado</li>
    </ul>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useState</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useState &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useState</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useState</code> e passar o valor
      inicial do estado como argumento:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const [valorAtual, atualizarValor] = useState(&quot;valor
        inicial&quot;);
      </code>
    </pre>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useState</code> retorna um
      array com duas posições:
    </p>
    <ul className="list-disc list-inside">
      <li>o valor atual do estado</li>
      <li>uma função para atualizar o estado</li>
    </ul>
    <p className="my-2">
      Podemos usar o valor atual do estado para renderizar o estado na tela:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>return &lt;div&gt;&#123;valorAtual&#125;&lt;/div&gt;;</code>
    </pre>
    <p className="my-2">
      Podemos usar a função para atualizar o estado para atualizar o estado:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>atualizarValor(&quot;novo valor&quot;);</code>
    </pre>
    <p className="my-2">
      Podemos usar o <code className="bg-gray-200 p-1 rounded">useState</code>{" "}
      para armazenar qualquer tipo de dado, inclusive objetos e arrays
    </p>
    <p className="my-2">
      A função de atualizar o estado pode receber um novo valor ou uma função
      que recebe o valor atual do estado e retorna o novo valor do estado:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        atualizarValor(&quot;novo valor&quot;);
        <br />
        atualizarValor((valorAtual) =&gt; valorAtual + 1);
      </code>
    </pre>
  </div>
);
