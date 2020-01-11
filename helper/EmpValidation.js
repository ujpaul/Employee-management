// const Joi = require('joi');
import Joi from 'joi';
const TovalidEmp = {
    Employee(emp){
        const schema = {
            emp_name:Joi.string().required(),
            national_id:Joi.number().min(16).max(16).required(),
            phone_number:Joi.number().max(11).min(11).required(),
            email:Joi.string().trim().email().required(),
            DOB:Joi.date().required(),
            status:Joi.string().required(),
            position:Joi.string().required(),
        };
        return Joi.validate(emp,schema);
    }
}
// module.exports = TovalidEmp;
export default TovalidEmp;