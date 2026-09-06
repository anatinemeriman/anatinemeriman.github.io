// ==========================================================================
// DATA.JS — Edite aqui para atualizar o conteúdo do site
// Não é necessário mexer no index.html ou no style.css
// ==========================================================================

const SITE_DATA = {

    // ------------------------------------------------------------------
    // CONFIGURAÇÕES GERAIS
    // ------------------------------------------------------------------
    config: {
        titulo_aba: "Seu Nome | Universo Galáctico",
        logo: "logo.png",
    },

    // ------------------------------------------------------------------
    // HERO (topo da página)
    // ------------------------------------------------------------------
    hero: {
        tag: "Designer & Autor Infantil",
        titulo: "Histórias que orbitam livros,",
        titulo_destaque: "telas de TV e a imaginação.",
        descricao: "Crio universos lúdicos totalmente integrados. Dos primeiros esboços e páginas impressas às produções de séries animadas para televisão e produtos licenciados.",
        botao_texto: "Explore as Galáxias",
        botao_link: "#projetos",
        personagem_img: "personagem.png",
        personagem_alt: "Personagem principal",
    },

    // ------------------------------------------------------------------
    // PROJETOS
    // Para adicionar um projeto: copie um bloco { } e cole abaixo,
    // separado por vírgula.
    // ------------------------------------------------------------------
    projetos: {
        titulo: "Universos em",
        titulo_destaque: "Expansão",
        subtitulo: "Explore os projetos autorais que ganharam vida nas páginas impressas e cruzaram a órbita para se transformarem em animações e séries de televisão.",
        lista: [
            {
                badge: "Série de TV",
                imagem: "livro-projeto1.png",
                alt: "As Aventuras de Zog",
                meta: "Livro & Animação",
                nome: "As Aventuras de Zog",
                descricao: "O pequeno alienígena que perdeu o brilho de sua estrela. Adaptado em 12 episódios para canais de streaming com foco no público pré-escolar.",
            },
            {
                badge: "Em Produção",
                imagem: "livro-projeto2.png",
                alt: "A Órbita da Baleia",
                meta: "Livro Ilustrado",
                nome: "A Órbita da Baleia",
                descricao: "Uma jornada lírica sobre ecologia espacial e amizade. Atualmente em fase de storyboard para desenvolvimento de longa-metragem.",
            },
            // --- Para adicionar um novo projeto, copie o bloco abaixo: ---
            // {
            //     badge: "Novo",
            //     imagem: "livro-projeto3.png",
            //     alt: "Nome do Projeto",
            //     meta: "Tipo do Projeto",
            //     nome: "Nome do Projeto",
            //     descricao: "Descrição do projeto.",
            // },
        ],
    },

    // ------------------------------------------------------------------
    // LOJA
    // Para adicionar um produto: copie um bloco { } e cole abaixo,
    // separado por vírgula.
    // ------------------------------------------------------------------
    loja: {
        titulo: "Produtos da",
        titulo_destaque: "Galáxia",
        subtitulo: "Leve um pedaço das histórias para casa. Colecionáveis de alta qualidade baseados nos personagens oficiais das séries de TV.",
        lista: [
            {
                imagem: "produto1.png",
                alt: "Pelúcia Oficial do Zog",
                nome: "Pelúcia Oficial do Zog",
                preco: "R$ 89,90",
            },
            {
                imagem: "produto2.png",
                alt: "Caneca Espacial Térmica",
                nome: "Caneca Espacial Térmica",
                preco: "R$ 45,00",
            },
            {
                imagem: "produto3.png",
                alt: "Caderno de Esboços Estelar",
                nome: "Caderno de Esboços Estelar",
                preco: "R$ 35,90",
            },
            // --- Para adicionar um novo produto, copie o bloco abaixo: ---
            // {
            //     imagem: "produto4.png",
            //     alt: "Nome do Produto",
            //     nome: "Nome do Produto",
            //     preco: "R$ 00,00",
            // },
        ],
    },

};
