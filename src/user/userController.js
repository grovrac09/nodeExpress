const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Successfully added user.", newUser});
    } catch (error) {
        console.log(error)
    }
};

exports.listUser = async (req, res) => {
    try {
        res.status(200).send(await User.find({}));
    }catch (error) {
        console.log(error)
    }
}

// exports.updateUser = async (req, res) => {
//     try {
//         await User.findByIdAndUpdate(req, res);
//         console.log(`Successfully updated user.`)
//     } catch (error) {
//         console.log(error)
//     } 
// };

// exports.deleteMusic = async () => {
//     try {
//         await User.deleteOne({});
//         console.log(`Successfully deleted user.`);
//     } catch (error) {
//         console.log(error);
//     }
// };