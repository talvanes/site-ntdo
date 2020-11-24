import slug from "slug";
import ClientCard, { ClientCardProps } from "@/components/Cards/ClientCard";

import styles from "./ClientList.module.css";

interface ClientListProps {
  id?: string;
  title?: string;
  clients: ClientCardProps[];
}

export default function ClientList({ clients, title, id }: ClientListProps) {
  return (
    <section id={id} className={styles.client_list}>
      <div className={styles.client_list_container}>
        {/* Optional Title */}
        {!!title && (
          <header className={styles.client_list_title}>
            <h1>{title}</h1>
          </header>
        )}

        {/* List of Cases */}
        <div className={styles.client_list_contents}>
          {clients.map(client => (
            <ClientCard
              key={slug(client.title)}
              title={client.title}
              path_to_image={client.path_to_image}
              link={client.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
