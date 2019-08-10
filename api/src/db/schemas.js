import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const huntSchema = new Schema({
    huntId: Number,
    route: Array,
    teams: Array 
});

export {
    huntSchema
}