const Sequelize = require("sequelize");
const connectionMSSqlServer = require("./database");

const Size = connectionMSSqlServer.define('Size',{
    Size:{
        type: Sequelize.STRING,
        allowNull: false
    },
    SizeGroup:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Size.sync({force: false}).then(()=>{
    console.log("Tabela Size -> Criada")
});

module.exports = Size;