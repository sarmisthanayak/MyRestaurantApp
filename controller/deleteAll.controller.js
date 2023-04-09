const deArestro = require('../models/restuarant.models');

exports.deleteAllRestaurants = async (req, res) => {
    try {
        const deletedRestaurants = await deArestro.deleteMany();
        const deletedCount = deletedRestaurants.deletedCount;
        if (deletedCount === 0) {
            res.status(200).send({ message: "No restaurants deleted." });
        } else {
            res.status(200).send({ 
                restaurants: {
                    acknowledged: true,
                    deletedCount: deletedCount
                }, 
                message: "Restaurants deleted successfully." 
            });
        }
    } catch (err) {
        res.status(500).send({ message: "Some error occurred while deleting the Restaurants." });
    }
}




