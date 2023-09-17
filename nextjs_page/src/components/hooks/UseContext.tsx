export const UseContext = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useContext</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useContext</code> é um hook que
      permite que a gente acesse um contexto.
    </p>
    <p className="my-2">
      Ele é importantíssimo para a utilização de contextos em componentes através
      da context API. Para ter uma informação mais detalhada sobre contextos e
      context API, acesse{" "}
      <a
        href="https://reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        a documentação do React
      </a>. 
    </p>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useContext</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useContext &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useContext</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useContext</code> e passar o
      contexto como argumento:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>const context = useContext(Context);</code>
    </pre>
   <p className="my-2">
      Tendo o contexto armazenado em uma variável, podemos acessar o valor
      atual do contexto:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>context.value</code>
    </pre>
    <p className="my-2">
      Ou podemos receber os valores do contexto desestruturando a variável:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>const &#123; value1, value2 &#125; = context;</code>
    </pre>
  </div>
);
