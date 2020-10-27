import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  home?: boolean;
}

const SUFFIX = "| nTDO";

export default function SEO({ title, description, home = false }: SEOProps) {
  return (
    <Head>
      <title>{home ? title : `${title} ${SUFFIX}`}</title>

      {!!description && <meta name="description" content={description}/>}
    </Head>
  );
}
