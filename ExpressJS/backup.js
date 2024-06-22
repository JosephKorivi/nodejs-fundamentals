const express = require("express");
const mongodb = require("mongodb");

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

const connectionUrl = "mongodb://localhost"; // Use IPv4 address

const client = new mongodb.MongoClient(connectionUrl);

client
    .connect()
    .then(() => {
        console.log("Database Connection successful");

        const db = client.db("schoolDb");
        const student = db.collection("student");

        //  CRUD operations...

        //  Add Student
        // app.post("/student", (req, res, next) => {
        //     // const { name, email, age, dept } = req.body;
        //     student.insertMany(req.body).then(() => res.status(201).send("Students added Successfully")).catch((error) => send.status(500).send(error.message)) // Pass the error to the error middleware
        // });

        //  get Student

        // app.get("/student", (req, res, next) => {
        //     const { email } = req.query;

            // student
            // .findOne({email: email})
            // .then((data) => res.status(200).json(data))
            // .catch((error) => res.status(500).send(error.message))

            //  findMany  === syntax is find()
            
        //     const { age } = req.query;
        //     student
        //     .find({age: parseInt(age)})
        //     .toArray()
        //     .then((data) => res.status(200).json(data))
        //     .catch((error) => res.status(500).send(error.message))
        // })

        //  update student

        // app.put("/student", (req, res, next) => {
        //     const { email } = req.query;
        //     const { dept } = req.body;
        //     student
        //     .findOneAndUpdate({email}, {$set: {dept: dept}})
        //     .then((data) => res
        //     .status(201).json({message: "Student updated successfully"}))
        //     .catch((error) => res.status(500).json({message: error.message}));
        // });

        //  updateMany..

        // app.put("/student", (req, res, next) => {
        //     const { age } = req.query;
        //     const { dept } = req.body;
        //     student
        //         .updateMany(
        //             {age: parseInt(age)}, { $set: {dept : dept}}
        //         )
        //         .then((data) => {
        //         console.log(data);
        //         res.status(200).json({
        //             message: "Student updated successfully"
        //         });
        //         })
        //         .catch((error) => res.status(500).json({ message: error.message }));
        // });

        //  deleteOne..

        // app.delete("/student", (req, res, next) => {
        //     const { email } = req.query;

        //     student
        //     .findOneAndDelete({email: email})
        //     .then(() => res.status(200).json({message: "deleted Successfully"}))
        //     .catch((error) => res.status(500).json({message: error.message}))
        // })

        //  deleteMany

        // app.delete("/student", (req, res, next) => {
        //     const { dept } = req.query;

        //     student
        //     .deleteMany({ dept })
        //     .then(() => res.status(200).json({message: "deleted Successfully"}))
        //     .catch((error) => res.status(500).json({message: error.message}))
        // })

        // Error middleware should be added after all route handlers
        const errorMiddleware = (error, req, res, next) => {
            res.status(500).send(error.message);
        };
        
        app.use(errorMiddleware);

        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        });
    })
    .catch((error) => console.log(error));
