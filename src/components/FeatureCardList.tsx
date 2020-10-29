import FeatureCard, { FeatureCardProps } from "@/components/FeatureCard";

import styles from "./FeatureCardList.module.css";

interface FeatureCardListProps {
  features: FeatureCardProps[];
  title?: string;
}

export default function FeatureCardList({ features, title }: FeatureCardListProps) {
  return (
    <section className={styles.feature_card_list_container}>
      {/* Optional Title */}
      {!!title && (
        <header>
          <h1 className={styles.feature_card_list_title}>{title}</h1>
        </header>
      )}

      {/* List of Features */}
      {features.map(feature => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          path_to_image={feature.path_to_image}
        />
      ))}
    </section>
  );
}
