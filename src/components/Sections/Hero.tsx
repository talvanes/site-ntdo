import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <article className={styles.hero_container}>
      <img className={styles.hero_background} src="/hero-background.png" alt="nTDO, do nada ao tudo!"/>

      <header className={styles.hero_content}>
        <h1 className={styles.hero_content_title}>{title}</h1>
        <p className={styles.hero_content_subtitle}>{subtitle}</p>
      </header>
    </article>
  );
}
