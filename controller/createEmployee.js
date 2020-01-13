import mngrvalidation from '../helper/empValidation';
import Database from '../database/connection';
import { date } from 'joi';
const db = new Database();
const createEmp = async (req, res)=>{
     
        const {error} = mngrvalidation.validation(req.body);
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
        //const created_on = new date();
        const newEmp = [
            req.body.employeeName,
            req.body.nationalID,
            req.body.phoneNumber,
            req.body.email,
            req.body.dateOfBirth,
            req.body.status,
            req.body.position,
        ];
        const queryInsert = "INSERT INTO employees(employeeName,nationalID,phoneNumber,email,dateOfBirth,status,position) VALUES($1,$2,$3,$4,$5,$6,$7) returning *";
    
   const {rows} = await db.query(queryInsert, newEmp);
   if (!rows) return res.status(500).send("Employee not recorded")
   res.status(201).json({
       status:201,
       data:rows[0]
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
export default createEmp;