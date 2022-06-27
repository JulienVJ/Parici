var express = require("express");
var db = require("../database/db");
const { Op } = require("sequelize");
var router = express.Router();
var axios = require("axios");

process.env.SECRET_KEY = 'secret';

router.post("/addCircuit", (req, res) => {
    var circuits = {
        name_circuit: req.body.name_circuit,
        description_circuit: req.body.description_circuit,
        arrondissement: req.body.arrondissement,
        image_circuit : req.body.image_circuit,
    };
    //crée une nouvelle occurence( ajouter une nouvelle ligne)  qui va ajouter circuits
    db.circuit.create(circuits)

    .then(rep => {
            // faire reference a rep then(rep)
            // on veut savoir s'il reussite à créer alors il va nous envoyer une réponse
            res.json({ message: 'ok circuit créer', rep })
        })
        .catch(err => {
            // ne marche pas alors il va afficher error
            res.json({ error: 'error' + err })
        })

});

router.get("/allCircuit", (req, res) => {
    db.circuit
        .findAll({
         
        })
        .then((circuits) => {
            if (circuits) {
                res.status(200).json({
                    circuits: circuits,
                });
            } else {
                res.status(404).json("il n'a pas de circuits");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete("/deleteCircuit/:id_circuit", (req, res) => {
    db.circuit.findOne({
            where: { id_circuit: req.params.id_circuit }
        }).then(circuit => {
            // if salon exist so
            if (circuit) {
                circuit.destroy().then(() => {
                        res.json("circuit supprimer")
                    })
                    .catch(err => {
                        res.json("error" + err)
                    })
            } else {
                res.json({ error: "vous ne pouvez pas supprimer ce circuit, elle n'existe pas dans la base" })
            }
        })
        .catch(err => {
            //send back the message error
            res.json("error" + err);
        })
});

router.put('/updateCircuit/:id_circuit', (req, res) => {
    db.circuit.findOne({
            where: { id_circuit: req.params.id_circuit }
        })
        .then(circuit => {
            if (circuit) {

                circuit.update(req.body)
                    .then(circuititem => {
                        console.log(circuititem);
                        db.circuit.findOne({
                                where: { id_circuit: req.params.id_circuit }
                            })
                            res.status(200).json("update")

                    })
                    .catch(err => {
                        res.status(402).send("impossible de mettre à jour le circuit" + err);
                    })
            } else {
                res.json("circuit n'est pas dans la base de données")
            }
        })
        .catch(err => {
            res.json(err);
        })
})


router.get('/findCircuitBy/:name_circuit', (req, res) => {
    db.circuit.findAll({
            where: {
                name_circuit: {
                    [Op.like]: "%" + req.params.name_circuit + "%",
                }
            }
        })
        .then(circuits => {
            res.status(200).json({ circuits: circuits })
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/getCircuitById/:id_circuit", (req, res) => {
    db.circuit
        .findOne({
            where: { id_circuit: req.params.id_circuit }
        })
        .then((circuits) => {
            res.status(200).json({ circuits: circuits });
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/typeCommerce', (req,res) => {
    // axios
    //const donnee = require('../api');
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=10&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services')
        .then(resp => {
            const type_de_commerce = resp.data.records.map(record => record.fields.type_de_commerce);
            
            res.status(200).json(type_de_commerce);
            
        }).catch(err => {
            res.json({ error: err })
        });
})


router.get('/commerce', (req,res) => {
    // axios
    //const donnee = require('../api');
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=10&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services')
        .then(resp => {
            const commerces = resp.data.records.map(record => record.fields);
            
            res.status(200).json(commerces);
            
        }).catch(err => {
            res.json({ error: err })
        });
})

router.get('/donneeby/:mail', (req,res) => {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=100&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services&refine.mail=' + (req.params.mail))
    .then(resp => {
        const commerces = resp.data.records;
        res.status(200).json(commerces);
        }).catch(err => {
            res.json({ error: err })
        });
})

module.exports = router;