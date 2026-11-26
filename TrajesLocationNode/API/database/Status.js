const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Status = connectionMSSqlServer.define('Status',{
    StatusName:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Status.sync({force: false}).then(()=>{
    console.log("Tabela Status -> Criada")
});

module.exports = Status;