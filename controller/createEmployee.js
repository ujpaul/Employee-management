// const emp =require('../model/data');
import emp from '../model/data';
//const empValidation = require('../helper/EmpValidation');
import tripValidation from '../helper/EmpValidation';
const createEmp = (req, res)=>{
    // const { error } = tripValidation.validation(req.body);
    // if (error) {
    //     return res.status(400).json({
    //         status: 400,
    //         error: error.details[0].message,
    //     });
    // }
    const newEmp = {
        emp_name :req.body.emp_name,
        national_id:req.body.national_id,
        phone_number:req.body.phone_number,
        email:req.body.email,
        DOB:req.body.DOB,
        status:req.body.status,
        postion:req.body.postion
    }
    emp.push(newEmp);
    res.status(201).send({
        status:"successfully created",
        data:{
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
// module.exports = createEmp;
export default createEmp;