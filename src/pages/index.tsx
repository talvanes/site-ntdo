import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeatureCardList from "@/components/FeatureCardList";
import FoundationCardList from "@/components/FoundationCardList";

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

      {/* Seção "Sobre Nós" */}
      <AboutUs
        title="Sobre nós"
        description="Donec sed nulla urna. Duis sed leo nec tortor ultricies
        commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat
        laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. "
      />

      {/* Seção "Nossos Serviços" */}
      <FeatureCardList
        title="Serviços"
        features={[
          {
            title: "Gestão de Talentos",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/feature-1.png"
          },
          {
            title: "Comunicação e Marketing",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/feature-2.png"
          },
          {
            title: "Treinamento Gerencial",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/feature-3.png"
          },
          {
            title: "Intermediação de Negócios",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/feature-4.png"
          },
        ]}
      />

      {/* Seção "Missão, Visão e Valores" */}
      <FoundationCardList
        missions={[
          {
            title: "Missão",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/mission-1.png"
          },
          {
            title: "Visão",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/mission-2.png"
          },
          {
            title: "Valores",
            description: "Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. Donec sed nulla urna. Duis sed leo nec tortor ultricies commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. ",
            path_to_image: "/images/mission-3.png"
          }
        ]}
      />

      {/* TODO Seção "Cases" (clientes) */}
    </Layout>
    </>
  )
}
