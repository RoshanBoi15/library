let express = require('express')
let {query} = require('../repo/database')
let router = express.Router();
router.get('/', async function(req,res){
 let result = await query('select * from books')
  res.send(result)
})
router.post('/addbooks',async function(req,res){

 try{

   let {title,price,image,desc,author} = req.body;

   let result = await query(`insert into books(title,price,image,description,author) values(?,?,?,?,?)`

   ,[title,price,image,desc,author])

   res.send(result);

 }

  catch(err){

    console.log(err)

    res.send(err)

  }

})
module.exports = router;