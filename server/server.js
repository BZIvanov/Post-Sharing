require('dotenv').config(); //
require('./db/database')();

const app = require('./app'); //

const port = process.env.PORT || 3100; //
app.listen(port, () => console.log(`Listening on port ${port}...`)); //
