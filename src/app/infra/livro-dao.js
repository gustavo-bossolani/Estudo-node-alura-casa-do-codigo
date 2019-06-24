class LivroDao {

    constructor(db) {
        this._db = db;
    }

    //Listando livros sem Promise
    listaLivros(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (err, resposta) =>
                callback(err, resposta));
    }

    listaLivros() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');
                    return resolve(resultados);
                }
            );
        });
    }

    insereLivro(titulo, preco, descricao) {
        const sql =
            `
            INSERT INTO livros (titulo, preco, descricao)
            SELECT '${ titulo}', ${preco}, '${descricao}'
            WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = '${ descricao}')
        `;
        this._db.run(sql);
    }
}
module.exports = LivroDao;