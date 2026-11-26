const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
//const connectionMySql = require("./database/database");
const connectionSQLServer = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");


//DataBase
// connectionMySql
//     .authenticate()
//     .then(() => {
//         console.log("conecxao com o banco MYSQL executada");
//     })
//     .catch((msgErro)=> {
//         console.log(msgErro);
//     })

    connectionSQLServer
        .authenticate()
        .then(() => {
            console.log("conecxao com o banco SQL Server executada");
        })
        .catch((msgErro)=> {
            console.log(msgErro);
        })

    

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then((perguntas => {
        //console.log(perguntas);

        res.render("index",{
            perguntas: perguntas
        });

    }))
    
});


app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});


app.post("/salvarPergunta",(req,res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
    });
});

app.get("/pergunta/:id",(req,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(perguntas =>{
        if(perguntas != undefined){
           
            Resposta.findAll({
                where: {perguntaId: perguntas.id},
                order:[['id','DESC']]

            }).then(respostas => {
                res.render("pergunta",{
                    pergunta:perguntas, 
                    respostas: respostas
                });
            });

            
        }else{
            res.redirect("/");
        }
    });
    
});


app.post("/salvarResposta",(req,res) => {

    var perguntaId = req.body.perguntaId;
    var corpo = req.body.corpo;
    Resposta.create({
        perguntaId: perguntaId,
        corpo: corpo
    }).then(()=>{
        res.redirect("/pergunta/"+perguntaId);
    });
});


// app.get("/:nome/:lang",(req, res) => {
//     var nome = req.params.nome;
//     var lang = req.params.lang;
//     var exibirMsg = false;
 
//     var produtos = [
//         {nome: "Doritos",preco: 3.14},
//         {nome: "Coca-cola",preco:5},
//         {nome: "Leite",preco:1.45},
//         {nome: "Carne", preco:15},
//         {nome: "Redbull", preco: 6},
//         {nome: "Nescau", preco: 4}
//     ]

//     res.render("index",{
//         nome: nome,
//         lang: lang,
//         empresa: "Guia do programador",
//         inscritos: 8040,
//         msg: exibirMsg,
//         produtos: produtos
//     });
// });

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro: "+ erro);
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
