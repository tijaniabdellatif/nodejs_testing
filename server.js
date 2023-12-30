import dotenv from 'dotenv';;
import {app} from './app.js'
dotenv.config();


app.listen(process.env.PORT,() => {

        console.log(`i'm listening on the port ${process.env.PORT}`);
})