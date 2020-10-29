import slug from "slug";
import CaseChip, { CaseChipProps } from "@/components/CaseChip";

import styles from "./CaseList.module.css";

interface CaseListProps {
  title?: string;
  cases: CaseChipProps[];
}

export default function CaseList({ cases, title }: CaseListProps) {
  return (
    <section className={styles.case_list}>
      <div className={styles.case_list_container}>
        {/* Optional Title */}
        {!!title && (
          <header>
            <h1 className={styles.case_list_title}>{title}</h1>
          </header>
        )}

        {/* List of Cases */}
        {cases.map(caseChip => (
          <CaseChip
            key={slug(caseChip.title)}
            title={caseChip.title}
            path_to_image={caseChip.path_to_image}
            link={caseChip.link}
          />
        ))}
      </div>
    </section>
  );
}
