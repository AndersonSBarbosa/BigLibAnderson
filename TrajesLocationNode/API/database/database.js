const Sequelize = require('sequelize');

// const connectionMySql = new Sequelize('apicatalogodb','root','@Aspcce86',{
//     host: 'localhost',
//     dialect: 'mysql'
// });


const connectionMSSqlServer = new Sequelize('TrajesLocation', 'sa', '@Aspcce86', {
    host: 'DESKTOP-3IRH1LT',
    dialect: 'mssql',
    dialectOptions: {
         options: {
              trustedconnection: false,
              encrypt: false,
              trustServerCertificate: false,
              enableArithAbort : false,
          }
    }
});
module.exports = connectionMSSqlServer;
//module.exports = connectionMySql;
