const express = require ('express');
const morgan =  require('morgan');
const router = express.Router();

const app = express();

app.use(morgan('dev'));

//ROUTES

const crearorden = async (req,res) => {

    res.send('HOLA');
};

app.get('/crear-orden', crearorden);

const checkout = async (req, res) => {

    res.send('CHECKOUT');

}; 

app.get('/check-out', checkout); 



//SERVIDOR

app.listen(3000,()=> {
    
    console.log('SERVIDOR 3000',3000)

});