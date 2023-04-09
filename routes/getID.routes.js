const getbyIDController=require('../controller/getbyID.controller');
module.exports=function(app){
    app.get("/api/restaurant/:id",getbyIDController.getRestaurantsByID);
}