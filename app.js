import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
// Conexion a DB
import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/mevn';
const options = {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}
// with promises
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a mongoDB");
  },
  err => { err }
);
// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port: '+ app.get('puerto'));
});