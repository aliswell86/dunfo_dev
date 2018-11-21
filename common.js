var request = require("request");
var DunCardItem = require("./models/DunCardItem.js");
var DunCardPartsItem = require("./models/DunCardPartsItem.js");

var OPTION_GRADE_VALUE1 = "커먼";
var OPTION_GRADE_VALUE2 = "언커먼";
var OPTION_GRADE_VALUE3 = "레어";
var OPTION_GRADE_VALUE4 = "유니크";
var OPTION_GRADE_VALUE5 = "레전더리";

var OPTION_VALUE1 = "무기";
var OPTION_VALUE2 = "칭호";
var OPTION_VALUE3 = "머리어깨";
var OPTION_VALUE4 = "상의";
var OPTION_VALUE5 = "하의";
var OPTION_VALUE6 = "허리";
var OPTION_VALUE7 = "신발";
var OPTION_VALUE8 = "팔찌";
var OPTION_VALUE9 = "목걸이";
var OPTION_VALUE10 = "보조장비";
var OPTION_VALUE11 = "반지";
var OPTION_VALUE12 = "귀걸이";
var OPTION_VALUE13 = "마법석";

var OPTION_DTL_VALUE1 = "명속성강화";
var OPTION_DTL_VALUE2 = "수속성강화";
var OPTION_DTL_VALUE3 = "암속성강화";
var OPTION_DTL_VALUE4 = "화속성강화";
var OPTION_DTL_VALUE5 = "모든 속성 강화";
var OPTION_DTL_VALUE6 = "공격속성";
var OPTION_DTL_VALUE7 = "수속성부여";
var OPTION_DTL_VALUE8 = "암속성부여";
var OPTION_DTL_VALUE9 = "화속성부여";
var OPTION_DTL_VALUE10 = "명속성저항";
var OPTION_DTL_VALUE11 = "수속성저항";
var OPTION_DTL_VALUE12 = "암속성저항";
var OPTION_DTL_VALUE13 = "화속성저항";
var OPTION_DTL_VALUE14 = "모든 속성 저항";

var OPTION_DTL_VALUE15 = "힘";
var OPTION_DTL_VALUE16 = "체력";
var OPTION_DTL_VALUE17 = "지능";
var OPTION_DTL_VALUE18 = "정신력";
var OPTION_DTL_VALUE19 = "HP MAX";
var OPTION_DTL_VALUE20 = "MP MAX";
var OPTION_DTL_VALUE21 = "적중률";
var OPTION_DTL_VALUE22 = "회피율";

var OPTION_DTL_VALUE23 = "캐스트속도";
var OPTION_DTL_VALUE24 = "공격속도";
var OPTION_DTL_VALUE25 = "이동속도";
var OPTION_DTL_VALUE26 = "점프력";

var OPTION_DTL_VALUE27 = "물리 크리티컬 히트";
var OPTION_DTL_VALUE28 = "마법 크리티컬 히트";
var OPTION_DTL_VALUE29 = "물리 공격력";
var OPTION_DTL_VALUE30 = "마법 공격력";
var OPTION_DTL_VALUE31 = "독립 공격력";

var OPTION_DTL_VALUE32 = "모든 상태변화 내성";
var OPTION_DTL_VALUE36 = "구속 내성";
var OPTION_DTL_VALUE37 = "둔화 내성";

var OPTION_DTL_VALUE33 = "경직도";
var OPTION_DTL_VALUE34 = "히트리커버리";
var OPTION_DTL_VALUE35 = "스킬";
var OPTION_DTL_VALUE38 = "HP 1분당 회복";
var OPTION_DTL_VALUE39 = "MP 1분당 회복";

var OPTION_GRP_VALUE1 = [
  OPTION_DTL_VALUE1,OPTION_DTL_VALUE2,OPTION_DTL_VALUE3,OPTION_DTL_VALUE4,OPTION_DTL_VALUE5,OPTION_DTL_VALUE6,OPTION_DTL_VALUE7,
  OPTION_DTL_VALUE8,OPTION_DTL_VALUE9,OPTION_DTL_VALUE10,OPTION_DTL_VALUE11,OPTION_DTL_VALUE12,OPTION_DTL_VALUE13,OPTION_DTL_VALUE14
];
var OPTION_GRP_VALUE2 = [
  OPTION_DTL_VALUE15,OPTION_DTL_VALUE16,OPTION_DTL_VALUE17,OPTION_DTL_VALUE18,OPTION_DTL_VALUE19,OPTION_DTL_VALUE20,OPTION_DTL_VALUE21,OPTION_DTL_VALUE22
];
var OPTION_GRP_VALUE3 = [
  OPTION_DTL_VALUE23,OPTION_DTL_VALUE24,OPTION_DTL_VALUE25,OPTION_DTL_VALUE26
];
var OPTION_GRP_VALUE4 = [
  OPTION_DTL_VALUE27,OPTION_DTL_VALUE28,OPTION_DTL_VALUE29,OPTION_DTL_VALUE30,OPTION_DTL_VALUE31
];
var OPTION_GRP_VALUE5 = [
  OPTION_DTL_VALUE32,OPTION_DTL_VALUE36,OPTION_DTL_VALUE37
];
var OPTION_GRP_VALUE6 = [
  OPTION_DTL_VALUE33,OPTION_DTL_VALUE34,OPTION_DTL_VALUE35,OPTION_DTL_VALUE38,OPTION_DTL_VALUE39
];

var result_card_ary = [];

var common = {};

common.OPTION_GRADE_LIST = [
  "",OPTION_GRADE_VALUE1,OPTION_GRADE_VALUE2,OPTION_GRADE_VALUE3,OPTION_GRADE_VALUE4,OPTION_GRADE_VALUE5
];
common.OPTION_SLOT_LIST = [
  "",OPTION_VALUE1,OPTION_VALUE2,OPTION_VALUE3,OPTION_VALUE4,OPTION_VALUE5,OPTION_VALUE6,OPTION_VALUE7,OPTION_VALUE8,OPTION_VALUE9,OPTION_VALUE10,OPTION_VALUE11,OPTION_VALUE12,OPTION_VALUE13
];
common.OPTION_GRP_LIST = [
  "",OPTION_GRP_VALUE1,OPTION_GRP_VALUE2,OPTION_GRP_VALUE3,OPTION_GRP_VALUE4,OPTION_GRP_VALUE5,OPTION_GRP_VALUE6
];
common.OPTION_LIST = [
  "",OPTION_DTL_VALUE1,OPTION_DTL_VALUE2,OPTION_DTL_VALUE3,OPTION_DTL_VALUE4,OPTION_DTL_VALUE5,OPTION_DTL_VALUE6,OPTION_DTL_VALUE7,
  OPTION_DTL_VALUE8,OPTION_DTL_VALUE9,OPTION_DTL_VALUE10,OPTION_DTL_VALUE11,OPTION_DTL_VALUE12,OPTION_DTL_VALUE13,OPTION_DTL_VALUE14,
  OPTION_DTL_VALUE15,OPTION_DTL_VALUE16,OPTION_DTL_VALUE17,OPTION_DTL_VALUE18,OPTION_DTL_VALUE19,OPTION_DTL_VALUE20,OPTION_DTL_VALUE21,
  OPTION_DTL_VALUE22,OPTION_DTL_VALUE23,OPTION_DTL_VALUE24,OPTION_DTL_VALUE25,OPTION_DTL_VALUE26,OPTION_DTL_VALUE27,OPTION_DTL_VALUE28,
  OPTION_DTL_VALUE29,OPTION_DTL_VALUE30,OPTION_DTL_VALUE31,OPTION_DTL_VALUE32,OPTION_DTL_VALUE33,OPTION_DTL_VALUE34,OPTION_DTL_VALUE35,
  OPTION_DTL_VALUE36,OPTION_DTL_VALUE37,OPTION_DTL_VALUE38,OPTION_DTL_VALUE39
];

common.replace = function(str,findstr,replacestr) {
  if(!str) return str;
  return str.replace(new RegExp(findstr,"g"),replacestr);
};

common.getRandomInt = function(min, max) {
  var mRan = Math.random();
  return Math.floor(mRan * (max - min)) + min;
};

common.formatComma = function(str) {
  if(str.length == "0") return "0";

  str += "";
  var x = str.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};

common.setinObj = function(in1,in2,in3,in4,in5,in6) {
  // console.log(in1+"|"+in2+"|"+in3+"|"+in4+"|"+in5);
  var result = {};
  var outList = [];

  outList.push({"itemTypeDetail":"전문직업 재료"}); //카드만 조회
  if(in1!="0"||in2!="0"||in3!="0"||in4!="0"||in5!="0"||in6!=="") {

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
    if(in6!=="" && in6!=undefined) {
      var or = [];
      in6_1 = in6;
      in6 = in6.replace(/ /gi, "");

      or.push({"searchItemName":{"$regex":eval("/"+in6+"/")}});
      or.push({"cardInfo.enchant":{"$elemMatch":{"status":{"$elemMatch":{"name":eval("/"+in6_1+"/")}}}}});
      console.log(or);
      outList.push({"$or":or});
    }
  }
  result = {"$and":outList};
  // console.log((result));
  return result;
};

common.batchCardPartsInfo = function() {
  DunCardItem.find({}).limit(2).sort("itemSeq").exec(
    function(err, dbList){
      if(err) return res.json(err);
      var x = 0;
      result_card_ary = [];
      for(var i=0; i<dbList.length; i++) {
        setTimeout(getAuction,x,dbList[i],i);
        x+=120;
      }
      setTimeout(getAuctionProc,x+120);
    }
  );
};

var getAuctionProc = function() {
  var sortJsonArray = require('sort-json-array');
  var result_card_ary_sort = sortJsonArray(result_card_ary, 'unitPrice','asc')
  console.log(JSON.stringify(result_card_ary_sort).toString());
  // console.log(JSON.stringify(result_card_ary).toString());
  // DunCardPartsItem.create(result_card_ary);
};

var getAuction = function(dbList_obj,i) {
  // console.log(i);
  var result = "";
  var options = {
    url:"https://api.neople.co.kr/df/auction?itemId="+dbList_obj.itemId+"&sort=unitPrice:asc&limit=10&apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq"
  };
  console.log(i + " | " + options.url);
  request(options, function(err,res,html) {
    result = html;
  }).on('complete', function() {
    var resultItem = JSON.parse(result).rows;
    var result_card_obj = {};
    result_card_obj.itemName = dbList_obj.itemName;
    result_card_obj.itemId = dbList_obj.itemId;
    result_card_obj.cardInfo = dbList_obj.cardInfo;
    result_card_obj.itemRarity = dbList_obj.itemRarity;
    result_card_obj.itemSeq = dbList_obj.itemSeq;

    var auctionInfoAry = [];
    if(resultItem !== "" && resultItem !== null && resultItem !== undefined) {
      for(var auction_cnt=0; auction_cnt<resultItem.length; auction_cnt++) {
        var auctionInfoObj = {};
        auctionInfoObj.auctionNo = resultItem[auction_cnt].auctionNo;
        auctionInfoObj.regDate = resultItem[auction_cnt].regDate;
        auctionInfoObj.expireDate = resultItem[auction_cnt].expireDate;
        auctionInfoObj.refine = resultItem[auction_cnt].refine;
        auctionInfoObj.reinforce = resultItem[auction_cnt].reinforce;
        auctionInfoObj.amplificationName = resultItem[auction_cnt].amplificationName;
        auctionInfoObj.count = resultItem[auction_cnt].count;
        auctionInfoObj.price = resultItem[auction_cnt].price;
        auctionInfoObj.currentPrice = resultItem[auction_cnt].currentPrice;
        auctionInfoObj.unitPrice = resultItem[auction_cnt].unitPrice;
        auctionInfoObj.averagePrice = resultItem[auction_cnt].averagePrice;
        auctionInfoAry.push(auctionInfoObj);
      }
    }else{
      auctionInfoAry.push({});
    }
    result_card_obj.auctionInfo = auctionInfoAry;
    var curr_date = new Date();
    result_card_obj.currtime = curr_date.getHours();
    result_card_ary.push(result_card_obj);
  });
};

module.exports = common;
