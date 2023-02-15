import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './formContato.module.css'
import MostraTrabs from '../mostraTrabs/mostraTrabalhos'
import ContactForm from './formulario';
import Formulario from './formulario';

export default function FormContato(props:{id:string}):JSX.Element {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} id={props.id}>
        <MostraTrabs/>
        <Formulario/>
      </div>
    </div>
  );
}