var common = {};

common.cardInfoListDisp = function(data,moreYn) {
  var more_yn = moreYn===undefined ? "N" : moreYn;
  var html = "";
  var tit_class = "";
  var page_size = 20;

  if(data===null || data.length===0 || data===null) {
    html += "<tr><td colspan=\"4\">아무것도 없습니다.</td></tr>";
    $("#card_tab tbody").html(html);
    return;
  }

  $.each(data, function(i, obj) {
    if(obj.cardInfo==="" || obj.cardInfo===0 || obj.cardInfo===null || obj.cardInfo===undefined) return false;

    var itemRarity = obj.itemRarity;
    if(itemRarity == "커먼") tit_class = "tit_common";
    else if(itemRarity == "언커먼") tit_class = "tit_uncommon";
    else if(itemRarity == "레어") tit_class = "tit_rair";
    else if(itemRarity == "유니크") tit_class = "tit_unique";
    else if(itemRarity == "레전더리") tit_class = "tit_legend";

    if(more_yn == "N") {
      if(i == page_size) {
        // console.log(obj.itemSeq + " | " + obj.itemName);
        html += "<tr class=\"more_view\"><td colspan=\"4\" onclick=\"javascript:card.getMyCardInfo("+obj.itemSeq+");\">더보기</td></tr>";
        return false;
      }
    }


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
    var skill_value_nm = "";
    if(obj.cardInfo.enchant !== "" && obj.cardInfo.enchant !== null && obj.cardInfo.enchant !== undefined) {
      $.each(obj.cardInfo.enchant, function(k, enchant) {
        if(enchant.status !== "" && enchant.status !== null && enchant.status !== undefined) {
          if(obj.cardInfo.enchant.length > 1) {
            if((obj.cardInfo.enchant.length-1) == k) option_value_nm += "(최대) ";
            else option_value_nm += "("+Number(k)+"/"+Number(obj.cardInfo.enchant.length-1)+") ";
          }

          if(enchant.status.length > 0) {
            $.each(enchant.status, function(jj, status) {
              if((enchant.status.length - 1) == jj) option_value_nm += status.name + " +" + status.value;
              else option_value_nm += status.name + " +" + status.value + ", ";
            });

            if((obj.cardInfo.enchant.length -1) != k) {
              option_value_nm += "<BR/>";
            }else{
              skill_value_nm += "<BR/>";
            }
          }
        }

        if(enchant.reinforceSkill !== "" && enchant.reinforceSkill !== null && enchant.reinforceSkill !== undefined) {
          if(enchant.reinforceSkill.length > 0) {
            $.each(enchant.reinforceSkill, function(kk, job) {
              if(job.skills !== "" && job.skills !== null && job.skills !== undefined) {
                $.each(job.skills, function(kkk, skill) {
                  if((job.skills.length - 1) == kkk) skill_value_nm += "<b>" + job.jobName + "</b> " + skill.name + " +" + skill.value;
                  else skill_value_nm += "<b>" + job.jobName + "</b> " + skill.name + " +" + skill.value + "</BR>";
                });
              }
              if((enchant.reinforceSkill.length - 1) != kk) skill_value_nm += "<BR/>";
            });
          }
        }
      });
    }
    html += option_value_nm + skill_value_nm;
    html += "</td>";
    html += "<td class=\"tit_option\">";
    if(obj.unitPrice !== null && obj.unitPrice !== undefined) {
      html += utils.formatComma(obj.unitPrice) + "("+obj.count+")";
    }
    html += "</td>";
    html += "</tr>";
  });

  if(more_yn == "N") {
    if($("#more_view_yn").val() == "Y") {
      $("#card_tab tbody").append(html);
    }else{
      $("#card_tab tbody").html(html);
    }
  }else{
    $("#card_tab tbody").html(html);
  }
};
