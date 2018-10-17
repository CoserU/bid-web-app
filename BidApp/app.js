var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_db");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// SCHEMA SETUP
var assetSchema = new mongoose.Schema({
   name: String,
   price: Number,
});
    
var Asset = mongoose.model("Asset", assetSchema);

app.get("/", function(req, res){
    // Get all asset data from DB
    Asset.find({}, function(err, allAssets){
        if(err){
            console.log(err);
        }
        else{
            res.render("home", {assets: allAssets});
        }
    });
});

app.post("/edit", function(req, res){
    var price = req.body.price;
    var name = req.body.name;
    // Update the DB with new price
    Asset.update({name: name}, {price: price},
        function(err, updated_asset){
            if(err){
                console.log(err);
                // Return the price as undefined to ajax if there is an error
                res.json({price: undefined});
            }
            else{
                console.log("NEWLY UPDATED ASSET: ");
                console.log(updated_asset);
                // Return the updated price to ajax
                res.json({price: price});
            }
        }
    );
});

app.get("*", function(req, res){
    res.send("This page does not exist!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app!");
});
