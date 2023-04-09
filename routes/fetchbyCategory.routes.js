const fcategoryController=require('../controller/fetchbyCategory.controller');
module.exports=function(app){
    app.get("/api/restaurant/categories/:category",fcategoryController.getRestaurantsByCategory);
}