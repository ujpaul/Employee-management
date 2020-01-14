import jwt from 'jsonwebtoken';
const authorization =(req ,res,next)=>{
const token = req.header("x-auth-header");
if(!token){
    return res.status(401).json({
        status:401,
        error:"You are not auhorized,No token provided"
    })
}
try{
    const decoded =jwt.verify(token,process.env.JWT_KEY);
    req.user = decoded;
    next();
}catch (ex){
     res.status(400).json({
        status:400,
        error:"Invalid token,please provide correct token"
    })
}
}
export default authorization;