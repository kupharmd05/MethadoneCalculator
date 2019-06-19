var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);

app.listen(PORT,"0.0.0.0", function(){
    console.log("Listening on PORT: "+ PORT);
});