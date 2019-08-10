import mongoose from 'mongoose';
import { huntSchema } from './schemas.js';

const Hunt = mongoose.model('Hunt', huntSchema, 'Hunt');

export {
    Hunt
}