import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Countdown Persona 5"}
            subtitulo={"Um contador que fiz para o lançamento do jogo para PC"}
            srcImg={`images/screenshot1countdown.png`}
            link={`https://gusholz.github.io/countdownPersona/`}
            guiaLink={'O site está disponível no link abaixo (API de Buscas foi desabilitada por a key ter sido encerrada :c) O site está disponível no link abaixo (API de Buscas foi desabilitada por a key ter sido encerrada :c) '}
        >
            Esse foi meu primeiro projeto utilizando o React, e inicialmente, como foi difícil! Tive certa dificuldade em compreender bem
            a lógica de uso da livraria. Apesar disso, o uso dos Hooks me ajudou muito. Com isso, criei esse site baseado em um jogo que
            gosto muito como projeto de imersão ao React durante as minhas férias, e creio que a experiência foi bem rica nesse sentido!
            Criei também, utilizando uma API de procuras, um "feed" de notícias que se atualizava a cada 8 horas, tornando a experiência
            do site mais rica.
        </PaginaTrab>
)}