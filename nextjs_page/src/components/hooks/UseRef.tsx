/* eslint-disable react/jsx-no-comment-textnodes */
export const UseRef = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold my-4">useRef</h2>
    <p className="my-2">
      O <code className="bg-gray-200 p-1 rounded">useRef</code> é um hook que
      permite que a gente armazene uma referência a um elemento do DOM.
    </p>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useRef</code>,
      precisamos importá-lo do React:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>import &#123; useRef &#125; from &quot;react&quot;;</code>
    </pre>
    <p className="my-2">
      Para usar o <code className="bg-gray-200 p-1 rounded">useRef</code>,
      precisamos chamar a função{" "}
      <code className="bg-gray-200 p-1 rounded">useRef</code> e passar a função
      que calcula o valor e a lista de dependências como argumentos:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>const ref = useRef();</code>
    </pre>
    <p className="my-2">
      Podemos usar o <code className="bg-gray-200 p-1 rounded">useRef</code>{" "}
      para armazenar uma referência a um elemento do DOM:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        const ref = useRef();
        <br />
        <br />
        return &#60;div
        ref=&#123;ref&#125;&#62;&#123;children&#125;&#60;/div&#62;;
      </code>
    </pre>
    <p className="my-2">
      Tendo um elemento do DOM armazenado em uma referência, podemos acessar
      propriedades do elemento:
    </p>
    <pre className="bg-gray-200 p-2 rounded-md text-sm">
      <code>
        ref.current
        <br />
        ref.current.value
        <br />
        ref.current.value = &#34;valor&#34;
        <br />
        ref.current.focus()
        <br />
        // Entre outros
      </code>
    </pre>
  </div>
);
