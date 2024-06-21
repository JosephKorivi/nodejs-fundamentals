const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
// app.use(cookieParser());
//      app instance methods are  1. get() 2. post() 3. patch() 4. put() 5. delete()

// app.use(express.json());

//  params implementation 

// app.get("/example/:id", (req, res) => {
//     console.log(req.params);
//     console.log(req.query);

//     res.send("User Details");
// });

// app.post("/example", (req, res, next) => {
//     let data = req.body;
//     console.log(data);
//     res.send("This is an example response");
// });

// app.get("/test", (req, res) => {
//     res.send("Test Response");
// });

app.get("/example", (req, res) => {
    // res.redirect("/test");

    // res.render("test.ejs");
    //  Cookie Demo

    // const cookies = req.cookies;
    // console.log(cookies);
    // //  setting cookies from client side to API using res object
    // res.cookie("name", "webDeveloper");
    // res.cookie("age", 21);
    // res.cookie("address", "something to known");

    // clearing cookie from the Client Side 
    // res.clearCookie("address", "something to known");

    //  Request Properties...

    // console.log(req.hostname);
    // console.log(req.ip);        // ::1 === 127.0.0.1
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.body);
    // console.log(req.cookies);
    // console.log(req.query);
    // // console.log(params);
    // console.log(req.secure);

    //  Request methods...

    // console.log(req.accepts());
    // console.log(req.get("Content-Type"));

    //  Response Methods...

    // res.end();
    // res.json({
    //     name: "joe",
    //     email: "joe@mail.com"
    // });

    //  View engine and HTML Response

    //  Response Format

    // res.format({
    //     "text/plain": () => {
    //         res.send("Plain text response");
    //     },
    //     "application/json": () => {
    //         res.json({name:"joe", email: "joe@mail.com"})
    //     },
    //     "text/html": () => {
    //         res.render("pages/home.ejs");
    //     },
    //     default: () => {
    //         res.send("nothing matched");
    //     }
    // });

    //  Http Status Code : 
    res.status(200);

    res.send("Example Route");
}) ;

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
})