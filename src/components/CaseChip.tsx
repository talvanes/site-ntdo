import styles from "./CaseChip.module.css";

export interface CaseChipProps {
  title: string;
  path_to_image: string;
  link: string;
}

export default function CaseChip({ title, path_to_image, link }: CaseChipProps) {
  return (
    <article className={styles.case_chip}>
      <a href={link} target="_blank" className={styles.case_chip_container}>
        <img className={styles.case_chip_image} src={path_to_image} alt={title} />
        <h1 className={styles.case_chip_title}>{title}</h1>
      </a>
    </article>
  );
}
