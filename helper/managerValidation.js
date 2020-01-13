import Joi from 'joi';

const register = {
validation(user){
const userValidation = {
            emp_name:Joi.string().required(),
            national_id:Joi.string().min(16).max(16).required(),
            phone_number:Joi.string().min(11).max(11).required(),
            email:Joi.string().email().required().trim(),
            DOB:Joi.date().required(),
            status:Joi.string().required(),
            password:Joi.string().min(8).max(64).required().trim(),
    
}
  return Joi.validate(user,userValidation)
},
}

export default register;