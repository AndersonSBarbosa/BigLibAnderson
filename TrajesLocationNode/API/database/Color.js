const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Color = connectionMSSqlServer.define('Color',{
    Color:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Image:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Color.sync({force: false}).then(()=>{
    console.log("Tabela Color -> Criada")
});

module.exports = Color;