import Container from 'react-bootstrap/Container';
import '../assets/css/depoimentos2.css'

function Rodape() {
    return (
        <footer className="rodape mt-5 border-top border-dark border-2">
            <Container className='text-center py-3'>
                <p id='fcol'>Game News &copy; 2023</p>
            </Container>
        </footer>
    );
}

export default Rodape