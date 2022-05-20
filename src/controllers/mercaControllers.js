import { Router } from 'express';

const router = Router();

router.get('crear-orden',crearorden)

export default router;

const crearorden = async (req,res) => {

    res.send('HOLA');
};

const checkout = async (req, res) => {

    res.send('CHECKOUT');

}; 