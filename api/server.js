const express = require('express');
const app = express();

app.use(express.static('../web/build'));

//Route includes
require('./routes/riddle.js')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is listening on port: ', port);
});