import employees from '../model/data';
const suspend =(req, res)=>{
    const emp = employees.find((em) => em.id === parseInt(req.params.id));
    if(!emp)
    {
        res.status(404).json({
            status:404,
            error:"employee you are looking for not found"
        })
    }
    emp.status = "inactive";
    res.status(200).json({
        status:200,
        message:"employee suspended"
    })
}
export default suspend;