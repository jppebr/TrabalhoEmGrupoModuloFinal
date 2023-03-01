import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import '../assets/css/sobre.css'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>
            <h1>Sobre a nossa Api</h1>
            <p id='fcol'>{sobre.text}</p>
            <Depoimentos />
        </Container>
    );
}

export default Sobre