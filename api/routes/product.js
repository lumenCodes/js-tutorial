const express = require('express')
const router = express.Router();

router.get('/', (req,res, next) => {
    res.status(200).json({
        message: 'product succesful'
    }) ;
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling post request to  /products'
    })
})

module.exports = router;