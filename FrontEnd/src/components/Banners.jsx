import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/estilo.css'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-35 h-35"
                    src="image/fort-2.jpeg"
                    alt="Fortnite"
                    id='rel'
                />
                <Carousel.Caption>
                    <h5>Game News</h5>
                    <p>Fortnite: O popular jogo Battle Royale da Epic Games continua a evoluir com novas temporadas e atualizações. A mais recente temporada, a 9ª temporada, trouxe mudanças no mapa e novas skins para os personagens.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image/leon.jpeg"
                    alt="Resident Evil 4"
                    id='rol'
                />
                <Carousel.Caption>
                    <h5>Game News</h5>
                    <p>Recentemente, a Capcom anunciou o lançamento de Resident Evil 4 VR, uma versão em realidade virtual do jogo de ação e terror clássico que foi originalmente lançado em 2005. A versão VR permitirá aos jogadores experimentar a história icônica de Leon S. Kennedy em uma perspectiva totalmente nova, com gráficos e jogabilidade atualizados para a tecnologia VR.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image/maxresdefault.jpg"
                    alt="FIFA23"
                    id='rol'
                    
                    
                />
                <Carousel.Caption>
                    <h5>Game News</h5>
                    <p >
                        HyperMotion Technology: A EA anunciou que está trabalhando em uma nova tecnologia de inteligência artificial chamada HyperMotion, que será usada em FIFA 23. A tecnologia usa um conjunto de algoritmos de aprendizado de máquina para coletar dados de movimentos reais de jogadores profissionais durante partidas e treinos.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners