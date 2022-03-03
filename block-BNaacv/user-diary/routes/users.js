var express=require('express');
var router=express.Router();




router.get('/new',(req,res)=>{

    res.render('userForm');
})
router.post('/',(req,res)=>{
    res.send(req.body);
})

router.get('/:id',(req,res)=>{
    res.render('singleUser',{user:{name:'swathi'}});
})


router.get('/',(req,res)=>{
    res.render('users');
})


router.delete('/:id',(req,res)=>{
    res.render('singleUser',{user:{name:'swathi'}});
})
router.get('/:id/edit',(req,res)=>{
    res.render('singleUser',{user:{name:'swathi'}});
})

router.put('/:id',(req,res)=>{
    res.render('singleUser',{user:{name:'swathi'}});
})


module.exports=router;