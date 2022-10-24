import Router from "../utils/Router.js";
import {getUsers} from "../controller/Users.controller.js";

const userRoutes = Router.get('/', getUsers)

export default userRoutes