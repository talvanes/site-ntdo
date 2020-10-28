import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
    <SEO
      title="nTDO, Do Nada ao Tudo"
      description="nTDO, do Nada ao Tudo. Realize seus sonhos com a gente!"
      home
    />

    <Layout>
      {/* Hero Section */}
      <Hero title="nTDO" subtitle="Do Nada Ao Tudo" />

      {/* TODO Seção "Sobre Nós" */}
    </Layout>
    </>
  )
}
