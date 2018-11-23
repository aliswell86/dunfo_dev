
var express = require("express");
var request = require("request");
var DunCardItem = require("../models/DunCardItem.js");
var DunCardPartsItem = require("../models/DunCardPartsItem.js");
var common  = require("../common");
var router = express.Router();
var header_txt = "던파카드사전 - 던전앤파이터";
var header_description = "던딕. 던전앤파이터 카드정보. 카드,보주 시세. 부위별 옵션별 조회. 재료용카드 확인.";

router.get("/", function(req, res) {
  res.render("card/parts",{title:header_txt,description:header_description,img_title:"희귀도별 최저가 카드",img_link:"/cardparts"});
});

router.post("/get", function(req, res) {
  var result_ary = [];
  var in1 = req.body.in1;
  var in2 = req.body.in2;
  var in3 = req.body.in3;
  var in4 = req.body.in4;
  var in5 = req.body.in5;
  var in6 = req.body.in6;
  // var inObj = common.setinObj(in1,in2,in3,in4,in5,in6);
  // var inObj = {"$and":[{"itemRarity":common.OPTION_GRADE_LIST[in4]},{"unitPrice":{"$gte":1}}]};
  // console.log(JSON.stringify(inObj).toString());
  DunCardPartsItem.find({"$and":[{"itemRarity":common.OPTION_GRADE_LIST[in4]},{"unitPrice":{"$gte":1}}]}).sort("unitPrice").limit(10).exec(
    function(err, dbList){
      if(err) return res.json(err);
      res.json(dbList);
    }
  );
});

module.exports = router;
