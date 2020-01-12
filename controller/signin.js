import managers from '../model/manager';
import auth from '../middleware/auth'
const signin = (req, res)=>{
    try{
    const manager =managers.find(m=>m.username ===req.body.email && m.password === req.body.password);
    //const token =req.header("x-auht-header");
    if(!manager)
    {
        res.status(400).json({
            status:400,
            error:"Invalid username or password"
        })
    }
    res.status(200).json({
        status:200,
        message:"Login successfully",

    })
    }catch (err){
        return err;
    }
    console.log(manager);
}
export default signin;