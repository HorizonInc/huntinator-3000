import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://huntinator_server:UYjTXTeo6xyxrGUV@huntinator-crnnx.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, err => {
    if(err) console.log(err);
});

console.log('Connected to the Mongodb database');