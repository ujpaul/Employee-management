// const app = require('./app');
// const router = require('./routes/route');
// app.use(router);
import express from 'express';
const app = express();
app.listen(3000,()=>{
    console.log("App is listening on port 3000...");
})