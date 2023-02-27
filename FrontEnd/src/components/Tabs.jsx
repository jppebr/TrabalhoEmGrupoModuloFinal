import Accordion from 'react-bootstrap/Accordion';




function BasicExample() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Melhore a experiência do seu site de jogos com nossa API de notícias</Accordion.Header>
          <Accordion.Body>
          Nossa API de site de notícias de jogos é uma ótima maneira de melhorar a experiência do seu site. Com a integração da nossa API,
           você pode fornecer aos seus usuários notícias em tempo real, análises detalhadas de jogos, comentários e classificações de usuários, e muito mais.
           Oferecemos suporte técnico completo e documentação detalhada para ajudá-lo a começar a usar nossa API em pouco tempo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Mantenha seus usuários atualizados com nossa API de site de notícias de jogos</Accordion.Header>
          <Accordion.Body>
          Se você administra um site de jogos ou blog, nossa API de site de notícias de jogos é a solução perfeita para manter seus usuários atualizados com as últimas notícias de jogos. Com a nossa API, você pode facilmente integrar notícias de jogos em seu site, permitindo que seus usuários acessem análises de jogos detalhadas, vídeos e transmissões ao vivo de jogos, e muito mais. 
          Entre em contato conosco hoje para saber mais sobre como nossa API pode ajudar a melhorar a experiência dos seus usuários com notícias de jogos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default BasicExample;