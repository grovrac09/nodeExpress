const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Successfully added user.", newUser});
    } catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."});
    }
};

exports.listUser = async (req, res) => {
    try {
        res.status(200).send(await User.find({}));
    } catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."});
    }
}

exports.updateUser = async (req, res) => {
    try {
        updateFunc = await User.findByIdAndUpdate(req.body._id, req.body);
        const updatedUser = await User.findById(req.body._id);
        res.status(200).send({message: "Successfully updated user.", updatedUser});
    } catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."});
    } 
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.body._id);
        res.status(200).send({message: "Successfully deleted user."});
    } catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."});
    } 
};

