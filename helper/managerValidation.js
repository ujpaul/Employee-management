import Joi from 'joi';

const register = {
validation(user){
const userValidation = {
            employeeName :Joi.string().required(),
            nationalID:Joi.string().min(16).max(16).required(),
            phoneNumber:Joi.string().min(11).max(11).required(),
            email:Joi.string().email().required().trim(),
            dateOfBirth:Joi.date().required(),
            status:Joi.string().required(),
            password:Joi.string().min(8).max(64).required().trim(),
    
}
  return Joi.validate(user,userValidation)
},
}

export default register;