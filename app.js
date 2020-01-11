const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/route');
const createEmployee = require('./controller/createEmployee');
const emp = require('./model/data')
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(router);
app.post('/employees', (req, res)=>{
    
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

        }
    })
});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`this app is listening on port ${port}...`);
})
module.exports = app;