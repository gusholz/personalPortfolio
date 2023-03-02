import PaginaTrab from "../src/trabalhos";
import '@nextcss/reset';

export default function Home () {
    return (
        <PaginaTrab
            titulo={"Plataforma de divugação Científica"}
            subtitulo={"Wireframe de alta fidelidade criado em Curso de UX"}
            srcImg={`images/screenshotDivug.webp`}
            link={`https://www.figma.com/proto/CIX5OwCjkdUdlJjLoBrKAN/IdentidadeVisual?node-id=112%3A62&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=112%3A62`}
            guiaLink={'O link do protótipo utilizável está logo abaixo'}
        >
            Participar do curso de Experiência do Usuário do Instituto Atlântico me permitiu compreender a importância do processo de UX.
            Com a ajuda da minha equipe, realizei várias entrevistas com divulgadores científicos de todo o Brasil e analisamos os dados
            coletados para entender suas necessidades e desafios. Em seguida, utilizamos técnicas de clusterização para agrupar as informações
            em categorias relevantes. Essa etapa foi fundamental para definir os recursos e funcionalidades que nosso sistema web deveria
            oferecer. Ao longo do processo de desenvolvimento, nossa equipe fez várias iterações e testes com os usuários para garantir
            que o produto final atendesse às suas expectativas e necessidades. Foi um processo desafiador, mas extremamente gratificante.
            A experiência me mostrou que o processo de UX é crucial para o sucesso de um projeto, e estou animado para aplicar essas habilidades em projetos futuros.
        </PaginaTrab>
)}