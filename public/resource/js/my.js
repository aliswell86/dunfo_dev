card = function() {

  var callback_getMyCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;
    if(data===null || data.length===0 || data===null) return;

    var html = "";
    var tit_class = "";
    $("#card_tab tbody").empty();

    $.each(data, function(i, obj) {
      if(obj.cardInfo==="" || obj.cardInfo===0 || obj.cardInfo===null || obj.cardInfo===undefined) return false;
      var itemRarity = obj.itemRarity;
      // var OPTION_GRADE_VALUE1 = "커먼";
      // var OPTION_GRADE_VALUE2 = "언커먼";
      // var OPTION_GRADE_VALUE3 = "레어";
      // var OPTION_GRADE_VALUE4 = "유니크";
      // var OPTION_GRADE_VALUE5 = "레전더리";
      if(itemRarity == "커먼") tit_class = "tit_common";
      else if(itemRarity == "언커먼") tit_class = "tit_uncommon";
      else if(itemRarity == "레어") tit_class = "tit_rair";
      else if(itemRarity == "유니크") tit_class = "tit_unique";
      else if(itemRarity == "레전더리") tit_class = "tit_legend";
      html += "<tr>";
      html += "<td class="+tit_class+">";
      html += "<img class=\"card_img\" src=\"https://img-api.neople.co.kr/df/items/"+obj.itemId+"\" />";
      html += obj.itemName;
      html += "</td>";
      html += "<td class=\"tit_buwui\">";
      var buwui_nm = "";
      if(obj.cardInfo.slots !== "" && obj.cardInfo.slots !== null && obj.cardInfo.slots !== undefined) {
        $.each(obj.cardInfo.slots, function(j, slot) {
          if((obj.cardInfo.slots.length - 1) == j) buwui_nm += slot.slotName;
          else buwui_nm += slot.slotName+",";
        });
      }
      html += buwui_nm;
      html += "</td>";
      html += "<td class=\"tit_option\">";
      var option_value_nm = "";
      if(obj.cardInfo.enchant !== "" && obj.cardInfo.enchant !== null && obj.cardInfo.enchant !== undefined) {
        $.each(obj.cardInfo.enchant, function(k, enchant) {
          var brsub = "";
          if((obj.cardInfo.enchant.length - 1) != k) brsub += "<br/>";
          if(enchant.status !== "" && enchant.status !== null && enchant.status !== undefined) {
            $.each(enchant.status, function(jj, status) {
              if((enchant.status.length - 1) == jj) option_value_nm += status.name + "+" + status.value;
              else option_value_nm += status.name + "&nbsp;+" + status.value + "<br/>" + brsub;
            });
          }
        });
      }
      html += option_value_nm;
      html += "</td>";
      html += "<td class=\"tit_option\">200,000 골드</td>";
      html += "</tr>";
    });

    $("#card_tab tbody").html(html);



    // $.each(data, function(i, obj) {
    //   if(obj.cardInfo==="" || obj.cardInfo===0 || obj.cardInfo===null || obj.cardInfo===undefined) return false;
    //   html +=("[카드."+i+"]\t"+obj.itemName) + "<BR/>";
    //   if(obj.cardInfo.slots !== "" && obj.cardInfo.slots !== null && obj.cardInfo.slots !== undefined) {
    //     $.each(obj.cardInfo.slots, function(j, slot) {
    //       html += (" [슬롯."+j+"]\t"+slot.slotName+"("+obj.itemName+")") + "<BR/>";
    //     });
    //   }
    //
    //   if(obj.cardInfo.enchant !== "" && obj.cardInfo.enchant !== null && obj.cardInfo.enchant !== undefined) {
    //     $.each(obj.cardInfo.enchant, function(k, enchant) {
    //       html +=(" [업글."+enchant.upgrade+"]") + "<BR/>";
    //       if(enchant.reinforceSkill !== "" && enchant.reinforceSkill !== null && enchant.reinforceSkill !== undefined) {
    //         if(enchant.reinforceSkill.length !== 0) {
    //           $.each(enchant.reinforceSkill, function(kk, job) {
    //             html +=("  [직업."+kk+"]\t"+job.jobName) + "<BR/>";
    //             if(job.skills !== "" && job.skills !== null && job.skills !== undefined) {
    //               $.each(job.skills, function(kkk, skill) {
    //                 html +=("   [스킬."+kkk+"]\t"+skill.name+" +"+skill.value) + "<BR/>";
    //               });
    //             }
    //           });
    //         }
    //       }
    //       if(enchant.status !== "" && enchant.status !== null && enchant.status !== undefined) {
    //         $.each(enchant.status, function(jj, status) {
    //           html +=("  [업글."+enchant.upgrade+"][옵션."+jj+"]\t"+status.name+"\t("+obj.itemName + "-" + obj.itemRarity+")") + "<BR/>";
    //         });
    //       }
    //     });
    //   }
    // });
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
