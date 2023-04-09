const rCategory=require('../models/restuarant.models');

exports.getCategories = async (req, res) => {
    try {
        const categories = await rCategory.distinct('category');
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send({ message: "Some error occurred while fetching Categories" });
    }
}