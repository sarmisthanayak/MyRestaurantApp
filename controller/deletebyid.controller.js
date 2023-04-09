const derestro = require('../models/restuarant.models');

exports.deleteRestroById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRestro = await derestro.findByIdAndDelete(id);
    if (!deletedRestro) {
      res.status(404).send({ message: 'Restaurant not found' });
    } else {
      res.status(200).send({ message: 'Restaurant deleted successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Internal server error' });
  }
};