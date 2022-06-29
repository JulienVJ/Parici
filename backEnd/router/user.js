var express = require("express");
var db = require("../database/db");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var axios = require("axios");
const { validateToken } = require("../middlewares/AuthMiddlewares");
process.env.SECRET_KEY = 'secret';

router.post("/register", (req, res) => {
    // si l'utilisateur existe on le vérifie avec le pseudo
    db.user.findOne({
            where: { pseudo: req.body.pseudo }
        })
        .then(user => {
            // s'il n'exite pas execute ces lignes
            if (!user) {
                /*la fonction se décalre automatique */
                // on hash le mdp
                /* password = bcrypt.hashSync(req.body.password, 10); */
                const hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                // on crée l'utilisateur avec les infos données pour chanque colonne de la table
               db.user.create (req.body)
            
                // si ça c'est bien passé crée moi un token
                .then(useritem => {
                        let accessToken = jwt.sign(useritem.dataValues,
                            process.env.SECRET_KEY, {
                                expiresIn: 1440
                            });

                        res.json({accessToken: accessToken});

                    })
                    // renvoie moi l'erreur
                    .catch(err => {
                        res.send(err)
                    })
            // s'il existe déja
            } else {
                res.json({error: "user déjà dans la base de donnée"});
            }
        })

        .catch(err => {
            res.json({ error: err })
        })

});

// router.post("/login", (req, res) => {
router.post("/auth", (req, res) =>{
    db.user.findOne({
            where: {
                pseudo: req.body.pseudo
            }
        })
        .then(user => {
            if (user) {
                // tu me compare le mot de passe entre et celui qui est dans ma base de donner
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    //  Nous créons un jeton d'authentification pour l'utilisateur avec le jwt
                    let accessToken = jwt.sign(user.dataValues,
                        process.env.SECRET_KEY, {
                            expiresIn: 1440
                        });

                    res.json({accessToken: accessToken, pseudo: user.pseudo, id_user: user});
                    /* res.json(accessToken); */

                } else {
                    res.send({error: "mot de passe incorrect"})
                }
            } else {
                res.send({error: "Utilisateur n'existe pas ou votre pseudo  est incorrect"})
            }
        })
        .catch(err => {
            console.log(err);
            res.send({error: 'error ', err})
        })

});

router.put('/update/:id_user', (req, res) => {
    db.user.findOne({
            where: { id_user: req.params.id_user }
        })
        .then(user => {
            if (user) {

                password = bcrypt.hashSync(req.body.password, 10);
                req.body.password = password;
                user.update(req.body)
                    .then(useritem => {
                        console.log(useritem);
                        db.user.findOne({
                                where: { id_user: req.params.id_user }
                            })
                            .then(user => {
                                let token = jwt.sign(user.dataValues,
                                    process.env.SECRET_KEY, {
                                        expiresIn: 1440
                                    });
                                res.status(200).json({ token: token })
                            })

                        .catch(err => {
                            res.status(402).send(err + 'bad request')
                        })
                    })
                    .catch(err => {
                        res.status(402).send("impossible de mettre à jour le client" + err);
                    })
            } else {
                res.json("client n'est pas dans la base de données")
            }
        })
        .catch(err => {
            res.json(err);
        })
})

router.get("/profile/:id_user", (req, res) => {
    db.user
        .findOne({
            where: { id_user: req.params.id_user },
        })
        .then((user) => {
            if (user) {
                let accessToken = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440,
                });
                res.status(200).json({ token: accessToken });
            } else {
                res.json("error le client n'est pas dans la base !!");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/basicInfo/:id_user", (req, res) => {
    db.user
    .findOne({
        where: { id_user: req.params.id_user },
    })
    .then((user) => {
        if (user) {
            let accessToken = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440,
            });
            res.status(200).json({ token: accessToken, pseudo: req.body.pseudo });
        } else {
            res.json("error le client n'est pas dans la base !!");
        }
    })
    .catch((err) => {
        res.json(err);
    });
});

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

router.get("/getById/:id", (req, res) => {
    db.commerce
        .findOne({
            where: { id: req.params.id },
        })
        .then((commerces) => {
            res.status(200).json({ commerces: commerces });
        })
        .catch((err) => {
            res.json(err);
        });
});

/* 
if(this.value.row == 5){
    let url = ``;

    fetch(url)
        .then((response) =>
            response.json()
        .then((data) => {
            console.log(data);
            let affichage = '<ul>';
            for (let vile of data) {
                affichage += `<li><strong>${vile.nom}</strong> - ${ville.population} habitants</li>`;
            }
            affichage += '</ul>';
            console.log(affichage);
        })
        )
        .catch((err) => console.log('Erreur : ' + err));
}; */

module.exports = router;