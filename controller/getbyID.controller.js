const IDrestro=require('../models/restuarant.models');

exports.getRestaurantsByID = async (req, res) => {
    const id = req.params.id;
    try {
        const restaurants = await IDrestro.findById(id);
        if(!restaurants) {
            res.status(404).send({message: "No restaurants found for this ID."});
        } else {
            res.status(200).send(restaurants);
            res.send({message:`Restaurants with ID ${id} fetched successfully.`})
        }
    } catch (err) {
        res.status(404).send({ message: "No Restaurant found with the given ID" });
    }
}