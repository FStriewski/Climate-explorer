import express from 'express';
import cors from 'cors';
import tempRouter from './temp/router';

const app = express();
app.use(cors());

app.use(tempRouter)

app.listen(4000, () => console.log('Server running on port 4000!'));