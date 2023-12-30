import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoAPIError } from "mongodb";
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
const BD_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@atlascluster.h0nxtkp.mongodb.net/?retryWrites=true&w=majority`;
let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo is already connected");
    return;
  }

  try {
    const connection = await mongoose.connect(BD_URI, {
      dbName: "shopify",
    });

    isConnected = true;
  } catch (error) {
    throw new MongoAPIError(error.message);
  }
};

export const disconnectFromDatabase = async () => {
  if (!isConnected) {
    await mongoose.connection.close();
  }

  console.log("Connection closed... wait for the next one");
  return;
};
