
import { connectToDatabase,disconnectFromDatabase } from "../config/Database.js"
export const getUsers = async (req,res) => {


     
        await connectToDatabase();




        await disconnectFromDatabase();

        res.status(200).json({
    
              data:"success"
        })
    
}

export const addUser = async (req,res) => {

      res.status(20).json({

        data:"success"
      })
}