function addRatingCallback(obj) {
	var aR = obj;
	var s = "";
	ratingWidth = aR[0].star_image_value * 30 ;
    s +=('<div id="AddRatingWidget" style="WIDTH:150px;BACKGROUND-COLOR:'+ WBgColor +';COLOR:' + WFgColor + ';" align="center">');
	s +=('<DIV class="r-b" id="unit_long50" ><UL class="aR" >');
	s +=('<LI class="c-R" style="WIDTH: '+ ratingWidth+'px">Currently '+aR[0].star_image_value+'/10</LI>');
    s +=('<LI><A class="r1" onclick="AddR(\'1\',\''+aR[0].id+'\',\''+aR[0].ratings.score+'\',\''+aR[0].ratings.ratedby+'\');return false;" href="void();">1</A></LI>');
	s +=('<LI><A class="r2" onclick="AddR(\'2\',\''+aR[0].id+'\',\''+aR[0].ratings.score+'\',\''+aR[0].ratings.ratedby+'\');return false;" href="void();">2</A></LI>');
	s +=('<LI><A class="r3" onclick="AddR(\'3\',\''+aR[0].id+'\',\''+aR[0].ratings.score+'\',\''+aR[0].ratings.ratedby+'\');return false;" href="void();">3</A></LI>');
	s +=('<LI><A class="r4" onclick="AddR(\'4\',\''+aR[0].id+'\',\''+aR[0].ratings.score+'\',\''+aR[0].ratings.ratedby+'\');return false;" href="void();">4</A></LI>');
	s +=('<LI><A class="r5" onclick="AddR(\'5\',\''+aR[0].id+'\',\''+aR[0].ratings.score+'\',\''+aR[0].ratings.ratedby+'\');return false;" href="void();">5</A></LI>');
	s +=('</UL><center><FONT face="arial" size="1">Rating: <STRONG>'+aR[0].star_image_value+'</STRONG> / '+aR[0].ratings.ratedby+' votes </FONT></center></DIV>');
	s +=('</div>');
	document.getElementById('addrating_star_info').innerHTML += s;
};
function AddR(rating,id,score,ratedby)
{
    try
    { 
     var Sc = parseInt(score) + parseInt(rating);
        var RB = parseInt(ratedby)+1;
        var oR =Sc/RB ;
        if ((oR <1)&&(oR>0))
           	oR = ".5";
		else if (oR ==1.0)
		oR = "1";
		else if ((oR >1)&&(oR<2)) oR = "1.5";
		else if (oR ==2.0)oR = "2";
		else if ((oR >2)&&(oR<3)) oR = "2.5";
		else if (oR ==3.0) oR = "3";
		else if ((oR >3)&&(oR<4)) oR = "3.5";
		else if (oR ==4.0) oR = "4";
		else if ((oR >4)&&(oR<5)) oR = "4.5";
		else if (oR ==5.0) oR = "5";
		else if (oR ==0.0) oR = "0";
        var rW = oR * 30;         
        var s = "";
        
        s +=('<DIV class="r-b" title="Current Rating">');
        s +=('<UL class="aR" STYLE="padding:0 0 0 0;border:0;margin:0 0 0 0;">');
	    s +=('<LI class="c-r" style="WIDTH: '+ rW+'px;padding:0 0 0 0;"></LI>');
	    s +=('</UL><center><FONT face="arial" size="1">'+oR+' / '+RB+' votes </font></center>');
	    s +=('<A target="_blank" href="http://addrating.com" title="Get FREE Rating Widget at AddRating.com">');
	    s +=('<img id= "statusimage" width="14px" height="14px" alt="Get FREE Rating Widget at AddRating.com" border="0" src="http://addrating.com/RatingHandler.ashx?id='+id+'&Rating='+rating+'"></a></DIV>');
	    document.getElementById('addrating_star_info').innerHTML = s;
     }
    catch (err)
    {
        alert('Error occured: ' + err);
    }
};

