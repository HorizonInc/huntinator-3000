import express from 'express';
import googleMapsClient from '@google/maps';
import mongoose from './db/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

import riddle from './test-routes/riddle.js';
import gameGeneration from './routes/generateNewGame.js';
import joinGame from './routes/joinGame.js';
import nextQuestion from './routes/getNextQuestion.js';

dotenv.config();

const app = express();

app.use(express.static('../web/build'));
app.use(cors());

googleMapsClient.createClient({
    key: process.env.G_MAPS_API_KEY
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is listening on port: ${PORT} (http://localhost:${PORT}/)`) });

app.use('/riddle', riddle);
app.use(gameGeneration);
app.use(joinGame);
app.use(nextQuestion);

export {
    googleMapsClient
};