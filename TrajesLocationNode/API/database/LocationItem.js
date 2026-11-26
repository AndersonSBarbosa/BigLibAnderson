const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const LocationItem = connectionMSSqlServer.define('LocationItem',{
    LocationId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ProductId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    StatusId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    Item:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    Value:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    StatusId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    OBS:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

LocationItem.sync({force: false}).then(()=>{
    console.log("Tabela LocationItem -> Criada")
});

module.exports = LocationItem;