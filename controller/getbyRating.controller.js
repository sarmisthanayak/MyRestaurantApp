const ratings=require('../models/restuarant.models');

exports.getRestaurantsByRating = async (req, res) => {
    const rating = req.params.rating;
  
    try {
      const restaurants = await ratings.find({ rating: { $gte: rating } });
  
      if (restaurants.length === 0) {
        res.status(200).send({ message: "No restaurants found with rating greater than or equal to given rating." });
      } else {
        res.status(200).send(restaurants);
        res.send({ message: `Restaurants with rating greater than or equal to ${rating} fetched successfully.` });
      }
    } catch (err) {
      res.status(500).send({ message: "Some error occurred while fetching Restaurants by Rating" });
    }
  };