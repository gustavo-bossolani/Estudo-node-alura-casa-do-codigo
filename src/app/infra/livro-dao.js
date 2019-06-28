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
    adciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `INSERT INTO LIVROS (
                titulo,
                preco,
                descricao) values(?,?,?)`,
                [livro.titulo, livro.preco, livro.descricao],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível inserir Este livro na base de Dados :(');
                    }
                    resolve();
                });
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                 SELECT * FROM livros WHERE id = ?
                `, [id], (erro, livro) => {
                    if (erro) return reject('Livro não Encontrado!');
                    return resolve(livro);
                }
            );
        });
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
                `, [livro.titulo, livro.preco, livro.descricao, livro.id]
                , erro => {
                    if (erro) return reject('Não foi possível atualizar o Livro!');
                    resolve();
                })
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                DELETE FROM livros WHERE id = ?
                `, [id], erro => {
                    if (erro) return reject('Não foi possível deletar o Livro!');
                    return resolve();
                }
            );
        });
    }
}
module.exports = LivroDao;