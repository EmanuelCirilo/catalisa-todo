const errors = require('bookshelf/lib/errors');
var express = require('express');
var router = express.Router();
const Usuario = require('../models/usuario');
const Tarefa = require('../models/tarefas');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/perfil', function(req, res, next) {
  res.json({
    nome: 'Emanuel Cirilo',
    email: 'emanuel_janipa2@hotmail.com'
  })
});


router.post('/perfil', function (req, res){
  // lógica de inserção do nosso banco de dados
});

router.put('/perfil', function (req, res){
  // lógica de atualização do nosso banco de dados
});

router.delete('/perfil', function (req, res){
  // lógica de exclusão do nosso banco de dados
});

router.get('/usuarios', async function (req, res, next) {
  const usuarios = await Usuario.fetchAll(); //await faz com que a proxíma linha só será processada após a conclusão da definida em await.
  res.json(usuarios);
  });

router.post('/usuarios', async function (req, res){
  req.body.email
  const usuarioExistente = await Usuario.where('email', req.body.email).fetch()
  if(usuarioExistente){
    res.json({
      mensagem:'Email já cadastrado'
    })
  }
  else{
  
  req.body.nome
  const usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  });
  await usuario.save();
 
res.send({
    mensagem: 'Usuário cadastrado com sucesso!',
    usuario: usuario
  });
  
}})

router.get('/tarefas', async function (req, res, next){
  const tarefas = await Tarefa.fetchAll();
  res.json(tarefas); 
});
// padrão REST
// /usuarios/1/tarefas
router.get('/usuarios/:usuario_id/tarefas', async function(req, res, next){
  const usuario_id = req.params.usuario_id;
  const tarefas = await Tarefa.where('usuario_id', usuario_id).fetchAll({

  });
  res.json(tarefas);
})
module.exports = router;
