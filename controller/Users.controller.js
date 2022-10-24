import Users from "../model/Users.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.send(users);
    } catch (err) {
        console.log(err);
    }
}