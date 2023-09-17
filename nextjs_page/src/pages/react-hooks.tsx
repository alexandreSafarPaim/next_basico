/* eslint-disable react/jsx-no-comment-textnodes */
import { UseCallback } from "@/components/hooks/UseCallback";
import { UseContext } from "@/components/hooks/UseContext";
import { UseEffect } from "@/components/hooks/UseEffect";
import { UseMemo } from "@/components/hooks/UseMemo";
import { UseRef } from "@/components/hooks/UseRef";
import { UseState } from "@/components/hooks/UseState";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

function ReackHooks() {
  const [aba, setAba] = useState<string>();
  return (
    <Layout
      title="React Hooks"
      links={[
        { href: "/api-interaction", text: "Voltar" },
        { href: "/", text: "Vem mais por aí..." },
      ]}
    >
      <h1 className="text-4xl font-bold my-4">React Hooks</h1>

      <p className="my-2">
        Hooks são funções que permitem que a gente use recursos do React sem
        precisar escrever classes.
      </p>
      <p className="my-2">
        Os hooks são funções que começam com a palavra{" "}
        <code className="bg-gray-200 p-1 rounded">use</code>.
      </p>
      <p className="my-2">Os hooks mais comuns são:</p>
      <ul className="list-disc list-inside">
        <li>
          <code className="bg-gray-200 p-1 rounded">useState</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">useEffect</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">useMemo</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">useCallback</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">useRef</code>
        </li>
        <li>
          <code className="bg-gray-200 p-1 rounded">useContext</code>
        </li>
      </ul>
      <br />
      <br />
      <div className="flex flex-row justify-around items-center gap-4 w-full bg-gray-700 p-2 rounded-md text-sm">
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useState")}
        >
          UseState
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useEffect")}
        >
          UseEffect
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useMemo")}
        >
          UseMemo
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useCallback")}
        >
          UseCallback
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useRef")}
        >
          UseRef
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-sm px-4"
          onClick={() => setAba("useContext")}
        >
          UseContext
        </button>
      </div>

      {aba === "useState" && <UseState />}
      {aba === "useEffect" && <UseEffect />}
      {aba === "useMemo" && <UseMemo />}
      {aba === "useCallback" && <UseCallback />}
      {aba === "useRef" && <UseRef />}
      {aba === "useContext" && <UseContext />}
    </Layout>
  );
}

export default ReackHooks;
