export const UseMemo = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useMemo</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useMemo</code> é um hook que
      permite que a gente armazene um valor calculado em um componente e só
      atualize esse valor quando as dependências mudarem.
    </p>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useMemo</code> recebe dois
      argumentos:
    </p>
    <ul className="list-disc list-inside">
      <li>uma função que calcula o valor</li>
      <li>uma lista de dependências</li>
    </ul>
    <p className="my-2">
      Quando as dependências mudam, o valor é recalculado.
    </p>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useMemo</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useMemo &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useMemo</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useMemo</code> e passar a função
      que calcula o valor e a lista de dependências como argumentos:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const valorCalculado = useMemo(() =&gt; &#123; /* código */ &#125;,
        [dependencia1, dependencia2]);
      </code>
    </pre>
    <p className="my-2">
      Podemos usar o <code className="bg-gray-200 p-1 rounded">useMemo</code>{" "}
      para armazenar um valor calculado:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const valorCalculado = useMemo(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;return dependencia1 + dependencia2;
        <br />
        &#125;, [dependencia1, dependencia2]);
      </code>
    </pre>
    </div>
);

