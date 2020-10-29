import FoundationCard, { FoundationCardProps } from "@/components/FoundationCard";

import styles from "./FoundationCardList.module.css";

interface FoundationCardListProps {
  missions: FoundationCardProps[];
}

export default function FoundationCardList({ missions }: FoundationCardListProps) {
  return (
    <section className={styles.mission_card_list}>
      <div className={styles.mission_card_list_container}>
        {/* Foundation, Vision and Values */}
        {missions.map(mission => (
          <FoundationCard
            title={mission.title}
            description={mission.description}
            path_to_image={mission.path_to_image}
          />
        ))}
      </div>
    </section>
  )
}
