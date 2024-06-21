const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
    console.log("MiddleWare 1");
    next();
};

const middleware2 = (req, res, next) => {
    console.log("MiddleWare 2");
    next();
};

const middleware3 = (req, res, next) => {
    console.log("MiddleWare 3");
    next();
};
const middleware4 = (req, res, next) => {
    console.log("MiddleWare 4");
    next();
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);

app.get("/example", (req, res, next) => {
    res.send("Example route");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});