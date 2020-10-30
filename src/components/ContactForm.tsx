import cn from "classnames";

import styles from "./ContactForm.module.css";

export default function Form() {
  return (
    <form className={styles.contact_form} action="/" method="post">
      <div className={styles.contact_form_content}>
        <input className={styles.contact_form_field} type="text" name="name" placeholder="Nome" />

        <input className={styles.contact_form_field} type="email" name="email" placeholder="E-mail" />

        <textarea className={cn(
          styles.contact_form_field,
          styles.contact_form_textarea_no_resize
        )} name="message" rows={3} placeholder="Mensagem" ></textarea>

        <button className={styles.contact_form_button} type="submit">Enviar</button>
      </div>
    </form>
  )
}
