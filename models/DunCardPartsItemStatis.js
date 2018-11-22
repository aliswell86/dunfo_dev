
var mongoose = require("mongoose");

var DunCardPartsItemStatis = mongoose.Schema({
  itemSeq:{type:Number},
  itemId:{type:String},
  itemName:{type:String},
  itemRarity:{type:String},
  itemType:{type:String},
  itemTypeDetail:{type:String},
  itemAvailableLevel:{type:String},
  itemObtainInfo:{type:String},
  itemExplain:{type:String},
  itemExplainDetail:{type:String},
  itemFlavorText:{type:String},
  setItemId:{type:String},
  setItemName:{type:String},
  searchItemName:{type:String},
  cardInfo:{
    slots:[{
      slotId:{type:String},
      slotName:{type:String}
    }],
    enchant:[{
      status:[{
        name:{type:String},
        value:{type:String}
      }],
      upgrade:{type:Number},
      reinforceSkill:[{
        jobId:{type:String},
        jobName:{type:String},
        skills:[{
          name:{type:String},
          value:{type:Number}
        }]
      }]
    }]
  },
  auctionNo:{type:Number},
  regDate:{type:String},
  expireDate:{type:String},
  refine:{type:Number},
  reinforce:{type:Number},
  amplificationName:{type:String},
  count:{type:Number},
  price:{type:Number},
  currentPrice:{type:Number},
  unitPrice:{type:Number},
  averagePrice:{type:Number},
  currRegDate:{type:String}
});

var DunCardPartsItemStatis = mongoose.model("DunCardPartsItemStatis", DunCardPartsItemStatis);
module.exports = DunCardPartsItemStatis;
