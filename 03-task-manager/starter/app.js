const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res)=>{
    res.send("Task Manager App")
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }
    catch(error){
        console.log(error.message);
    }
}

start();


































// const connectDB = require("./db/connect");
// const express = require("express");
// const app = express();
// const tasks = require("./routes/tasks");
// require("dotenv").config();
// const notFound = require("./middleware/notFoundEnd");
// const errorHandlerMiddleware = require("./middleware/errorHandler");

// // Middleware
// app.use(express.static("./public"))
// app.use(express.json());
// app.use("/api/v1/tasks", tasks);
// app.use(notFound);
// app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 3000;
// const start = async () => {
//   try{
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`Server is listening on port ${port}...`));
//   } catch(error){
//     console.log(error);
//   }
// }

// start();

