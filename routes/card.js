
var express = require("express");
var request = require("request");
var DunCardItem = require("../models/DunCardItem.js");
var router = express.Router();
var header_txt = "던파카드백과사전 - 던인포";
var header_description = "던인포 - 던전앤파이터 인포";
var cardItemIdList = [];
var cardItemDtlList = [];
var console_num = 1;

router.get("/", function(req, res) {
  res.render("card/index",{title:header_txt,description:header_description});
});

module.exports = router;
