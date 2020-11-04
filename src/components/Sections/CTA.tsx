import styles from "./CTA.module.css";

interface CTAProps {
  title: string;
  action_text: string;
}

export default function CTA({ title, action_text }: CTAProps) {
  return (
    <article className={styles.cta}>
      <div className={styles.cta_container}>
        <header className={styles.cta_title}>
          <h1>{title}</h1>
        </header>

        <button className={styles.cta_button} type="button">{action_text}</button>
      </div>
    </article>
  );
}
