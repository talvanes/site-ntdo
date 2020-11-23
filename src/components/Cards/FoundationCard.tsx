import styles from "./FoundationCard.module.css";

export interface FoundationCardProps {
  title: string;
  description: string;
  path_to_image: string;
}

export default function FoundationCard({ title, description, path_to_image }: FoundationCardProps) {
  return (
    <article className={styles.foundation_card_container}>
      <img className={styles.foundation_card_image} src={path_to_image} alt={title} />

      <header className={styles.foundation_card_info}>
        <h1 className={styles.foundation_card_title}>{title}</h1>
        <p>{description}</p>
      </header>
    </article>
  )
}
