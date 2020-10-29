import slug from "slug";
import FoundationCard, { FoundationCardProps } from "@/components/FoundationCard";

import styles from "./FoundationCardList.module.css";

interface FoundationCardListProps {
  foundations: FoundationCardProps[];
}

export default function FoundationCardList({ foundations }: FoundationCardListProps) {
  return (
    <section className={styles.foundation_card_list}>
      <div className={styles.foundation_card_list_container}>
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
