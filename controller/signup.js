import bcrypt, { hashSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import manager from '../model/manager';
import mngrvalidation from '../helper/managerValidation';
dotenv.config()
const newManager = async(req, res)=>{
    try{
    const {error} =mngrvalidation.validation(req.body);
    if(error)
    {
        return res.status(400).json({
            status:400,
            error: error.details[0].message
            
        });
    }
    const pswd = bcrypt.hashSync(req.body.password,10);
    const id = manager.length +1;
    const position ='manager';
    const payload ={
        emp_name:req.body.emp_name,
            national_id:req.body.national_id,
            phone_number:req.body.phone_number,
        id
    }
    const token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn: '1d'});
       
        const newManager ={
            id,
            emp_name:req.body.emp_name,
            national_id:req.body.national_id,
            phone_number:req.body.phone_number,
            email:req.body.email,
            DOB:req.body.DOB,
            status:req.body.status,
            position:position,
            password:pswd
        }
        manager.push(newManager);
        console.log(newManager);
        res.status(201).json({
            status:201,
            data:{
                id,
                emp_name:newManager.emp_name,
                national_id:newManager.national_id,
                phone_number:newManager.phone_number,
                email:newManager.email,
                DOB:newManager.DOB,
                status:newManager.status,
                position:position,
                password:newManager.password,
                token
            }
        })
       }catch (err)
       {
           return err;
       }
    

}
export default newManager;