export const UseEffect = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useEffect</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useEffect</code> é um hook que
      permite que a gente execute uma função sempre que o componente for
      renderizado.
    </p>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useEffect</code> recebe dois
      argumentos:
    </p>
    <ul className="list-disc list-inside">
      <li>uma função</li>
      <li>uma lista de dependências</li>
    </ul>
    <p className="my-2">
      Quando o array de dependências está vazio, a função é executada apenas
      quando o componente é montado.
    </p>
    <p className="my-2">
      Quando não passamos o array de dependências, a função é executada sempre
      que o componente é atualizado.
    </p>
    <p className="my-2">
      Quando passamos um array de dependências, a função é executada apenas
      quando as dependências são atualizadas.
    </p>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useEffect</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useEffect &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useEffect</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useEffect</code> e passar a
      função que queremos executar como argumento:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>useEffect(() =&gt; &#123; /* código */ &#125;);</code>
    </pre>
    <p className="my-2">
      Podemos usar o <code className="bg-gray-200 p-1 rounded">useEffect</code>{" "}
      para executar uma função quando o componente é montado:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        useEffect(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;console.log(&quot;Componente montado&quot;);
        <br />
        &#125;);
      </code>
    </pre>
    <p className="my-2">
      Podemos usar o <code className="bg-gray-200 p-1 rounded">useEffect</code>{" "}
      para executar uma função quando o componente é atualizado:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        useEffect(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;console.log(&quot;Componente atualizado&quot;);
        <br />
        &#125;);
      </code>
    </pre>
    <p className="my-2">
      E podemos usa-lo para executar uma função quando uma dependência é
      atualizada:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const [valor, setValor] = useState(0);
        <br />
        <br />
        useEffect(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;console.log(&quot;Valor atualizado&quot;);
        <br />
        &#125;, [valor]);
        <br />
        <br />
        return (
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;valor&#125;&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;() =&gt;
        setValor(valor + 1)&#125;&gt;Incrementar&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </code>
      </pre>
  </div>
);
