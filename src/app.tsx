import React, { useState } from 'react';
import Chamada from '../src/components/chamada/chamada';
import FormContato from '../src/components/formContato/formContato';
import Nav from '../src/components/nav/nav';
import Sessao from './components/secao/secao';
import styles from './app.module.css'
import '@nextcss/reset';

export default function App () {


    return (
    <div className={styles.wrapper}>
            <Nav/>
            <Chamada subtitulo={"Designer e Dev"}>Gustavo Holzmann</Chamada>
        <Sessao backgroundColor={true} titulo='Desmotivado na quarentena, comecei a estudar programação' subtitulo='entre Backend e Front-end, definitivamente Front-End' nomeGif={`quarto`}>
            estudei muitas coisas, desde C e fundamentos da computação, 
            até chegar finalmente ao JavaScript, 
            linguagem que eu me especializei e que continuo a utilizar nos meus trabalhos, 
            em conjunto com a livraria React e o framework NEXT js
        </Sessao>
        <Sessao backgroundColor={false} titulo='Hoje, fico extremamente feliz com essa decisão, pois compreendo o' subtitulo='Design como ponte entre usuário e tecnologia' nomeGif={`quarto`}>
            e ao unir esses dois conhecimentos, posso 
            entregar produtos melhores, que levam em
            consideração o usuário em todas as etapas
            de desenvolvimento do projeto
        </Sessao>
        <FormContato></FormContato>
    </div>
)}