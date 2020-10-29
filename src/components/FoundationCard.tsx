import styles from "./FoundationCard.module.css";

export interface FoundationCardProps {
  title: string;
  description: string;
  path_to_image: string;
}

export default function FoundationCard({ title, description, path_to_image }: FoundationCardProps) {
  return (
    <article className={styles.mission_card_container}>
      <header>
        <img className={styles.mission_card_image} src={path_to_image} alt={title} />

        <h1 className={styles.mission_card_title}>{title}</h1>
      </header>

      <p>{description}</p>
    </article>
  )
}
