
var express = require("express");
var request = require("request");
var prettyjson = require('prettyjson');
var DunCardItem = require("../models/DunCardItem.js");
var common  = require("../common");
var router = express.Router();
var header_txt = "던파백과사전 - 카드";
var header_description = "던전앤파이터의 모든정보. 카드,보주정보. 부위별, 옵션별 조회. 경매장시세 확인.";

router.get("/", function(req, res) {
  res.render("card/index",{title:header_txt,description:header_description});
});

router.post("/get", function(req, res) {
  var in1 = req.body.in1;
  var in2 = req.body.in2;
  var in3 = req.body.in3;
  var inObj = setinObj(in1,in2,in3);

  DunCardItem.find(inObj).limit(10).exec(
    function(err, dbList){
      if(err) return res.json(err);
      // console.log(prettyjson.render(JSON.stringify(dbList).toString()));
      res.json(dbList);
    }
  );
});

module.exports = router;

var setinObj = function(in1,in2,in3) {
  console.log(in1+"|"+in2+"|"+in3);
  var result = {};
  var outList = [];
  // console.log("OPTION_SLOT_LIST[in1] : " + common.OPTION_SLOT_LIST[in1]);
  if(in1!="0"||in2!="0"||in3!="0") {
    if(in1!="0") outList.push({"cardInfo.slots":{"$elemMatch":{"slotName":common.OPTION_SLOT_LIST[in1]}}});
    if(in2!="0") {
      outList.push({"cardInfo.enchant":{"$elemMatch":{"status":{"$elemMatch":{"name":{"$in":common.OPTION_GRP_LIST[in2]}}}}}});
    }
    if(in3!="0") {
      if(in3=="35") {
        outList.push({"cardInfo.enchant":{"$elemMatch":{"reinforceSkill":{"$gt":{"$size":0}}}}});
      }else{
        outList.push({"cardInfo.enchant":{"$elemMatch":{"status":{"$elemMatch":{"name":common.OPTION_LIST[in3]}}}}});
      }
    }
    result = {"$and":outList};
  }
  console.log(prettyjson.render(result));
  return result;
};
