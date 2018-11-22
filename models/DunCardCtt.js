
var mongoose = require("mongoose");

var DunCardCtt = mongoose.Schema({
  ctt:{type:String},
  reg_dtm:{type:String}
});

var DunCardCtt = mongoose.model("DunCardCtt", DunCardCtt);
module.exports = DunCardCtt;
