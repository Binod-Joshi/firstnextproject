import mongoose from "mongoose";

const connection = {}; // check for exiting connection in below if condition

export const connectToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("using existing connection.");
            return;
        }
       const db = await mongoose.connect(process.env.MONGODB_URL);
       connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}