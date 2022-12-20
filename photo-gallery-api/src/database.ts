const mongoose = require('mongoose')


const MONGODB_URI = 'mongodb://0.0.0.0/domi';

mongoose.connect(MONGODB_URI, {

        useUnifiedTopology: true,
        useNewUrlParser: true

})
.then((db: any) => console.log('conectado a BD'))
.catch((err: any) => console.log(err));