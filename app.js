const express = require("express");
const http = require("http");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
var mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

const applRoute = require("./api/routes/applicant/applicant");
const recRoute = require("./api/routes/recruiter/recruiter");


app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

mongoose.connect(
    "mongodb+srv://hatim:hatim@cluster0.f7or37n.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/font", express.static(__dirname + "public/font"));
app.use("/vendor", express.static(__dirname + "public/vendor"));
app.use("/components", express.static(__dirname + "public/components"));
app.use("/uploads", express.static(__dirname + "public/uploads"));

app.use("/applicant", applRoute);
app.use("/recruiter", recRoute);

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Listening on port " + port);
});