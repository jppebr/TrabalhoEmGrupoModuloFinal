import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import '../assets/css/equipe.css'

function Destaques() {
    return (
        <Row Row xs={1} md={2} className="g-5"> 
     
        <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="./image/emanuel2.jpeg" />
                    <Card.Body>
                        <Card.Title>Emanuel Wolves</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/Misael2.jpeg" />
                    <Card.Body>
                        <Card.Title>Misael Montezano</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/joao.jpeg" />
                    <Card.Body>
                        <Card.Title>João Pedro</Card.Title>
                    </Card.Body>
                </Card>
            </Col>                
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/luciano.jpeg" />
                    <Card.Body>
                        <Card.Title>Luciano Junior</Card.Title>
                    </Card.Body>
                </Card>
            </Col>      
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/300" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            O EstudoApp oferece suporte personalizado para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>   
                  
        </Row>
    );
}

export default Destaques;