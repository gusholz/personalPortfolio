import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Site Interativo do Projeto Co.necto"}
            subtitulo={"Deploy de um site com real utilização por usuário"}
            srcImg={`images/screenshotProjetoConecto.png`}
            link={`https://conecto-teal.vercel.app`}
            guiaLink={'O link do site está logo abaixo'}
        >
            O site Co.necto foi um projeto desafiador, mas extremamente gratificante de ser desenvolvido. Para criar uma experiência amigável
            e interativa, decidi adicionar interações ao site. Essas interações foram criadas em processing e foram projetadas para ajudar
            a demostrar a natureza interativa do projeto.
            Além disso, encontrei várias dificuldades técnicas ao desenvolver o site. Uma das maiores dificuldades foi a implementação do modo
            escuro e da opção de aumentar/diminuir a fonte. Para resolver esse problema, desenvolvi uma solução personalizada que permitiu
            aos visitantes alternar facilmente entre o modo claro e escuro e ajustar o tamanho da fonte conforme desejado.
            No geral, estou muito satisfeito com o resultado final do site Co.necto. As interações que desenvolvi ajudaram a tornar a experiência do usuário mais agradável e envolvente, e estou confiante de que o projeto será bem recebido pelos visitantes.
        </PaginaTrab>
)}