const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project')
    .then(()=>{console.log('Database Connected')})
    .catch((err) => console.log(err));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.send('Hello');
})

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

// Product Routes
const productRoutes = require('./routes/product');

app.use(productRoutes);
app.listen(8080,()=>{
    console.log('Server Connected at 8080');
})