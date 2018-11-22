card = function() {

  var callback_getPartsCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;
    common.cardInfoListDisp(data,"parts");
  };

  var callback_getMyCardInfo = function(data,textStatus,xhr) {
    if(!myajax.ajaxStatus(xhr,textStatus)) return;
    common.cardInfoListDisp(data);
  };

  return {
    //in5==0이면 처음조회
    //in5!=0이면 21개이상 조회
    getMyCardInfo : function(in5) {
      $("tr.more_view").remove();

      if(Number(in5) !== 0) {
        $("#more_view_yn").val("Y"); //append
      }else{
        $("#more_view_yn").val("N"); // html
        $("#card_tab tbody").empty();
      }

      var url = "/card/get";
      var data = {};
      data.in1 = $("#in1").val();
      data.in2 = $("#in2").val();
      data.in3 = $("#in3").val();
      data.in4 = $("#in4").val();
      data.in5 = in5;
      data.in6 = $("#in6").val();
      myajax.ajaxSubmit(url,data,callback_getMyCardInfo);
    },

    getPartsCardInfo : function() {
      var url = "/cardparts/get";
      var data = {};
      data.in1 = $("#in1").val();
      data.in2 = $("#in2").val();
      data.in3 = $("#in3").val();
      data.in4 = $("#in4").val();
      data.in5 = "";
      data.in6 = $("#in6").val();
      myajax.ajaxSubmit(url,data,callback_getPartsCardInfo);
    },

    getMyCardInit : function() {
      $("tr.more_view").remove();
      $("#in1").val("0");
      $("#in2").val("0");
      $("#in3").val("0");
      $("#in4").val("0");
      $("#more_view_yn").val("N");
    }
  };
}();
