const express =require('express');
const app = express();
const cors= require('cors');
const mongoose = require('mongoose');

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://manar11:0000000000@cluster0.wkmd6hb.mongodb.net/booksLib",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con =>{
    console.log("DB connected successfuly");
})


app.use('/', require('./routes/bookRoute'));
app.use('/update/id', require('./routes/bookRoute'));
// app.use('/', require('./routes/bookRoute'));

app.listen(3001 ,function(){
    console.log('express server is running on port 3001');
})