import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './formContato.module.css'

export default function Formulario() {
  const [state, handleSubmit] = useForm("mayzezgq");
  if (state.succeeded) {
      return (
        <div>
            <p className={styles.agradecimento}>Obrigado pela mensagem! Em breve retornarei o contato ;)</p>
        </div>
      );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
        <h3 className={styles.contato}>Entre em contato!</h3>
        <label className={styles.label} htmlFor='nome'>
            Nome
        </label>
        <input
            className={styles.input}
            id='nome'
            type='text'
            name='nome'
            required={true}
        />
        <label className={styles.label} htmlFor="email">
            Email
        </label>
        <input
            className={styles.input}
            id="email"
            type="email" 
            name="email"
            required={true}
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label className={styles.label} htmlFor='nome'>
            Mensagem
        </label>
        <input
            className={`${styles.input} ${styles.texto}`}
            id='mensagem'
            type='text'
            name='mensagem'
            required={true}
        />
        <textarea
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" className={styles.button} disabled={state.submitting}>
            Enviar Mensagem
        </button>
    </form>
  );
}