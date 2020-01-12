import empdata from '../model/data';

const deleteEmp =(req ,res)=>{
    const empId = empdata.find((em)=>em.id === parseInt(req.params.id));
    if(!empId)
    {
        res.status(404).json({
            status:404,
            error:"Id you are looking for Not found"
       })
    }
    const index = empdata.indexOf(empId);
    empdata.splice(index,1);
    return res.status(200).json({
        status:200,
        message:"Employee deleted successfully"
    })
}
export default deleteEmp;