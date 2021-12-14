const bcrypt = require("bcrypt");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        req.status(500).send({message: "Unsuccessful, please try again."});
    }
};

exports.checkPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.compare(req.body.password, hash);
        next();
    } catch (error) {
        console.log(error);
        req.status(500).send({message: "Unsuccessful, please try again."});
    }
};