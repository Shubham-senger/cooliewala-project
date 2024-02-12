const express = require('express');
const Coolie = require('../models/coolie');

const router = express.Router();

router.get('/', async(req,res,next) =>{
    try{
        const coolies = await Coolie.find();
        res.json(coolies);
    
    } catch(err){
        next(err);
    }
});


router.get('/:id', async(req,res,next) =>{
    try{
        const coolie = await Coolie.findById(req.params.id);
        if(!coolie){
            return res.status(404).json({message:'Coolie not found'});
        }
        res.json(coolie);
    } catch(err){
        next(err);
    }
});


module.exports = router;