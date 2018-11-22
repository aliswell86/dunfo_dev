
var express = require("express");
var moment = require("moment");
var DunCardCtt = require("../models/DunCardCtt.js");
var router = express.Router();
var header_txt = "던파카드사전 - 던전앤파이터";
var header_description = "던전앤파이터 카드정보. 카드,보주 시세. 부위별 옵션별 조회. 재료용카드 확인.";

router.get("/", function(req, res) {
  DunCardCtt.find({}).sort({reg_dtm:-1}).limit(100).exec(
    function(err, dbList){
      if(err) return res.json(err);
      res.render("hi/hi",{title:header_txt,description:header_description,img_title:"건 의 하 기",data:dbList,img_link:"/hi"});
    }
  );
});

router.post("/cttin", function(req, res) {
  console.log("입력시작 : " + req.body.ctt);
  var inObj = {};
  inObj.ctt = req.body.ctt;
  inObj.reg_dtm = moment().format("YYYYMMDDHHmmss");

  DunCardCtt.create(inObj, function(err, ctt){
    if(err) return res.json(err);
    res.redirect("/hi");
   });
});


module.exports = router;
