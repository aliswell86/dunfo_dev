
var express = require("express");
var request = require("request");
var prettyjson = require('prettyjson');
var DunCardItem = require("../models/DunCardItem.js");
var common  = require("../common");
var router = express.Router();
var header_txt = "던파카드사전";
var header_description = "던전앤파이터 정보. 카드,보주정보. 부위별, 옵션별 조회. 경매장시세 확인.";
var result_card_ary = [];

router.get("/", function(req, res) {
  res.render("card/index",{title:header_txt,description:header_description});
});

router.post("/get", function(req, res) {
  var in1 = req.body.in1;
  var in2 = req.body.in2;
  var in3 = req.body.in3;
  var in4 = req.body.in4;
  var in5 = req.body.in5;
  var inObj = setinObj(in1,in2,in3,in4,in5);

  DunCardItem.find(inObj).limit(51).sort("itemSeq").exec(
    function(err, dbList){
      if(err) return res.json(err);
      var x = 0;
      for(var i=0; i<dbList.length; i++) {
        setTimeout(getAuction,x,dbList[i],i);
        x+=150;
      }
      setTimeout(getAuctionProc,x+150,res);
    }
  );
});

module.exports = router;

var getAuctionProc = function(res) {
  console.log(JSON.stringify(result_card_ary).toString());
  res.json(result_card_ary);
};

var getAuction = function(dbList_obj) {
  var result = "";
  var options = {
    url:"https://api.neople.co.kr/df/auction?itemId="+dbList_obj.itemId+"&sort=unitPrice:asc&limit=1&apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq"
  };

  request(options, function(err,res,html) {
    result = html;
  }).on('complete', function() {
    var resultItem = JSON.parse(result).rows;
    console.log("resultItem[0].currentPrice : " + resultItem[0].currentPrice);
    dbList_obj.currentPrice = resultItem[0].currentPrice;
    result_card_ary.push(dbList_obj);
  });
};

var setinObj = function(in1,in2,in3,in4,in5) {
  // console.log(in1+"|"+in2+"|"+in3+"|"+in4+"|"+in5);
  var result = {};
  var outList = [];
  // console.log("OPTION_SLOT_LIST[in1] : " + common.OPTION_SLOT_LIST[in1]);
  if(in1!="0"||in2!="0"||in3!="0"||in4!="0"||in5!="0") {
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
    if(in4!="0") {
      outList.push({"itemRarity":common.OPTION_GRADE_LIST[in4]});
    }
    outList.push({"itemSeq":{"$gte":Number(in5)}});
    result = {"$and":outList};
  }
  // console.log(prettyjson.render(result));
  return result;
};
