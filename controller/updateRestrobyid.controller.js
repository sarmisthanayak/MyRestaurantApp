const urestro = require('../models/restuarant.models');

exports.updateRestaurantById = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  
  try {
    const restaurant = await urestro.findByIdAndUpdate(id, updatedData, { new: true });
    
    if (!restaurant) {
      return res.status(404).send({ message: "Restaurant not found with ID " + id });
    }
    
    res.status(200).send({
      message: "Restaurant details updated successfully",
      restaurant: restaurant
    });
  } catch (err) {
    res.status(500).send({ message: "Error updating restaurant details with ID " + id });
  }
}