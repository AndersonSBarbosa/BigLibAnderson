const exprees = require("express");
const cors = require("cors");
const app = exprees();
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const connectionSQLServer = require("./database/database");
// const Pergunta = require("./database/Pergunta");
// const Resposta = require("./database/Resposta");
// const Client = require("./database/Client");
// const Color = require("./database/Color");
// const Location = require("./database/Location");
// const LocationItem = require("./database/LocationItem");
// const Product = require("./database/Product");
// const ProductPhotos = require("./database/ProductPhotos");
// const Size = require("./database/Size");
// const Status = require("./database/Status");
const Users = require("./database/Users");


connectionSQLServer
.authenticate()
.then(() => {
    console.log("conecxao com o banco SQL Server executada");
})
.catch((msgErro)=> {
    console.log(msgErro);
});

var DB = {
    games:[
        {Price: 149.99 , id: 1, Title:"FIFA 23"},
        {Price: 149.99 , id: 2, Title:"God Of War"},
        {Price: 149.99 , id: 3, Title:"Resident Evil"},
        {Price: 149.99 , id: 4, Title:"Ghost Recon: Widland"},
        {Price: 149.99 , id: 5, Title:"Ghost Recon: Break Point"},
        {Price: 149.99 , id: 6, Title:"Splinter Cell: Black List"}
    ]
}

app.use(session({
    secret:"fdsjpfjsdfjsdkfljsakljsd",
    cookie:{ maxAge: 30000}
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.get("/Users",(req,res) => {
        Users.findAll(
                {raw: true, order:[['id','DESC']]
            }).then((users => {
        res.statusCode = 200;
        res.json(users);
    }));
});

app.get("/Users/:id",(req,res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{  
            var id = parseInt(req.params.id);
            Users.findOne(
                {where: {id: id}
            }).then(users => {
                if(users != undefined){
                    //res.statusCode = 200;
                    res.json(users);
                }else{
                    res.sendStatus(404);
                }
            });
    }

});

app.post("/Users",(req, res) => {

    var {Login,FullName, Email, CPFCNPJ,Password,PhoneMobile,LevelId,StatusId} = req.body;

    Users.create({
        Login:          Login,
        FullName:       FullName,
        Email:          Email,
        CPFCNPJ:        CPFCNPJ,
        Password:       Password,
        PhoneMobile:    PhoneMobile,
        LevelId:        LevelId,
        StatusId:       StatusId
    });
    res.sendStatus(200);

});

app.put("/Users/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        Users.findOne(
            {where: {id: id}
        }).then(users => {
            if(users != undefined){

                var UserUp = req.body;
                
                    if(Login != undefined){
                        users.Login = UserUp.Login;
                    }
                    
  
                    if(FullName != undefined){
                        users.FullName = UserUp.FullName;
                    }
                    
                    
                    if(Email != undefined){
                        users.Email = UserUp.Email;
                    }
                    

                    if(CPFCNPJ != undefined){
                        users.CPFCNPJ = UserUp.CPFCNPJ;
                    }
                    

                    if(Password != undefined){
                        users.Password = UserUp.Password;
                    }
                    

                    if(PhoneMobile != undefined){
                        users.PhoneMobile = UserUp.PhoneMobile;
                    }
                    

                    if(LevelId != undefined){
                        users.LevelId = UserUp.LevelId;
                    }
                    

                    if(StatusId != undefined){
                        users.StatusId = UserUp.StatusId;
                    }

                    Users.Update({
                        users
                    }),
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        });

    }


});

app.post("/auth",(req,res) => {

    var login = req.body.Login;
    var password = req.body.Password;


    if(req.body.Login != undefined){

        Users.findOne({where:{Login: login}}).then(user => {
            if(user != undefined){

                if(user.Password == password){
                    res.status(200);
                    res.json({erro:"TOKEN FALSO"});
                }else{
                    res.status(401);
                    res.json({erro:"Credenciais Invalidas"});
                }

                // var correct = true;
                // if(correct){
                //     req.session.user ={
                //         id: user.id,
                //         email: user.Email,
                //         FullName: user.FullName,
                //         CPFCNPJ: user.CPFCNPJ
                //     }
                //     res.json(req.session.user);
    
                // }else{
                //     res.status(400)
                // }
            }
        });

    }else{
        res.status(400);
        res.json({erro:"Login Invalido"});
    }

});






app.get("/games",(req,res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games/:id",(req,res) => {

    if(isNaN(req.params.id)){
        res.send("Isso não é um número");
        res.statusCode = 400;
    }else{
        var id = parseInt(req.params.id);
        var game =  DB.games.find(g => g.id == id);
            if(game != undefined){
                res.statusCode = 200;
                res.json(game);
            }else{
                res.statusCode = 404;
            }
    }
});

app.post("/game",(req, res) => { 
    var {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/game/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});



app.listen(4000,function(erro){
    if(erro){
        console.log(`Ocorreu um erro: ${erro}`);
    }else{
        console.log("API RODANDO!");
    }
})
