const ChirpModel = require('../models/chirp.models');

module.exports = {
    findAll: (req, res) => {
        ChirpModel.find()
            .then((allChirps) => res.json(allChirps))
            .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    findByUser: (req, res) => {
        ChirpModel.find({creator: req.params.id})
            .sort('dateTime')
            .then((allChirps) => res.json(allChirps))
            .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    findOne: (req, res) => {
        ChirpModel.findById(req.params.id)
            .then((Chirp) => res.json(Chirp))
            .catch((err) => res.json({message: "An error has happened in find one.", error: err}));
    },
    create: (req, res) => {
        console.log(req.body);
        ChirpModel.create(req.body)
            .then((newChirp) => {console.log('created'); res.json(newChirp)})
            .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    delete: (req, res) => {
        console.log(req.params.Chirp_id);
        ChirpModel.findByIdAndDelete(req.params.Chirp_id)
            .then((successMsg) => res.json(successMsg))
            .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    incLikes: (req, res) => {
        ChirpModel.findByIdAndUpdate(req.params.id, {$inc: {'numOfLikes' : 1}}, {
            new: true,
            runValidators: true,
        })
            .then((updateLikes) => res.json(updateLikes))
            .catch((err) => res.json({message: "An error has happened in update.", error: err}));
    }
}