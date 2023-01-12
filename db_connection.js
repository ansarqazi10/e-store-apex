const mongoose = require('mongoose');
const DB_CONNECTION = process.env.DB_CONNECTION_STRING_X;

mongoose.set('strictQuery', false);
mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(db => console.log('Connection string attached'))
.catch(err => console.log(`Error: ${err}`));