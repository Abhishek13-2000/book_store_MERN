import express from "express"
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"

app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 3000;
const MongoDBURI = process.env.MongoDBURI

// COnnect to mongo DB 
try {
    mongoose.connect(MongoDBURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error" , error);
}

// defining routes 
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})