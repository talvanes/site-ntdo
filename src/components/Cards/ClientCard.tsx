import styles from "./ClientCard.module.css";

export interface ClientCardProps {
  title: string;
  path_to_image: string;
  link: string;
}

export default function ClientCard({ title, path_to_image, link }: ClientCardProps) {
  return (
    <article className={styles.client_card}>
      <a href={link} target="_blank" className={styles.client_card_container}>
        <img className={styles.client_card_image} src={path_to_image} alt={title} />
        <h1 className={styles.client_card_title}>{title}</h1>
      </a>
    </article>
  );
}
