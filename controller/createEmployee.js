import emp from '../model/data';
import mngrvalidation from '../helper/EmpValidation';
const createEmp = (req, res)=>{
    try{
        const {error} =mngrvalidation.validation(req.body);
        if(error)
        {
            return res.status(400).json({
                status:400,
                error: error.details[0].message
                
            });
        }
        const id = emp.length +1;
    const newEmp = {
        id:id,
        emp_name :req.body.emp_name,
        national_id:req.body.national_id,
        phone_number:req.body.phone_number,
        email:req.body.email,
        DOB:req.body.DOB,
        status:req.body.status,
        postion:req.body.postion
    }
    emp.push(newEmp);
    const empl = req.body;
    res.status(201).send({
        status:"Employee successfully created",
        data:{
            id,
            emp_name:newEmp.emp_name,
            national_id:newEmp.national_id,
            phone_number:newEmp.phone_number,
            email:newEmp.email,
            DOB:newEmp.DOB,
            status:newEmp.status,
            postion:newEmp.postion
        }

        
    })
}
catch (err){
    return err;
}
}
export default createEmp;