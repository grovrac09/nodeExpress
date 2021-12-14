const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Successfully added user.", newUser});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Unsuccessful, please try again."});
    }
};

exports.listUser = async (req, res) => {
    try {
        res.status(200).send(await User.find({}));
    } catch (error) {
        console.log(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        updateFunc = await User.findByIdAndUpdate(req.body._id, req.body);
        const updatedUser = await User.findById(req.body._id);
        res.status(200).send({message: "Successfully updated user.", updatedUser});
    } catch (error) {
        console.log(error)
    } 
};

// exports.deleteMusic = async () => {
//     try {
//         await User.deleteOne({});
//         console.log(`Successfully deleted user.`);
//     } catch (error) {
//         console.log(error);
//     }
// };