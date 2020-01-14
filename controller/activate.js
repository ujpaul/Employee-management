import Database from '../database/connection';
const db = new Database;
const activate = async(req, res)=>{
    try{
        const id= req.params.id;
        const {rows}= await db.query('SELECT id FROM employees');
    const empId = rows.find((em) => em.id === parseInt(id,10));
    if(!empId)
    {
        res.status(404).json({
            status:404,
            error:"employee you are looking for not found"
        })
    }
    if(empId)
    {
        const employee = ["active"];
        const update = 'UPDATE employees SET status=$1 returning *';
        const {rows} = await db.query(update,employee,);
        if(rows)
        {
            res.status(200).json({
                status:200,
                message:"employee Activated",
                Employee:rows[0],
            });
        }
    }
   
    
    }
    catch(err)
    {
        res.status(500).json({
            status:500,
            Error:"Internal server error occured"
        })
        console.log(err);
    }
    
   
}
export default activate;