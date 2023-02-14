import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './formContato.module.css'
import MostraTrabs from '../mostraTrabs/mostraTrabalhos'

export default function FormContato(props:{id:string}):JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} id={props.id}>
        <MostraTrabs/>
          <form className={styles.formulario} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.contato}>Entre em contato!</h3>
              <input className={styles.input} type="text" placeholder="Nome" {...register("Nome", {})} />
              <input className={styles.input} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
              <input className={styles.input} type="text" placeholder="Número para contato" {...register("Número para contato", {})} />
              <input className={`${styles.input} ${styles.textField}`} type="text" placeholder="Mensagem" {...register("Mensagem", {})} />
              <input className={styles.button} type="submit" />
          </form>
      </div>
    </div>
  );
}