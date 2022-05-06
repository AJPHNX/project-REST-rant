const router = require('expresss').Router()
//----------------
router.get('/',(req,res)=>{
    res.send('GET /places')
})

module.exports = router