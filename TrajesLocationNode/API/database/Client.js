const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Client = connectionMSSqlServer.define('Client',{
    Login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    FullName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    CPFCNPJ:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Password:{
        type: Sequelize.STRING,
        allowNull:false
    },
    PhoneMobile:{
        type: Sequelize.STRING,
        allowNull:false
    },
    DateBirday:{
        type: Sequelize.DATEONLY,
        allowNull:false
    },
    Generer:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    StatusId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
});

Client.sync({force: false}).then(()=>{
    console.log("Tabela Client -> Criada")
});

module.exports = Client;