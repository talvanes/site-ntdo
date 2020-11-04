import styles from "./AboutUs.module.css";

interface AboutUsProps {
  id?: string;
  title: string;
  description: string;
}

export default function AboutUs({ title, description, id }: AboutUsProps) {
  return (
    <article id={id} className={styles.about_us}>
      <div className={styles.about_us_container}>
        <header className={styles.about_us_title}>
          <h1>{title}</h1>
        </header>

        <p>{description}</p>
      </div>
    </article>
  );
}
