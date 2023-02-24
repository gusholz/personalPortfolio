import React from 'react';
import Chamada from './components/chamada/capa';
import FormContato from '../src/components/formContato/formContato';
import Nav from '../src/components/nav/nav';
import Sessao from './components/secao/secao';
import styles from './app.module.css'
import '@nextcss/reset';

export default function App () {

    const id = `#trabalhos`

    return (
    <>
        <Nav/>
        <Chamada subtitulo={"Designer e Dev Front-end"}>Gustavo Holzmann</Chamada>
        <Sessao 
            backgroundColor={true}
            titulo='Desmotivado durante a quarentena, comecei a estudar programação' 
            subtitulo='Entre Backend e Front-end'
            subtitulo2='Definitivamente Front-end' 
            nomeGif={`quarto`}
        >
            Estudei diversos tópicos ao longo do meu percurso, desde C, Express, Python, fundamentos da computação, 
            até chegar finalmente ao JavaScript, linguagem que eu me especializei e que continuo a utilizar
            nos meus trabalhos, em conjunto com a livraria React e o framework NEXT js. Acredito profundamente
            que meus conhecimentos e interesses no design me motivaram a permanecer no Front-end, área que mais
            me fascina, dentre as tantas outras da programação. 
        </Sessao>
        <Sessao 
            backgroundColor={false} 
            titulo='Hoje, fico extremamente feliz com essa decisão, pois compreendo que' 
            subtitulo='o Design é o intermediador entre o usuário e a tecnologia'
            subtitulo2='E a Experiência de Usuário é fundamental para projetos de excelência' 
            nomeGif={`quarto`}
        >
            E somente ao unir Design com Programação posso desenvolver
            ótimos produtos digitais, que levam em
            consideração o usuário em todas as diversas etapas
            de desenvolvimento do projeto, para, finalmente, entregar um produto de excêlencia. Nesse sentido,
            minha experiência com UX se demonstra essencial.
        </Sessao>
        <FormContato id={id}></FormContato>
    </>
)}