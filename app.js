const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

//connection of database
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser : true,
    useUnifiedTopology : true
});


//middleware
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));
app.use(require("./routes/login"));



//server conf
app.listen(port, () => {
    console.log("Server is running at port 3000")
});



