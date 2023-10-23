import express from 'express'

const router = express.Router()

router.get('/', async(req, res)=>{
    try{
        res.json({
            status : 200,
            message : "Get Data"
        })
    }catch(error){
        console.log(error)
        return res.status(500).send('server error')
    }
})

export default router