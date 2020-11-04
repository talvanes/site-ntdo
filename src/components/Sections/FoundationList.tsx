import slug from "slug";
import FoundationCard, { FoundationCardProps } from "@/components/Cards/FoundationCard";

import styles from "./FoundationList.module.css";

interface FoundationListProps {
  id?: string;
  foundations: FoundationCardProps[];
}

export default function FoundationList({ foundations, id }: FoundationListProps) {
  return (
    <section id={id} className={styles.foundation_list}>
      <div className={styles.foundation_list_container}>
        {/* Mission, Vision and Values */}
        {foundations.map(foundation => (
          <FoundationCard
            key={slug(foundation.title)}
            title={foundation.title}
            description={foundation.description}
            path_to_image={foundation.path_to_image}
          />
        ))}
      </div>
    </section>
  )
}
