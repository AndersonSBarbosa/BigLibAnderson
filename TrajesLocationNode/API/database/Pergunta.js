const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Pergunta = connectionMSSqlServer.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull:false
    }
});

Pergunta.sync({force: false}).then(()=>{
    console.log("Tabela Perguntas -> Criada")
});

module.exports = Pergunta;