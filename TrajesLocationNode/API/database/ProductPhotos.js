const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const ProductPhotos = connectionMSSqlServer.define('ProductPhotos',{
    ProductId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Photo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Main:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

ProductPhotos.sync({force: false}).then(()=>{
    console.log("Tabela ProductPhotos -> Criada")
});

module.exports = ProductPhotos;