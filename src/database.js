
const mongoose = require('mongoose');

//const URI = "mongodb://127.0.0.1/Reg_Hotelero";
const URI="mongodb+srv://javier4589:wCyVaqdhSpeQkOBU@cluster0.blwueh7.mongodb.net/?retryWrites=true&w=majority";
//uusuari:javier4589
//clave:wCyVaqdhSpeQkOBU

//mongoose.set('useFindAndModify',false)
mongoose
  .connect(URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useFindAndModify: false,
//useCreateIndex:true,
useNewUrlParser:true
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.error(err));
//conexion a la base de datos3
/*
mongoose.connection.openUri('mongodb://localhost:27017/Reg_Hotelero', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});*/

module.exports = mongoose;




