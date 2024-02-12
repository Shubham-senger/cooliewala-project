const express = require('express');
const mongoose = require('mongoose');
const coolieRoutes = require('./routes/coolies');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1')

.then(()=>{
    console.log('Connected to MongoDB');
})

.catch((err) =>{
    console.error('Error connection to MongoDB:',err);
});


app.use(express.json());

app.use('/coolies',coolieRoutes);
// app.get('/',(req,res,err)=>{
//     res.send("Hello world");
// })

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});