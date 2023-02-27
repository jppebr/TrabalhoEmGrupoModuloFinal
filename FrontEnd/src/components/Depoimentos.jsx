import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Clientes</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="../image/Misael.png" alt="Foto do depoimento" className='rounded' class="img-thumbnail" />
            </Col>
            <Col sm="12" md="10">
                <strong>Misael Montezano</strong>
                <p>
                    "A API de site de notícias de jogos é incrível! <br />
                     É fácil de usar e me permite acessar as últimas notícias de jogos em tempo real, além de poder filtrar notícias de acordo com minhas preferências.
                     Eu recomendo fortemente esta API para quem procura uma fonte confiável de notícias de jogos."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="../image/emanuel.jpeg" alt="Foto do depoimento 2" className='rounded' class="img-thumbnail" />
            </Col>
            <Col sm="12" md="10">
                <strong>Emanuel Wolves</strong>
                <p>
                "Com a API de site de notícias de jogos, pude facilmente integrar as últimas notícias e análises de jogos em meu aplicativo móvel. <br />
                 É incrivelmente eficiente e o suporte técnico foi excelente. Estou muito satisfeito com o resultado final e 
                recomendo esta API para quem procura uma solução fácil para integrar notícias de jogos em seus aplicativos."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos