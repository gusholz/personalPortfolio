import React from 'react';
import Chamada from './components/chamada/capa';
import FormContato from '../src/components/formContato/formContato';
import Nav from '../src/components/nav/nav';
import Sessao from './components/secao/secao';
import '@nextcss/reset';

export default function App () {

    const id = `#trabalhos`

    return (
    <>
        <Nav/>
        <Chamada subtitulo={"Designer e Dev"}>Gustavo Holzmann</Chamada>
        <Sessao 
            backgroundColor={true}
            titulo='Desmotivado durante a quarentena, começo a estudar programação' 
            subtitulo='Entre Backend e Front-end'
            subtitulo2='Definitivamente Front-end' 
            nomeGif={`quarto`}
        >
            Estudei diversos tópicos ao longo do meu percurso, desde C, Express, MySQL, Python, Java, 
            até chegar finalmente ao JavaScript, linguagem que eu me especializei e que continuo a utilizar
            nos meus trabalhos, em conjunto com React.js e o framework NEXT js. Acredito profundamente
            que meus conhecimentos e interesses no design me motivaram a me interessar mais no Front-end,
            onde questões como cores, tipografia e animação tem uma maior importância.
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