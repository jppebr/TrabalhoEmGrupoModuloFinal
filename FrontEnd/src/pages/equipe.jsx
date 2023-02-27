import { Container } from "react-bootstrap";
import Destaques from "../components/Destaques";

function Equipe() {
    return (
        <Container className="conteudo-margin">
            <h1>Nossa equipe e composta por:</h1>

            <Destaques />

        </Container>
    );
}

export default Equipe;