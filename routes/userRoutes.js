import { Router } from "express";
const route = Router();

/**
 * 
 * API = Application protocol interface 
 * http://localhost:3001/api/users/get
 * 
 * POST GET, PUT, PATCH,DELETE, CONNECT,OPTIONS
 */

route.get('/users/get',(req,res) => {


    res.status(200).json({

          data:"success"
    })

});

route.post('/users/adduser',(req,res) => {


});
export default route;