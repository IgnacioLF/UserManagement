import express from 'express';
import userRouter from 'src/routes/user.routes.js';

const expressApp = express();

// midlewares
expressApp.use(express.json());

// routes
expressApp.use('/user', userRouter);

export default expressApp;
