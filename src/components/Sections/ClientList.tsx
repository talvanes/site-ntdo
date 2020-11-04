import slug from "slug";
import ClientCard, { ClientCardProps } from "@/components/Cards/ClientCard";

import styles from "./ClientList.module.css";

interface ClientListProps {
  title?: string;
  clients: ClientCardProps[];
}

export default function ClientList({ clients, title }: ClientListProps) {
  return (
    <section className={styles.client_list}>
      <div className={styles.client_list_container}>
        {/* Optional Title */}
        {!!title && (
          <header>
            <h1 className={styles.client_list_title}>{title}</h1>
          </header>
        )}

        {/* List of Cases */}
        {clients.map(client => (
          <ClientCard
            key={slug(client.title)}
            title={client.title}
            path_to_image={client.path_to_image}
            link={client.link}
          />
        ))}
      </div>
    </section>
  );
}
