var Express = require("express");
var cors = require("cors");
var BodyParser = require("body-parser");




var hostname = "localhost";
var port = 3000;
//Pour récupérer les données passées dans la requête POST comme GET, nous devons ajouter un middleware à notre Node JS API afin qu'elle soit capable d'interpréter le body de la requête. Ce middleware va se placer à entre l'arrivée de la requête et nos routes et exécuter son code, rendant possible l'accès au body.
//middleware
var app = Express();
app.use(cors());
app.use(BodyParser.urlencoded({ extented: false }));
app.use(BodyParser.json());



app.use("/user", require("./router/user"));
app.use("/circuit", require("./router/circuit"));



app.listen(port, hostname, function() {
    console.log(
        "mon server fonctionne sur http://" + hostname + ":" + port + "/n"
    );
});