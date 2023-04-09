const frestroController=require('../controller/fetch.controller');
module.exports=function(app){
    app.get("/api/restaurant/",frestroController.getallrestro);
}