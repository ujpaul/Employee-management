import express from 'express';
import router from './routes/route';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
export default app;