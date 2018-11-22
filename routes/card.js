
var express = require("express");
var request = require("request");
var prettyjson = require('prettyjson');
var DunCardItem = require("../models/DunCardItem.js");
var DunCardPartsItem = require("../models/DunCardPartsItem.js");
var common  = require("../common");
var router = express.Router();
var header_txt = "던파카드사전 - 던전앤파이터";
var header_description = "던전앤파이터 정보. 카드,보주정보. 부위별, 옵션별 조회. 경매장시세 확인.";
var result_card_ary = [];

router.get("/", function(req, res) {
  res.render("card/index",{title:header_txt,description:header_description,img_title:"카 드 사 전"});
});

router.post("/get", function(req, res) {
  var in1 = req.body.in1;
  var in2 = req.body.in2;
  var in3 = req.body.in3;
  var in4 = req.body.in4;
  var in5 = req.body.in5;
  var in6 = req.body.in6;
  var inObj = common.setinObj(in1,in2,in3,in4,in5,in6);
  // console.log(JSON.stringify(inObj).toString());
  DunCardPartsItem.find(inObj).sort("itemSeq").limit(21).exec(
    function(err, dbList){
      if(err) return res.json(err);
      // console.log(dbList.length);
      res.json(dbList);
      // var x = 0;
      // result_card_ary = [];
      // for(var i=0; i<dbList.length; i++) {
      //   setTimeout(getAuction,x,dbList[i],i);
      //   x+=120;
      // }
      // setTimeout(getAuctionProc,x+120,res);
    }
  );
});

module.exports = router;

// var getAuctionProc = function(res) {
//   // console.log(JSON.stringify(result_card_ary).toString());
//   res.json(result_card_ary);
// };
//
// var getAuction = function(dbList_obj,i) {
//   // console.log(i);
//   var result = "";
//   var options = {
//     url:"https://api.neople.co.kr/df/auction?itemId="+dbList_obj.itemId+"&sort=unitPrice:asc&limit=1&apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq"
//   };
//   // console.log(options.url);
//   request(options, function(err,res,html) {
//     result = html;
//   }).on('complete', function() {
//     var resultItem = JSON.parse(result).rows;
//     var result_card_obj = {};
//     result_card_obj.itemName = dbList_obj.itemName;
//     result_card_obj.itemId = dbList_obj.itemId;
//     result_card_obj.cardInfo = dbList_obj.cardInfo;
//     result_card_obj.itemRarity = dbList_obj.itemRarity;
//     result_card_obj.itemSeq = dbList_obj.itemSeq;
//     if(resultItem !== "" && resultItem !== null && resultItem !== undefined) {
//       if(resultItem.length>0) {
//         result_card_obj.unitPrice = resultItem[0].unitPrice;
//         result_card_obj.auctionCount = resultItem[0].count;
//       }else{
//         result_card_obj.unitPrice = "";
//         result_card_obj.auctionCount = "";
//       }
//     }else{
//       result_card_obj.unitPrice = "";
//       result_card_obj.auctionCount = "";
//     }
//     result_card_ary.push(result_card_obj);
//   });
// };
