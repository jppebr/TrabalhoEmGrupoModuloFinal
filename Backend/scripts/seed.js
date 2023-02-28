import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Product, User
]

const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = 'Lorem ipsum dolor sit amet.'
    const pages = [page]

    const products = []
    const database = [{ "id": 1, "titulo": "Notícias em tempo real", "descricao": "Acesso a notícias de jogos em tempo real" }, { "id": 2, "titulo": "Busca avançada de notícias", "descricao": "Busca por notícias específicas por categoria, plataforma, editora, desenvolvedor, etc." }, { "id": 3, "titulo": "Filtragem de notícias", "descricao": "Filtragem de notícias por popularidade ou classificação do usuário" }, { "id": 4, "titulo": "Comentários e classificações", "descricao": "Comentários e classificações de usuários" }, { "id": 5, "titulo": "Análises detalhadas de jogos", "descricao": "Acesso a análises de jogos detalhadas" }, { "id": 6, "titulo": "Integração com outras plataformas", "descricao": "Possibilidade de integração com outras plataformas ou aplicativos" }, { "id": 7, "titulo": "Notificações personalizadas", "descricao": "Notificações personalizadas para usuários interessados em determinados jogos" }, { "id": 8, "titulo": "Vídeos e transmissões ao vivo", "descricao": "Vídeos e transmissões ao vivo de jogos" }, { "id": 9, "titulo": "Informações sobre lançamentos e eventos", "descricao": "Informações sobre lançamentos de jogos e eventos relacionados a jogos" }, { "id": 10, "titulo": "Dados estatísticos de jogos", "descricao": "Dados estatísticos de vendas e jogabilidade de jogos populares" }]

    for (let i = 0; i < database.length; i++) {
        const prod = new Product()
        prod.title = database[i].titulo
        prod.description = database[i].descricao
        products.push(prod)
    }

    const admin = new User()
    admin.email = "admin@case2.com"
    admin.encryptedPassword = hashSync('12345678', 10)
    const users = [admin]

    await Page._seed(pages)
    await Product._seed(products)
    await User._seed(users)
}

seed()