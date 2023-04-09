const frestro=require('../models/restuarant.models');

exports.getallrestro= async (req,res)=>{
    try{
        const allrestro=await frestro.find();
        if(allrestro.length === 0) {
            res.status(200).send({message: "No restaurants found."});
        } else {
            res.status(200).send(allrestro);
            res.send({message:"Restaurants fetched successfully."})
        }
    } catch(err) {
        res.status(500).send({message: "Some error occurred while fetching the Restaurants."})
    }
}