import slug from "slug";
import FeatureCard, { FeatureCardProps } from "@/components/Cards/FeatureCard";

import styles from "./FeatureList.module.css";

interface FeatureListProps {
  id?: string;
  features: FeatureCardProps[];
  title?: string;
}

export default function FeatureList({ features, title, id }: FeatureListProps) {
  return (
    <section id={id} className={styles.feature_list}>
      <div className={styles.feature_list_container}>
        {/* Optional Title */}
        {!!title && (
          <header className={styles.feature_list_title}>
            <h1>{title}</h1>
          </header>
        )}

        {/* List of Features */}
        <div className={styles.feature_list_contents}>
          {features.map(feature => (
            <FeatureCard
              key={slug(feature.title)}
              title={feature.title}
              description={feature.description}
              path_to_image={feature.path_to_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
