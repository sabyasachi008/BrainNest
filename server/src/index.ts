import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const PORT : number = 4001;
const app = express();


app.listen(PORT, ()=> {
    console.log(`Sever is running in http://localhost:${PORT}`);
})


