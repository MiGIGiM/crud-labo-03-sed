const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Conectado a la base de datos');
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};