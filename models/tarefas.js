const bookshelf = require('../bookshelf');

const Tarefa = bookshelf.model('Tarefa', {
    tableName: 'tarefas',
    usuario(){
        return this.belongsTo('Usuario', 'usuario_id');
    }, 
    requireFetch: false,
}); 

module.exports = Tarefa;