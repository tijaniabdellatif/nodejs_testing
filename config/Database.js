import dotenv from 'dotenv';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;

const BD_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@atlascluster.h0nxtkp.mongodb.net/?retryWrites=true&w=majority`;