card = function() {

  var callback_getMyCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;
    if(data===null || data.length===0 || data===null) return;

    $.each(data, function(i, obj) {
      if(obj.cardInfo==="" || obj.cardInfo===0 || obj.cardInfo===null || obj.cardInfo===undefined) return false;
      console.log("[카드."+i+"]\t"+obj.itemName);
      if(obj.cardInfo.slots !== "" && obj.cardInfo.slots !== null && obj.cardInfo.slots !== undefined) {
        $.each(obj.cardInfo.slots, function(j, slot) {
          console.log(" [슬롯."+j+"]\t"+slot.slotName+"("+obj.itemName+")");
        });
      }

      if(obj.cardInfo.enchant !== "" && obj.cardInfo.enchant !== null && obj.cardInfo.enchant !== undefined) {
        $.each(obj.cardInfo.enchant, function(k, enchant) {
          console.log(" [업글."+enchant.upgrade+"]");
          if(enchant.reinforceSkill !== "" && enchant.reinforceSkill !== null && enchant.reinforceSkill !== undefined) {
            if(enchant.reinforceSkill.length !== 0) {
              $.each(enchant.reinforceSkill, function(kk, job) {
                console.log("  [직업."+kk+"]\t"+job.jobName);
                if(job.skills !== "" && job.skills !== null && job.skills !== undefined) {
                  $.each(job.skills, function(kkk, skill) {
                    console.log("   [스킬."+kkk+"]\t"+skill.name+" +"+skill.value);
                  });
                }
              });
            }
          }
          if(enchant.status !== "" && enchant.status !== null && enchant.status !== undefined) {
            $.each(enchant.status, function(jj, status) {
              console.log("  [업글."+enchant.upgrade+"][옵션."+jj+"]\t"+status.name+"/"+status.value+"("+obj.itemName+")");
              // console.log(status.name);
            });
          }
        });
      }

      // console.log("---------------------------------");
    });
  };

  return {
    getMyCardInfo : function() {
      var url = "/card/get";
      var data = {};
      data.in1 = $("#in1").val();
      data.in2 = $("#in2").val();
      data.in3 = $("#in3").val();
      myajax.ajaxSubmit(url,data,callback_getMyCardInfo);
    }
  };
}();
