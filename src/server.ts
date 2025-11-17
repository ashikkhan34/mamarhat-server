import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 4000;


async function main(){
    try{
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(err){
        console.log("Database connection failed",err);
    }
}
main();