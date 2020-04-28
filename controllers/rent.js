
const db = require('../config/database')


exports.addRent = (req, res) => {
    date = new Date();
    let sqlfetch = "SELECT * FROM voiture WHERE `matricule`= ? and `etat`= 'L' ";
    db.query(sqlfetch, req.body.matricule, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            let post = {
                ncin: req.body.ncin,
                matricule: req.body.matricule,
                duree: req.body.duree,
                prix: 80,
                date: date,
            };
            let sql = "INSERT INTO location SET ?";
            db.query(sql, post, (err, result) => {
                if (err) throw err;
                let sqlupdate = "UPDATE `voiture` SET `etat`='O' WHERE `matricule` = ?";
                db.query(sqlupdate, req.body.matricule, (err, result) => {
                    if (err) throw err;

                    let sql2 = "SELECT * FROM client WHERE `ncin`=?";
                    db.query(sql2, req.body.ncin, (err, result) => {
                        if (err) throw err;
                        if (result.length == 0) {
                            let sql3 = "INSERT INTO client SET ?";
                            let post2 = {
                                ncin: req.body.ncin,
                                nom: req.body.nom,
                                prenom: req.body.prenom,
                                npermis: req.body.npermis,
                                adresse: req.body.adresse,
                                num_tel: req.body.num_tel,
                                image: req.file.filename,
                                imagencin: req.body.imagencin,
                            };
                            db.query(sql3, post2, (err, result) => {
                                if (err) throw err;
                                res.status(200).json({ message: 'rent successfully added' });
                            });
                        } else {
                            res.status(200).json({ message: 'rent successfully added' });
                        }
                    });
                });
            });

        } else {
            res.status(409).json({ message: 'Car is not free' });
        }
    });
}

exports.getRents = (req, res) => {
    let sql = "SELECT * FROM location";
    db.query(sql, (err, result) => {
        if (err)
            res.status(500).json({ message: err })
        res.status(200).json({ rents: result })
    })
}

exports.getSpecificRent = (req, res) => {
    let sql = `SELECT * FROM location WHERE ncin=${req.params.ncin} and matricule=${req.params.mat} `
    db.query(sql, (err, result) => {
        if (err)
            res.status(500).json({ message: err })
        res.status(200).json({ rents: result })
    })
}
exports.getUserRents = (req, res) => {
    let sql = `SELECT * FROM location WHERE ncin=${req.params.ncin}`
    db.query(sql, (err, result) => {
        if (err)
            res.status(500).json({ message: err })
        res.status(200).json({ rents: result })
    })
}

exports.getCarRents = (req, res) => {
    let sql = `SELECT * FROM location WHERE matricule=${req.params.mat} `
    db.query(sql, (err, result) => {
        if (err)
            res.status(500).json({ message: err })
        res.status(200).json({ rents: result })
    })
}