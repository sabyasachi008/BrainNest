import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { UserModel } from './db.js'
const PORT : number = 4001;
const app = express();


app.post("api/v1/signup", (req, res)=> {
//zod validation && hash the password
    const username = req.body.username;
    const password = req.body.username;


    UserModel.create({
        username: username,
        password: password
    });
    
});

app.post("api/v1/signin", (req, res)=> {

});

app.post("/api/v1/content", (req, res)=> {

})

app.get("/api/v1/content", (req, res)=> {

});

//single content
app.get("/api/v1/content/:id", (req, res)=> {

});

//delete all content
app.delete("/api/v1/content", (req, res)=> {

});

//delete single content
app.delete("/api/v1/content/:id", (req, res)=> {

});


app.post("/api/v1/brain/share", (req, res)=> {

});


app.get("/api/v1/brain/:shareLink", (req, res)=> {

});


app.listen(PORT, ()=> {
    console.log(`Sever is running in http://localhost:${PORT}`);
})


