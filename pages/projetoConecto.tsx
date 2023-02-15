import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Site Interativo do Projeto Co.necto"}
            subtitulo={"Deploy de um site com real utilização por usuário"}
            srcImg={`images/screenshotProjetoConecto.png`}
            link={`https://gusholz.github.io/countdownPersona/`}
            guiaLink={'O link do site está logo abaixo'}
        >
            Meu site mais complexo até então, o site do Co.necto tinha como missão demonstrar de um
            modo amigável e interativo a natureza do projeto. Como empecilhos técnicos, tive como maiores
            dificuldades a implementação de um modo Dark Mode de forma manual, bem como uma opção de aumentar/diminuir
            a fonte. Além disso, via processing, criei uma interação na parte inicial do site, para tornar a visitação 
            mais atrativa e demonstrar como este tipo de experiência é a base do projeto. 
        </PaginaTrab>
)}