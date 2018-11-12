card = function() {

  var callback_getMyCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;
    if(data===null || data.length===0 || data===null) return;

    var html = "";

    $.each(data, function(i, obj) {
      if(obj.cardInfo==="" || obj.cardInfo===0 || obj.cardInfo===null || obj.cardInfo===undefined) return false;
      html +=("[카드."+i+"]\t"+obj.itemName) + "<BR/>";
      if(obj.cardInfo.slots !== "" && obj.cardInfo.slots !== null && obj.cardInfo.slots !== undefined) {
        $.each(obj.cardInfo.slots, function(j, slot) {
          // html += (" [슬롯."+j+"]\t"+slot.slotName+"("+obj.itemName+")") + "<BR/>";
        });
      }

      // if(obj.cardInfo.enchant !== "" && obj.cardInfo.enchant !== null && obj.cardInfo.enchant !== undefined) {
      //   $.each(obj.cardInfo.enchant, function(k, enchant) {
      //     html +=(" [업글."+enchant.upgrade+"]") + "<BR/>";
      //     if(enchant.reinforceSkill !== "" && enchant.reinforceSkill !== null && enchant.reinforceSkill !== undefined) {
      //       if(enchant.reinforceSkill.length !== 0) {
      //         $.each(enchant.reinforceSkill, function(kk, job) {
      //           html +=("  [직업."+kk+"]\t"+job.jobName) + "<BR/>";
      //           if(job.skills !== "" && job.skills !== null && job.skills !== undefined) {
      //             $.each(job.skills, function(kkk, skill) {
      //               html +=("   [스킬."+kkk+"]\t"+skill.name+" +"+skill.value) + "<BR/>";
      //             });
      //           }
      //         });
      //       }
      //     }
      //     if(enchant.status !== "" && enchant.status !== null && enchant.status !== undefined) {
      //       $.each(enchant.status, function(jj, status) {
      //         html +=("  [업글."+enchant.upgrade+"][옵션."+jj+"]\t"+status.name+"/"+status.value+"("+obj.itemName+")") + "<BR/>";
      //         // console.log(status.name);
      //       });
      //     }
      //   });
      // }

      // console.log("---------------------------------");
    });

    $("#html").html(html);
  };

  return {
    getMyCardInfo : function() {
      var url = "/card/get";
      var data = {};
      data.in1 = $("#in1").val();
      data.in2 = $("#in2").val();
      data.in3 = $("#in3").val();
      data.in4 = $("#in4").val();
      myajax.ajaxSubmit(url,data,callback_getMyCardInfo);
    }
  };
}();
