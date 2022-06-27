const Sequelize = require("sequelize");

const db = {};

const dbinfo = new Sequelize("paricidb", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 5,
        min: 0,
    },
});

dbinfo
    .authenticate()
    .then(() => {
        console.log("connection sur mon db");
    })
    .catch((err) => {
        console.error("unable to connect to the database:" + err);
    });


db.user = require("../models/User")(dbinfo, Sequelize)
db.categorie = require("../models/Categorie")(dbinfo, Sequelize);
db.subscriber = require("../models/Subscriber")(dbinfo, Sequelize);
db.circuit = require("../models/Circuit")(dbinfo, Sequelize);
db.favori = require("../models/Favori")(dbinfo, Sequelize);


db.circuit.hasMany(db.categorie, { foreignKey: "id_circuit" });
db.circuit.hasMany(db.subscriber, { foreignKey: "id_circuit" });

db.circuit.belongsToMany(db.user, { through: "favori", foreignKey: "id_circuit" });
db.user.belongsToMany(db.circuit, { through: "favori", foreignKey: "id_user" });



db.dbinfo = dbinfo;
db.Sequelize = Sequelize;
//dbinfo.sync({ force: true });

module.exports = db;