const express = require('express')
const mongoose = require('mongoose')
const app = express();

const uri = 'mongodb+srv://ahmetaggoz1388:Yasam1388*@ilkcluster.64jkf9z.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(err){
        console.error(err);
    }
}

connect()

app.listen(8081, ()=>{
    console.log("Server started on port 8081")
})