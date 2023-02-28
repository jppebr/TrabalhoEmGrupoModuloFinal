import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'
import Tabs from '../components/tabs'

function Home() {
    return (
        <>
            <Banners />
             <Tabs />
            <Container>
             

                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;