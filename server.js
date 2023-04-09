const express=require('express');
const app=express();
const serverconfig=require('./config/server.config');
const dbconfig=require('./config/db.config');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(dbconfig.DB_URL);
const db=mongoose.connection;

db.once("open",()=>{
    console.log("Successfully connected to mongodb");
});

db.on('error',()=>{
    console.log("Error connecting to Mongodb");
    process.exit();
});

require("./routes/addrestro.routes")(app);
require("./routes/fetchrestro.routes")(app);
require("./routes/getCategory.routes")(app);
require("./routes/fetchbyCategory.routes")(app);
require("./routes/getID.routes")(app);
require("./routes/getbyrating.routes")(app);
require("./routes/update.routes")(app);
require("./routes/deletebyid.routes")(app);
require("./routes/deleteAll.routes")(app);


app.get('/testroute',(req,res)=>{
    res.send('Server up and running');
})
app.listen(serverconfig.PORT,()=>{
    console.log('Server is up and running on port');
})