import dotenv from 'dotenv';
import app from './app';
import db from './database/connection';
dotenv.config()
const port = process.env.PORT || 3000;
app.get('/hey', async (req, res) => {
    const resl = await db.query('CREATE TABLE connected (id varchar(4), name varchar(3))  ')
    console.log(resl)
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}...`);
})
