const express = require('express');
const router = express.Router();
const Product = require('../models/product')
router.get('/contacts',async (req,res)=>{
    const products =await Product.find({});
    res.render('index',{products});
})

router.get('/contact/new',(req,res)=>{
    res.render('new');
})
router.post('/contact',async (req,res)=>{
    const {contactname ,phoneno ,email,imageurl} = req.body;
    await Product.create({contactname ,phoneno ,email,imageurl});
    res.redirect('/contacts');
})

router.get('/contact/:id',async(req,res)=>{
    const {id}=req.params;
    const product = await Product.findById(id);
    res.render('show',{product});
})

router.get('/contact/:id/edit',async (req,res)=>{
    const {id }= req.params;
    const {contactname ,phoneno ,email,imageurl} = req.body;
    const product = await Product.findById(id);
    res.render('edit',{product});
})
router.patch('/contact/:id/edit',async(req,res)=>{
    const {id}= req.params;
    const {contactname ,phoneno ,email,imageurl} = req.body;
    await Product.findByIdAndUpdate(id,{contactname ,phoneno ,email,imageurl});
    res.redirect('/contacts');
})
 
router.delete('/contact/:id/delete',async (req,res)=>{
    const {id}= req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/contacts');
})



module.exports= router;