const updateController=require('../controller/updateRestrobyid.controller');
module.exports=function(app){
    app.put("/api/restaurant/:id",updateController.updateRestaurantById);
}