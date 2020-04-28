const db = require('../config/database')

exports.getCars = (req, res) => {
    let sql = "SELECT * FROM voiture";
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ cars: result });
    });
}

exports.getCar = (req, res) => {
    let sql = `SELECT * FROM voiture where matricule ='${req.params.mat}'`;
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ car: result });
    });
}

exports.addCar = (req, res) => {
    let sql = "SELECT * FROM voiture where matricule=?";
    db.query(sql, req.body.matricule, (err, result) => {
        if (err) res.status(500).json({ message: err });
        if (result.length == 0) {
            let post = {
                matricule: req.body.matricule,
                marque: req.body.marque,
                couleur: req.body.couleur,
                prix: req.body.prix,
                kilometrage: req.body.kilometrage,
                etat: req.body.etat,
                image: req.file.filename,
            };
            let sql = "INSERT INTO voiture SET ?";
            db.query(sql, post, (err, result) => {
                if (err) res.status(500).json({ message: err });
                res.status(200).json({ message: 'car successfully added' })
            });
        } else {
            res.status(409).json({ message: 'car already exists' });
        }
    });
}

exports.getFreeCars = (req, res) => {
    let sql = "SELECT * FROM voiture where `etat`='L'";
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ freecars: result });
    });
}

exports.getRentedCars = (req, res) => {
    let sql = "SELECT * FROM voiture WHERE `etat`='O'";
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ rentedcars: result })
    });
}

exports.deleteCar = (req, res) => {
    let sql = `DELETE FROM voiture WHERE matricule='${req.params.mat}'`;
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ message: 'car successfully deleted' })
    });
}

exports.freeCar = (req, res) => {
    let sql = `UPDATE voiture SET etat='L' WHERE matricule = '${req.params.mat}'`;
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ message: 'car successully updated' })
    });
}

exports.getCarHistory = (req, res) => {
    let sql = `SELECT C.ncin,C.nom,C.prenom,C.num_tel,C.image,C.imagencin,L.date,L.prix,L.duree
    FROM client C , location L
    WHERE L.ncin = C.ncin
    AND L.matricule='${req.params.mat}'`;
    db.query(sql, (err, result) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ history: result })
    });
}