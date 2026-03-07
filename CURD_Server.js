const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Mongo_CURD");

const app = express();
app.use(express.json());

// connect database
connectDB();

// schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);


// CREATE
app.post("/students", async (req,res)=>{
    const student = await Student.create(req.body);
    res.json(student);
});

// READ
app.get("/students", async (req,res)=>{
    const students = await Student.find();
    res.json(students);
});

// UPDATE
app.put("/students/:id", async (req,res)=>{
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(student);
});

// -- DELETE
app.delete("/students/:id", async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({message:"Student Deleted"});
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});