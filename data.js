// ==========================================================================
// DATA.JS — Edite aqui para atualizar o conteúdo do site
// Não é necessário mexer no index.html ou no style.css
// ==========================================================================

const SITE_DATA = {

    // ------------------------------------------------------------------
    // CONFIGURAÇÕES GERAIS
    // ------------------------------------------------------------------
    config: {
        titulo_aba: "Seu Nome | Universo Runaman",
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
        botao_texto: "Explore os Universos",
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
                alt: "Los Papanatas",
                meta: "Livro & Animação",
                nome: "As Aventuras de Los Papanatas",
                descricao: "Uma Família de Batatas que luta pelo sabor natural e a tradição. Adaptado em 12 episódios para canais de streaming com foco no público pré-escolar.",
            },
            {
                badge: "Em Produção",
                imagem: "livro-projeto2.png",
                alt: "Macho-Picchu a Montanha Nômade",
                meta: "Livro Ilustrado",
                nome: "Macho-Picchu a Montanha Nômade",
                descricao: "Uma jornada Metamórfica de um coloso lítico. Atualmente em fase de storyboard para desenvolvimento de longa-metragem.",
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
                alt: "Pelúcia do Bicho da Semente",
                nome: "Pelúcia do Bicho da Semente",
                preco: "R$ 89,90",
            },
            {
                imagem: "produto2.png",
                alt: "Pelúcia Primo Olluco",
                nome: "Pelúcia Primo Olluco",
                preco: "R$ 45,00",
            },
            {
                imagem: "produto3.png",
                alt: "Pelúcias Huacos Incas",
                nome: "Pelúcias Huacos Incas",
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
