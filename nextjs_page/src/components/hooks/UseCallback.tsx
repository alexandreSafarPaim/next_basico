export const UseCallback = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useCallback</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useCallback</code> é um hook
      que permite que a gente armazene uma função em um componente e só atualize
      essa função quando as dependências mudarem.
    </p>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useCallback</code> recebe dois
      argumentos:
    </p>
    <ul className="list-disc list-inside">
      <li>uma função</li>
      <li>uma lista de dependências</li>
    </ul>
    <p className="my-2">
      Quando as dependências mudam, a função é recalculada.
    </p>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useCallback</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useCallback &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useCallback</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useCallback</code> e passar a
      função e a lista de dependências como argumentos:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const funcao = useCallback(() =&gt; &#123; /* código */ &#125;,
        [dependencia1, dependencia2]);
      </code>
    </pre>
    <p className="my-2">
      Podemos usar o{" "}
      <code className="bg-gray-200 p-1 rounded">useCallback</code> para
      armazenar uma função:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const funcao = useCallback(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;return dependencia1 + dependencia2;
        <br />
        &#125;, [dependencia1, dependencia2]);
      </code>
    </pre>
  </div>
);
