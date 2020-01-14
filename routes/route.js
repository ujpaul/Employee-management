import express from 'express'; 

import createEmployee from '../controller/createEmployee';

import managerSignup from '../controller/signup';

import managerSignin from '../controller/signin';

import auth from '../middleware/auth';

import updateEmployee from '../controller/update';

import deleteEmp from '../controller/deleteEmployee'

import search from '../controller/search';

import suspend from '../controller/suspend';

import activate from '../controller/activate';

const router = express.Router();

router.post('/employees',auth,createEmployee);

router.post('/manager/signup',managerSignup);

router.post('/manager/signin',managerSignin);

router.put('/employees/:id',auth,updateEmployee);

router.delete('/employees/:id',auth,deleteEmp);

router.put('/employees/suspend/:id',auth,suspend);

router.put('/employees/activate/:id',auth,activate);

router.post('/employees/search',auth,search);

export default router;