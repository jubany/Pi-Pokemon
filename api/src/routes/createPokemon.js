const {Router} = require('express');
const createPokemon = require('../services/createPokemon');
const router = Router()


router.post("/", async (req,res)=>{
    try {
        const response = await createPokemon(req.body);
        res.status(201).json({
            status: 'has been created succefully'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router;