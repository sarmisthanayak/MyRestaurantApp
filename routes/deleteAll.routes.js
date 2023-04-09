const DeletebyAllController=require('../controller/deleteAll.controller');
module.exports=function(app){
    app.delete("/api/restaurant/",DeletebyAllController.deleteAllRestaurants);
}