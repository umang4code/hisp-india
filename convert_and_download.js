var weekday=new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var finalArr;
function convert(){
	finalArr= new Array(noDistricts+1);
	var arr_index=0;
	finalArr[arr_index++]=new Array("District Name","District UID","Weekday");
	var wl;
	var mylist;
	for(var i=0;i<6;i++)
	{
		wl=document.getElementById(weekday[i]);
		mylist=wl.getElementsByTagName('li');
		for(item of mylist)
		{
			finalArr[arr_index++]=new Array(item.textContent,item.id,weekday[i]);
		}
	}
}