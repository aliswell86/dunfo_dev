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

module.exports = common;
