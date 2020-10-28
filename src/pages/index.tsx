import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";

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
      <AboutUs
        title="Sobre nós"
        description="Donec sed nulla urna. Duis sed leo nec tortor ultricies
        commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat
        laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. "
      />
    </Layout>
    </>
  )
}
