import { Layout } from "@/components/layout/Layout";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { id, titulo } = router.query;

  return (
    <Layout
      title="Dynamic Routes"
      links={[
        { href: "/dynamic-routes", text: "Voltar" },
      ]}
    >
      <p>Post: {id} </p>
      <p>Titulo: {titulo} </p>
    </Layout>
  );
}

export default Post;