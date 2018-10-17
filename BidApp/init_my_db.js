var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_db");

var assetSchema = new mongoose.Schema({
   name: String,
   price: Number,
});

var Asset = mongoose.model("Asset", assetSchema);

var names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i = 0; i < names.length; i++){
    Asset.create(
    {
        name: names[i], 
        price: 1
    },
    function(err, asset){
        if(err){
            console.log(err);
        }
        else{
            console.log("NEWLY CREATED ASSET: ");
            console.log(asset);
    }
    });
}
