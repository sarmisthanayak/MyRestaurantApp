const restroController=require('../controller/restro.controller');
module.exports=function(app){
    app.post("/api/restaurant/add",restroController.addrestro);
}

