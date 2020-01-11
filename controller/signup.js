import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import manager from '../model/manager';
const newManager = async(req, res)=>{
    try{
        const payload ={
            email:req.body.email,
            password:req.body.password
        }
        const token = jwt.sign(payload,process.env.JWT_KEY, {expiresIn: '1d'})
    const password = bcrypt.hashSync(req.body.password, 10);
    const credentials = {
        username:req.body.username,
        password:password,
    }
    manager.push(credentials);
    res.status(201).json({
        username:credentials.username,
        password:credentials.password,
        token,
    })
}catch (err){
    return err;
}
}
export default newManager;