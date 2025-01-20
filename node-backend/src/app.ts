import express from 'express';
import cors from 'cors';
import streamRoutes from './routes/streamRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/streams', streamRoutes);

export default app;
