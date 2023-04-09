const categoryController=require('../controller/category.controller');
module.exports=function(app){
    app.get("/api/restaurant/categories",categoryController.getCategories);
}