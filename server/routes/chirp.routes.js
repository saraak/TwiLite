// console.log("routes.js");
const ChirpController = require('../controllers/chirp.controller');

module.exports = function(app){
    app.get('/api/Chirps', ChirpController.findAll);
    app.get('/api/Chirps/by_creator/:creator', ChirpController.findByUser)
    app.post('/api/Chirps/new', ChirpController.create);
    app.get('/api/Chirps/by_id/:id', ChirpController.findOne);
    app.delete('/api/Chirps/:Chirp_id/delete', ChirpController.delete);
    app.post('/api/Chirps/:Chirp_id/likes', ChirpController.incLikes);
}