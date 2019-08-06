import mongoose from 'mongoose';
import { huntSchema } from 'schemas.js';

const Hunt = mongoose.model('Hunts', huntSchema);

export {
    Hunt
}