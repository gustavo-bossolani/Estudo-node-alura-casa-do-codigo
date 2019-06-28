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
                        nome: 'Gustavo Bossolani',
                        profissao: 'Desenvolvedor Web'
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

    app.get('/livros/adcionar-livro', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.post('/livros', (req, resp) => {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.adciona(req.body)
            .then(
                console.log('Livro inserido na base de dados'),
                resp.redirect('/livros')
            )
            .catch(erro => console.log(erro));
    });

    app.put('/livros', (req, resp) => {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        
        livroDao.atualiza(req.body)
            .then(
                console.log('Livro editado e inserido na base de dados'),
                resp.redirect('/livros')
            )
            .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    });

    app.get('/livros/editar-livro/:id', (req, resp) => {

        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then(livro =>
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    });

}