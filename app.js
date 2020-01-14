import express from 'express';
import swagger_ui from 'swagger-ui-express';
import router from './routes/route';
import swagger from './swagger.json';

const app = express();
app.use(express.json());
app.use('/swagger',swagger_ui.serve,swagger_ui.setup(swagger));
app.use(express.urlencoded({extended:true}));
app.use(router);
export default app;