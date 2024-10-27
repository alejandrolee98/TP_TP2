import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/",(req,res)=>{
    res.status().send("get all users");
});

userRoutes.get("/:id",(req,res)=>{
    res.status().send("get all users");
});

userRoutes.post("/",(req,res)=>{
    res.status().send("get all users");
});

userRoutes.put("/:id",(req,res)=>{
    res.status().send("get all users");
});

userRoutes.delete("/:id",(req,res)=>{
    res.status().send("get all users");
});

export default userRoutes;