import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

import Hero from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/AboutUs";
import FeatureList from "@/components/Sections/FeatureList";
import FoundationList from "@/components/Sections/FoundationList";
import ClientList from "@/components/Sections/ClientList";
import CTA from "@/components/Sections/CTA";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <>
      <SEO
        title="nTDO, Do Nada ao Tudo"
        description="nTDO, do Nada ao Tudo. Realize seus sonhos com a gente!"
        home
      />

      <Layout
        sticky_menu_bar={true}
        default_menu_item={'/'}
        menu_entries={[
          {
            link: '/',
            description: 'Início'
          },
          {
            link: 'about',
            description: 'Sobre',
            anchor: true
          },
          {
            link: 'services',
            description: 'Serviços',
            anchor: true
          },
          {
            link: 'foundations',
            description: 'Missão',
            anchor: true
          },
          {
            link: 'cases',
            description: 'Cases',
            anchor: true
          },
          {
            link: 'contact',
            description: 'Contato',
            anchor: true
          },
          {
            link: '/blog',
            description: 'Blog'
          }
        ]}>
        {/* Hero Section */}
        <Hero title="nTDO" subtitle="Do Nada Ao Tudo" />

        {/* Seção "Sobre Nós" */}
        <AboutUs
          id="about"
          title="Sobre nós"
          description="Donec sed nulla urna. Duis sed leo nec tortor ultricies
        commodo id in lectus. Suspendisse potenti. Fusce mollis, tortor sed feugiat
        laoreet, est ex porta tellus, sit amet varius nisi purus sit amet urna. "
        />

        {/* Seção "Nossos Serviços" */}
        <FeatureList
          id="services"
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
        <FoundationList
          id="foundations"
          foundations={[
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

        {/* Seção "Cases" (clientes) */}
        <ClientList
          id="cases"
          title="Cases"
          clients={[
            {
              title: "Econsa",
              path_to_image: "/images/case-1.png",
              link: "https://econsa.com.br"
            }
          ]}
        />

        {/* Call-To-Action */}
        <CTA title="Ficou interessado?" action_text="Enviar" />

        {/* Contato */}
        <Contact id="contact" title="Contato" subtitle="Fale Conosco" />
      </Layout>
    </>
  )
}
