const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectionUrl = "mongodb://localhost/schoolDb";

mongoose.connect(connectionUrl)
.then(() => console.log("database connection Successfull"))
.catch((error) => console.log(error));

const studentSchema = mongoose.Schema({
    name: String, 
    email: String, 
    age: Number, 
    dept: String
});

const Student = mongoose.model("student", studentSchema);

//  add student

// app.post("/student/single", async(req, res, next) => {
//     try {
//         const {name, email, age, dept} = req.body;

//         const newStudent = new Student({ name: name, email: email, age: age, dept: dept });
//         await newStudent.save()

//         res.status(200).json({message: "Student added Successfully"});
//         } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post("/student/multiple", (req, res, next) => {

// })

//  update one student 

// app.put("/student/single", async(req, res, next) => {
//     try {
//         const { email } = req.query;
//         const { dept } = req.body;
//         await Student.findOneAndUpdate({email}, {dept})

//         res.status(200).json({message: "Student updated Successfully"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

//  update Many students

// app.put("/student/multiple", async(req, res, next) => {
//     try {
//         const {dept} = req.query;
//         const {age} = req.body;
//         await Student.updateMany({dept}, {age})

//         res.status(200).json({message: "Students updated Successfull"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })


//  get one student

// app.get("/student/single", async(req, res, next) => {
//     const {email} = req.query;
//     try {
//         const student = await Student.findOne({email});

//         res.status(200).json({data: student});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })


//  get Multiple students

// app.get("/student/multiple", async(req, res, next) => {
//     try {
//         const {age} = req.query;
//         const students = await Student.find({ age });
//         res.status(200).json({data: students});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })


// delete Single Student document

// app.delete("/student/single", async(req, res, next) => {
//     try {
//         const {dept} = req.query;
//         const student = await Student.deleteOne({dept});
//         res.status(200).json({message: "Deleted Successfully"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })


//  delete Multiple Student documents

// app.delete("/student/multiple", async(req, res, next) => {
//     try {
//         const {age} = req.query;
//         await Student.deleteMany({age});
//         res.status(200).json({message: "Students Deleted Successfull"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

const errorMiddleware = (error, req, res, next) => {
    res.status(500).send(error.message);
};

app.use(errorMiddleware);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});