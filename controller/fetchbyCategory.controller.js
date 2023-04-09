const rfCategory=require('../models/restuarant.models');

exports.getRestaurantsByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const restaurants = await rfCategory.find({ category: category });
        if(restaurants.length === 0) {
            res.status(200).send({message: "No restaurants found for this category."});
        } else {
            res.status(200).send(restaurants);
            res.send({message:`Restaurants with category ${category} fetched successfully.`})
        }
    } catch (err) {
        res.status(500).send({ message: "Some error occurred while fetching Restaurants by Category" });
    }
}