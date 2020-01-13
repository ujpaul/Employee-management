import employee from '../model/data';
import empvalidation from '../helper/EmpValidation';
const update =(req, res)=>{
    const {error} =empvalidation.validation(req.body);
        if(error)
        {
            return res.status(400).json({
                status:400,
                error: error.details[0].message
                
            });
        }
    const emp = employee.find((em) => em.id === parseInt(req.params.id));
    if(!emp)
    {
        res.status(404).json({
            status:404,
            error:"employee you are looking for not found"
        })
    }
    emp.emp_name = req.body.emp_name;
    emp.national_id = req.body.national_id;
    emp.phone_number = req.body.phone_number;
    emp.email = req.body.email;
    emp.DOB = req.body.DOB;
    emp.status = req.body.status;
    emp.position = req.body.position;
    res.status(201).json({
        status:201,
        message:"Employee Updated successfully",
        data:{
            emp_name:emp.emp_name,
            national_id:emp.national_id,
            phone_number:emp.phone_number,
            email:emp.email,
            DOB:emp.DOB,
            status:emp.status,
            position:emp.position
        }
    })
}
export default update;
