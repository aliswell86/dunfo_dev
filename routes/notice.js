
var express = require("express");
var request = require("request");
var router = express.Router();
var header_txt = "던파카드사전 - 던전앤파이터";
var header_description = "던딕. 던전앤파이터 카드정보. 카드,보주 시세. 부위별 옵션별 조회. 재료용카드 확인.";

router.get("/", function(req, res) {
  res.render("notice/notice",{title:header_txt,description:header_description,img_title:"업데이트 예정내용",img_link:"/update"});
});

module.exports = router;
