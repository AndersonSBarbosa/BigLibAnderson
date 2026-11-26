const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Users = connectionMSSqlServer.define('Users',{
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
    LevelId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    StatusId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
});

Users.sync({force: false}).then(()=>{
    console.log("Tabela Users -> Criada")
});

module.exports = Users;


