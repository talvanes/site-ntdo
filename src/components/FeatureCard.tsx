import styles from "./FeatureCard.module.css";

export interface FeatureCardProps {
  title: string;
  path_to_image: string;
  description: string;
}

export default function FeatureCard({ title, description, path_to_image }: FeatureCardProps) {
  return (
    <article className={styles.feature_card_container}>
      <header>
        <img className={styles.feature_card_image} src={path_to_image} alt={title} />

        <h1 className={styles.feature_card_title}>{title}</h1>
      </header>

      <p>{description}</p>
    </article>
  );
}
