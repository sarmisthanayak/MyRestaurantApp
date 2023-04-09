const DeletebyIDController=require('../controller/deletebyid.controller');
module.exports=function(app){
    app.delete("/api/restaurant/:id",DeletebyIDController.deleteRestroById);
}