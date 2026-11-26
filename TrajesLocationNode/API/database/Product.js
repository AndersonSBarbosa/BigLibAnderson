const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Product = connectionMSSqlServer.define('Product',{
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    ColorId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    MaximumSizeId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    MinimumizeId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    DailyValue:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    PurchasePrice:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false,

    },
    TypeId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    StatusId:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
});

Product.sync({force: false}).then(()=>{
    console.log("Tabela Product -> Criada")
});

module.exports = Product;