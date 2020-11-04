import styles from "./AboutUs.module.css";

interface AboutUsProps {
  title: string;
  description: string;
}

export default function AboutUs({ title, description }: AboutUsProps) {
  return (
    <article className={styles.about_us_container}>
      <header className={styles.about_us_title}>
        <h1>{title}</h1>
      </header>

      <p>{description}</p>
    </article>
  );
}
