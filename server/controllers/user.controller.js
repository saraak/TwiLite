const  User  = require('../models/user.models');
const bcrypt = require("bcrypt");

function generateHash (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = {

    create: (req, res) => {
        let newUser = req.body;
        newUser.password = generateHash(req.body.password)
        User.create(newUser)
            .then((newUser) => res.json(newUser))
            .catch((err) => {console.log(err); res.json(err)});
    },

    find: (req, res) => {
        User.findOne({email: req.body.email})
            .then((user) => {
                if(!user) throw new Error("Invalid")
                if(user.validPassword(req.body.password)) return user;
                else throw new Error("Invalid");
            })
            .then((findUser) => res.json(findUser))
            .catch((err) => res.status(403).json(err));
    }
}