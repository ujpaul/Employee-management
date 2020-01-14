import Database from '../database/connection';
import empvalidation from '../helper/EmpValidation';
const db = new Database;
const update =async (req, res)=>{
    const {error} =empvalidation.validation(req.body);
        if(error)
        {
            return res.status(400).json({
                status:400,
                error: error.details[0].message
                
            });
        }
        try{
            const empEmail =req.body.email;
    const {rowcount} = await db.query('SELECT * FROM employees WHERE email = $1',[empEmail]);
    if(rowcount)
    {
        res.status(409).json({
            status:409,
            error:"This email has already used,please use another"
        })
    }
    const id=req.params.id;
    const {rows} = await db.query('SELECT id FROM employees');
    const empId = rows.find(emp=>emp.id === parseInt(id,10));
    if(!empId)
    {
        res.status(404).json({
            status:404,
            error:"Employee you are looking for not found"
    })
}
   if(empId){
    const editEmp = [
        req.body.employeeName,
        req.body.nationalID,
        req.body.phoneNumber,
        req.body.email,
        req.body.dateOfBirth,
        req.body.status,
        req.body.position,
      ];
 
    const updateQuery = 'UPDATE employees SET employeeName=$1,nationalID=$2,phoneNumber=$3,email=$4,dateOfBirth=$5,status=$6,position=$7 returning *';
    const {rows} = await db.query(updateQuery,editEmp);
    if(rows){
        return res.status(200).json({
            status:200,
            message:"Employee Updated successfully",
            Employee:rows[0],
        });
    }
}
  
}
        catch (err)
        {
            return err;
        }
    }
    
export default update;
