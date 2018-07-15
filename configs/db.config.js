const mongoose = require('mongoose');

const DB_NAME = 'lab-passport-roles';
const MONGODB_URI =`mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.info(`Nos hemos conectado!!: ${MONGODB_URI}`);
    })
    .catch((error) => {
        console.error('Ha fallado algo en la conexión: ', error);
    });