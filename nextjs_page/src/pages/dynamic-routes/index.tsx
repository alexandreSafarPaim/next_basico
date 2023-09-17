/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/layout/Layout";
import { useRouter } from "next/router";
import React from "react";

function RotasDinamicas() {

  const router = useRouter();

  const goToPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = formData.get("id");
    const titulo = formData.get("titulo");
    router.push(`/dynamic-routes/${id}?titulo=${titulo}`);
  };

  return (
    <Layout
      title="Usando Rotas Dinâmicas"
      links={[
        { href: "/create-layout", text: "Voltar" },
        { href: "/data-fetch", text: "Buscar dados" },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">Usando Rotas Dinâmicas</h1>

      <p className="my-2">
        Rotas dinâmicas permitem que você passe parâmetros para uma página
      </p>
      <p className="my-2">
        usando colchetes <code className="bg-gray-200 p-1 rounded">[ ]</code>.
      </p>
      <p className="my-2">
        Por exemplo, você pode criar uma rota dinâmica para exibir um post
      </p>
      <p className="my-2">
        específico em um blog com a seguinte estrutura de URL:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>https://meu-blog.com/posts/[id]</code>
      </pre>
      <p className="my-2">
        Neste exemplo, <code className="bg-gray-200 p-1 rounded">id</code> é o
        parâmetro que você pode passar para a página{" "}
        <code className="bg-gray-200 p-1 rounded">posts</code>.
      </p>
      <p className="my-2">
        Você pode acessar o valor do parâmetro{" "}
        <code className="bg-gray-200 p-1 rounded">id</code> usando{" "}
        <code className="bg-gray-200 p-1 rounded">useRouter</code>:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          import &#123; useRouter &#125; from &quot;next/router&quot;;
          <br />
          <br />
          function Post() &#123;
          <br />
          &nbsp;&nbsp;const router = useRouter();
          <br />
          &nbsp;&nbsp;const &#123; id &#125; = router.query;
          <br />
          <br />
          &nbsp;&nbsp;return &lt;div&gt;Post: &#123;id&#125;&lt;/div&gt;;
          <br />
          &#125;
          <br />
          <br />
          export default Post;
        </code>
      </pre>
      <p className="my-2">
        Além do parâmetro também é possível passar um valor de query string para
      </p>
      <p className="my-2">a página usando o seguinte formato de URL:</p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>https://meu-blog.com/posts/[id]?titulo=meu-post</code>
      </pre>
      <p className="my-2">
        Neste exemplo, <code className="bg-gray-200 p-1 rounded">titulo</code> é
        o parâmetro de query string que você pode passar para a página{" "}
        <code className="bg-gray-200 p-1 rounded">posts</code>.
      </p>
      <p className="my-2">
        Você pode acessar o valor da query string{" "}
        <code className="bg-gray-200 p-1 rounded">titulo</code> usando{" "}
        <code className="bg-gray-200 p-1 rounded">useRouter</code>:
      </p>
      <pre className="bg-gray-200 p-2 rounded-md text-sm">
        <code>
          import &#123; useRouter &#125; from &quot;next/router&quot;;
          <br />
          <br />
          function Post() &#123;
          <br />
          &nbsp;&nbsp;const router = useRouter();
          <br />
          &nbsp;&nbsp;const &#123; id, titulo &#125; = router.query;
          <br />
          <br />
          &nbsp;&nbsp;return (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Post: &#123;id&#125; &lt;/p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Titulo: &#123;titulo&#125; &lt;/p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;
          <br />
          <br />
          export default Post;
        </code>
      </pre>
      <br />
      <br />
      <h3 className="text-lg font-semibold mt-4">Exemplo:</h3>
      <form className="flex flex-col" onSubmit={goToPost}>
        <label htmlFor="id" className="block my-2">
          ID:
        </label>
        <input
          type="text"
          name="id"
          id="id"
          className="border border-gray-300 p-1 rounded-md my-4"
        />
        <label htmlFor="titulo" className="block my-2">
            Titulo:
        </label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          className="border border-gray-300 p-1 rounded-md my-4"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white px-4 py-2 rounded-md"
        >
          Enviar
        </button>
      </form>
    </Layout>
  );
}

export default RotasDinamicas;
