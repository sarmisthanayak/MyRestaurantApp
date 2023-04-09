const restro=require('../models/restuarant.models');

exports.addrestro= async (req,res)=>{
    const addobj={
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        imageURL:req.body.imageURL,
        location:req.body.location,
        phone:req.body.phone,
        rating:req.body.rating
    }
    try{
        const restroadd=await restro.create(addobj);

        res.status(200).send(restroadd);
    }catch(err){
        res.status(500).send({
            message:"Internal Server error"
        })
    }
}
