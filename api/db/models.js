import mongoose from 'mongoose';
import { huntSchema } from 'schemas.js';

const Hunts = mongoose.model('Hunts', huntSchema);

export {
    Hunts
}