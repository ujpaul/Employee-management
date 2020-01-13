import bcrypt, { hashSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Database from '../database/connection';
const db = new Database();
import mngrvalidation from '../helper/managerValidation';
dotenv.config()
const newManager = async(req, res)=>{
    
    const {error} =mngrvalidation.validation(req.body);
    if(error)
    {
        return res.status(400).json({
            status:400,
            error: error.details[0].message
            
        });
    }
    try{

        const existing_email = req.body.email;
    const { rowCount } = await db.query('SELECT email FROM managers WHERE email = $1', [existing_email]);

    if (rowCount) {
      return res.status(409).json({
        status: 409,
        error: ' Your email had already used. use another to proceed ',
      });
    }

    const pswd = bcrypt.hashSync(req.body.password,10);
    const position ='manager';
    const payload ={
        employeeName:req.body.employeeName,
        employeeName:req.body.employeeName,
        nationalID:req.body.nationalID,
    }
    const token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn: '1d'});
       
        const newManager =[
            req.body.employeeName,
            req.body.nationalID,
            req.body.phoneNumber,
            req.body.email,
            req.body.dateOfBirth,
            req.body.status,
            position,
            pswd,
        ];
        const queryInsert = "INSERT INTO managers(employeeName,nationalID,phoneNumber,email,dateOfBirth,status,position,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *";
    
   const {rows} = await db.query(queryInsert, newManager);
   if (!rows) return res.status(500).send("Manager not recorded")
   res.status(201).json({
       status:201,
       data:{
           managerInfor:rows[0],
           token
       }
   })
}
catch (err){
    res.status(500).json({
        status:500,
        error:"Internal server error occured"
    });
    console.log(err);
}
};
export default newManager;