const fs = require('fs');
const raw_JSON = fs.readFileSync(__dirname + '/riddles.json');
const riddles = JSON.parse(raw_JSON).riddles;
const max = 129;


module.exports = (app) => {
    app.get('/randomRiddle', (req, res) => {
        let position = Math.round(Math.random() * max);

        res.status(200).json({
            riddle: riddles[position]
        })
    })
}