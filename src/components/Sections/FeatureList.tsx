import slug from "slug";
import FeatureCard, { FeatureCardProps } from "@/components/Cards/FeatureCard";

import styles from "./FeatureList.module.css";

interface FeatureListProps {
  features: FeatureCardProps[];
  title?: string;
}

export default function FeatureList({ features, title }: FeatureListProps) {
  return (
    <section className={styles.feature_list}>
      <div className={styles.feature_list_container}>
        {/* Optional Title */}
        {!!title && (
          <header>
            <h1 className={styles.feature_list_title}>{title}</h1>
          </header>
        )}

        {/* List of Features */}
        {features.map(feature => (
          <FeatureCard
            key={slug(feature.title)}
            title={feature.title}
            description={feature.description}
            path_to_image={feature.path_to_image}
          />
        ))}
      </div>
    </section>
  );
}
