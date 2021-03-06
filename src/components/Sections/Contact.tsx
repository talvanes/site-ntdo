import Form from "@/components/Forms/ContactForm";

import styles from "./Contact.module.css";

interface ContactProps {
  title: string;
  subtitle: string;
  id?: string;
}

export default function Contact({ title, subtitle, id }: ContactProps) {
  return (
    <section id={id} className={styles.contact}>
      <div className={styles.contact_content}>
        <header className={styles.contact_title}>
          <h1>{title}</h1>
          <p className={styles.contact_subtitle}>{subtitle}</p>
        </header>

        {/* Contact Form */}
        <Form className={styles.contact_form} />
      </div>
    </section>
  )
}
