import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './formContato.module.css'

export default function FormContato():JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register("Nome", {})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="text" placeholder="Número para contato" {...register("Número para contato", {})} />
            <input type="text" placeholder="Mensagem" {...register("Mensagem", {})} />
            <input type="submit" />
        </form>
        <h3>Até a próxima :)</h3>
    </div>
  );
}