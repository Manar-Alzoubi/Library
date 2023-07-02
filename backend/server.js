const express =require('express');
const app = express();
const cors= require('cors');
const mongoose = require('mongoose');
const signUp = require("./routes/signUp");
const signIn = require("./routes/signin");

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://manar11:0000000000@cluster0.wkmd6hb.mongodb.net/booksLib",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true 
}).then(con =>{
    console.log("DB connected successfuly");
})


app.use('/', require('./routes/bookRoute'));
app.use('/update/id', require('./routes/bookRoute'));
// app.use('/', require('./routes/bookRoute'));
app.use('/api/signup' ,signUp);
app.use('/api/signin' ,signIn)

app.listen(3001 ,function(){
    console.log('express server is running on port 3001');
})