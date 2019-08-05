import express from 'express';
import googleMapsClient from '@google/maps';
import mongoose from './db/db.js';

import riddle from './routes/riddle.js';

const app = express();

app.use(express.static('../web/build'));

googleMapsClient.createClient({
    key: process.env.G_MAPS_API_KEY
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is listening on port: ${PORT} (http://localhost:${PORT}/)`) });

app.use('/riddle', riddle);

export {
    googleMapsClient
};