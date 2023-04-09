const ratingController=require('../controller/getbyrating.controller');
module.exports=function(app){
    app.get("/api/restaurant/rating/:rating",ratingController.getRestaurantsByRating);
}