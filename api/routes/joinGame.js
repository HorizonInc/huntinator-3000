import express from 'express';
import { Hunt } from '../db/models.js';

const router = express.Router();

async function findHunt(hunt_id) {
    return new Promise((resolve, reject) => {
        Hunt.findOne({ huntId: hunt_id }, (err, hunt) => {
            if(err) {
                reject({ error_message: err });
            } else if(hunt) {
                resolve(hunt);
            }
        });
    });
}

router.get('/joinGame', async (req, res) => {
    let game_id = req.query.game_id;

    let hunt_object = await findHunt(game_id).then((hunt) => hunt)
        .catch(e => {
            console.log(e);
            hunt_object = e;
        });

    console.log("The hunt object: ", hunt_object)
});

export default router;