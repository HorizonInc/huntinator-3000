import mongoose from 'mongoose';

const db_srv_url = 'mongodb+srv://huntinator_server:' + process.env.SRV_PASS + '@huntinator-crnnx.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(db_srv_url, { useNewUrlParser: true }).then(
    () => { console.log('Connected to the Huntinator Mongodb database'); },
    err => { console.log('There was an error connecting to the Huntinator Mongodb database: ', err); }
);

export {
    mongoose
}