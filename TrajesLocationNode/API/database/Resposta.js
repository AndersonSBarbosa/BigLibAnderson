const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Resposta = connectionMSSqlServer.define('resposta',{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

Resposta.sync({force: false}).then(()=>{
    console.log("Tabela Resposta -> Criada")
});

module.exports = Resposta;