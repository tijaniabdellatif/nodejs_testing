import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

export const app = express();
app.use(express.json());
app.use(cors({

     origin:['http://localhost:3001'],
     credentials:true
}))

/**
 * localhost:3001/api/endpoints
 */
app.use('/api',userRoutes);