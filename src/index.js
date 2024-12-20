// require('dotenv').config({path: '/'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(` Server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO DB not connected",err);
});





/*
import express from "express";

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            `App is listening on port ${process.env.PORT}`
        })
    } catch (error) {
        console.log("ERROR:, error");
        throw err
        
    }
})()
    */