const express = require("express")
const { connection } = require("./config/db")
require("dotenv").config()


const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Home Page")
})


app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log({"msg":"DB is connected successfully..."})

    }catch(e){
        console.log(e);
        console.log({Error:"DB is conntend to failed!!!"});

    }
})