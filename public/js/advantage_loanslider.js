/**
 * LendFair Slider JavaScript
 */
$(window).load(function(){
	function update() {

     $amount1 = $("#amount").val();
     $monthscount = $("#months").val();
	 $("#months").text($monthscount);
	 $(".months").text($monthscount);

	 // We need these hidden values to pass across to pages that need the slider automatically set
	 $("#displaytimesummaryhidden").val($monthscount);
	 $("#amountsummaryhidden").val($amount1);


	 $("#amount").text($amount1);
	 $(".amount").text($amount1);


	 // Set the daily rate for the slider (0.02202505) A29
	 $repayment = parseInt($amount1) * 0.02202505;
	 $part2 = parseFloat(1+0.02202505);
	 $part3 = Math.pow($part2,$monthscount);
	 $("#repaymentamount").text($repayment.toFixed(2));
	 $("#part3").text($part3);
	 $part4 = Math.pow($part2,$monthscount)-1;
	 $("#part4").text($part4);

	 $overallmonthlyrepayment = (($repayment) * ($part3) / ($part4));
	 	var
			opa = 41;
			oap = (($repayment) * ($part3) / ($part4));
		if (oap <= 40)
		{
			$('#slidermessage').tooltipster('show');
			//$("#change_color").css("background","green");
			$("#change_color").prop("disabled", true);
		}
	 		else
		{
			$('#slidermessage').tooltipster('hide');
			//$( "#change_color" ).addClass("button-apply-large pure-button");
			//$("#change_color").css("background","red");
			$("#change_color").prop("disabled", false);
		}

	 $("#overallmonthlyrepayment").text($overallmonthlyrepayment.toFixed(2));
	 $("#overallmonthlyrepaymenthidden").val($overallmonthlyrepayment.toFixed(2));
	 $(".overallmonthlyrepayment").text($overallmonthlyrepayment.toFixed(2));
	 $(".overallmonthlyrepaymentsmalltext").text($overallmonthlyrepayment.toFixed(2));

	 $overalltotalamounttopay = (($overallmonthlyrepayment.toFixed(2))*($monthscount));
	 $("#overalltotalamounttopay").text($overalltotalamounttopay.toFixed(2));
	 $("#overalltotalamounttopayhidden").val($overalltotalamounttopay.toFixed(2));
	 $(".overalltotalamounttopay").text($overalltotalamounttopay.toFixed(2));
	 $(".overalltotalamounttopaysmalltext").text($overalltotalamounttopay.toFixed(2));

}

$("#slider1").slider({
    max:10000,
    min:1000,
    step:500,
	value: 3500,
    slide: function(event, ui) {
		var
			amt = parseInt($("#amount").val());
			opa = 41;
			oap = (($repayment) * ($part3) / ($part4));

		if (oap <= 40)
		{
			$("#amount").val(ui.value.toFixed(0));
			$('#slidermessage').tooltipster('show');
			$('#tooltip_radio_1_message').tooltipster('hide');
			//$(this).slider( "value" , 7500 );
			//oap = 41;
			update();
		}
		else
		{
			$("#amount").val(ui.value.toFixed(0));
			$('#slidermessage').tooltipster('hide');
			$('#tooltip_radio_1_message').tooltipster('hide');
			update();
		}
    }
});




/*Hodge slider code
slide: function (event, ui) {
  if (ui.value < 20) {
    $(this).slider('value',20);
    return false;
  }
}*/

$("#increase1").click(function(){
	var amt = parseInt($("#amount").val());
	amt =  amt + 500 >= 10000 ? 10000: amt + 500;
	$("#slider1").slider('value',amt);
	$("#amount").val(amt.toString());
	update();
});

$("#decrease1").click(function(){
	var amt = parseInt($("#amount").val());
	amt =  amt - 500 <= 1000 ? 1000: amt - 500;
	$("#slider1").slider('value',amt);
	$("#amount").val(amt.toString());
	update();
});

$("#increase2").click(function(){

	 var month =  parseInt($("#months").val());
	 month =  month + 6 >= 60 ? 60: month + 6;
     $("#date").text(addmonthsToDate(month));
	 $("#slider2").slider('value',month);
	 $("#months").val(month.toString());
     update();
});

$("#decrease2").click(function(){
	 var month =  parseInt($("#months").val());
	 month =  month - 6 <= 12 ? 12: month - 6;
     $("#date").text(addmonthsToDate(month));
	 $("#slider2").slider('value',month);
	 $("#months").val(month.toString());
     update();
});

function addmonthsToDate(months) {
  var mths = new Array("Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec");

  var d = new Date();
  d.setHours(d.getHours() + (24 * months));

  var currD = d.getDate();
  var currM = d.getMonth();
  var currY = d.getFullYear();

  return mths[currM] + " " + currD + ", " + currY;
}


$("#slider2").slider({
    max:60,
    min:12,
	step:6,
	value: 48,
    slide: function(event, ui) {
		var
			opa = 41;
			oap = (($repayment) * ($part3) / ($part4));
		if (oap <= 40)
		{
			$("#months").val(ui.value);
			$("#date").text(addmonthsToDate(parseInt($("#months").val())));
			$('#slidermessage').tooltipster('show');
			update();
		}
		else
		{
			$("#months").val(ui.value);
			$("#date").text(addmonthsToDate(parseInt($("#months").val())));
			$('#slidermessage').tooltipster('hide');
			update();
		}
	},
    create: function(event, ui) {
      $("#date").text(addmonthsToDate(parseInt($("#months").val())));
    }
});

function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
}

$("#months").val($("#slider2").slider("value"));
$("#amount").val($("#slider1").slider("value").toFixed(0));
$("#amountsummary").val($("#slider1").slider("value").toFixed(0));
$("#amountsummaryhhh").val($("#slider1").slider("value").toFixed(0));
$("#amountsummaryhidden").val($("#slider1").slider("value").toFixed(0));
$("#displaytimesummary").val($("#slider2").slider("value"));
$("#displaytimesummaryhidden").val($("#slider2").slider("value"));

$('#elementID').html(commaSeparateNumber(1234567890));
$('#elementID').val(commaSeparateNumber($("#slider1").slider("value").toFixed(0)));

$("#months").change(function(event) {
  var data = $("#months").val();
  if (data.length > 0)
  {
     if (parseInt(data) >= 0 && parseInt(data) <= 31)
     {
         $("#slider2").slider("option", "value", data);
     }
     else
     {
        if (parseInt(data) < 1)
        {
            $("#months").val("1");
            $("#slider2").slider("option", "value", "1");
        }
        if (parseInt(data) > 31)
        {
            $("#months").val("31");
            $("#slider2").slider("option", "value", "31");
        }
     }
  }
  else
  {
    $("#slider2").slider("option", "value", "1");
  }
  $("#date").text(addmonthsToDate(parseInt($("#months").val())));
});

update();

			document.getElementById("button").style.background='#000000';
});