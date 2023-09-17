import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";

function FetchExemplo() {
  const [dados, setDados] = useState<any>();

  const random = Math.floor(Math.random() * 100) + 1;
  const dataFetch = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + random);
    const data = await response.json();
    setDados(data);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <Layout
      title="Exemplo de Fetch"
      links={[{ href: "/data-fetch", text: "Voltar" }]}
    >
      <h1 className="text-4xl font-bold my-4">Exemplo de Fetch</h1>
      <br />
      {dados === undefined ? (
        <p>Carregando...</p>
      ) : (
        <>
          <h2>Pokemon:</h2>
          <p>
            <strong>{dados.name}</strong>
          </p>
          <br />
          <h2>Imagem:</h2>
          <img
            src={dados.sprites?.front_default}
            alt="Imagem do Pokemon"
            className="w-32 h-32"
          />
        </>
      )}
      <div className="mt-4 bg-gray-200 p-4 rounded">
        <p>
          Neste exemplo estou realizando uma renderização condicional para
          mostrar a mensagem de carregando enquanto o fetch não retorna os
          dados.
        </p>
        <p>
          Uma informação importante é que existem muitas tags sendo usadas e
          como não temos uma tag pai para este bloco de código, estou usando um
          fragmento para envolver as tags.
        </p>
        <p>
          O fragmento é uma tag vazia que não é renderizada no HTML, mas que
          permite que você envolva várias tags dentro dela.
        </p>
        <p>
            No React não é possível retornar mais de uma tag no mesmo nível, por
            isso é necessário envolver as tags em um elemento pai.
        </p>
      </div>
    </Layout>
  );
}

export default FetchExemplo;
