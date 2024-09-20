import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import { db } from "./util/FirebaseInit.js";
import { collection, getDocs } from "firebase/firestore";

const app = express(); // app is the backend
const port = 8080; // backend port

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
); // connects backend to frontend


app.get("/", async (req, res) => {
    res.send("Hello World")
})



app.get("/eras", async (req, res) => {
    // get a reference to the collection 'eras'
    const collectionRef = collection(db, "eras");
    // get all documents from the collection
    const collectionSnap = await getDocs(collectionRef); 
    const docs = [];
    collectionSnap.forEach((doc) => {
        docs.push(doc.data()); 
});
    // make an array of the eras and return the list
    res.send(docs)
})


app.listen(port, () => {
    console.log("Listening on port", port);
}); 