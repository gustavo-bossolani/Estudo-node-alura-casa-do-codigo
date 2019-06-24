const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.marko(
            require('../views/home/home.marko'),
            {
                desenvolvedor: [
                    {
                        id: 1,
                        nome: 'Gustavo Bossolani'
                    }
                ]
            }
        );
    });


    app.get('/livros', (req, resp) => {

        // Buscando livros sem Promise
        // const livroDao = new LivroDao(db);
        // livroDao.listaLivros((erro, livros) => {
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros
        //         }
        //     );
        // });

        //Buscando livros com Promise
        const livroDao = new LivroDao(db);
        livroDao.listaLivros()
            .then(livros =>
                resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros
                    }
                ))
            .catch(erro => console.log(erro));

        // resp.marko(
        //     require('../views/livros/lista/lista.marko'),
        //     {
        //         livros: [
        //             {
        //                 id: 1,
        //                 titulo: 'Fundamentos do Node'
        //             },
        //             {
        //                 id: 2,
        //                 titulo: 'Node Avançado'
        //             },
        //             {
        //                 id: 3,
        //                 titulo: 'Backend com Java'
        //             }
        //         ]
        //     }
        // );
    });

    app.get('/adcionar', (req, resp) => {

        const livroDao = new LivroDao(db);
        livroDao.insereLivro('Aprendendo Spring MVC', '49.99', 'Utilizando o queridinho do mundo Java!');
        resp.send('<h1>Livro Adcionado!</h1> <a href="/">voltar para a tela principal</a><br><a href="/livros">listar livros</a>');
        console.log('Livro adcionado com sucesso!');
    });
}