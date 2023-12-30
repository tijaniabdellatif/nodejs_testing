import { Router } from "express";
import { getUsers,addUser } from "../controllers/userController.js";
const route = Router();

/**
 * 
 * API = Application protocol interface 
 * http://localhost:3001/api/users/get
 * 
 * POST GET, PUT, PATCH,DELETE, CONNECT,OPTIONS
 */

route.get('/users/get',getUsers);

route.post('/users/adduser',addUser);
export default route;