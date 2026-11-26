const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Location = connectionMSSqlServer.define('Location',{
    ClientId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UsersId:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    Discount:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    Total:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    DateWithDrawn:{
        type: Sequelize.DATE,
        allowNull:false
    },
    DateDelivery:{
        type: Sequelize.DATE,
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

Location.sync({force: false}).then(()=>{
    console.log("Tabela Location -> Criada")
});

module.exports = Location;