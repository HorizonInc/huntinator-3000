const express = requrie('express');

const app = express();

//Route includes
require("./routes/home.js");

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is listening on port: ', port);
});