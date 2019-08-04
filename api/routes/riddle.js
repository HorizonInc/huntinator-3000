import fs from 'fs';
import express from 'express';
import { genRoute } from '../lib/utils.js';

const router = express.Router();

router.get('/testGenRoute', (req, res) => {
    console.log("The route array: ", genRoute(20, {}));
})

export default router;
