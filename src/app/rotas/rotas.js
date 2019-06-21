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
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node Avançado'
                    },
                    {
                        id: 3,
                        titulo: 'Backend com Java'
                    }
                ]
            }
        );
    });
}