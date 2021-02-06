const express = require('express')

const app = express();


app.use(express.json())


app.get("/user", (req,res,next) => {
    console.log(req.body);
    res.send({
        name:"Jeremy"
    })
})

app.listen(3200, () => {
    console.log("listening on port 3200")
})