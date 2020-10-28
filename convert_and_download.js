var weekday=new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var finalArr;
function convert(){
	finalArr= new Array[noDistricts+1];
	finalArr.push{"District Name","District UID","Weekday"};
	for(int i=0;i<6;i++)
	{
		var wl=document.getElementbyId(weekday[i]);
		var mylist=wl.getElementsbytag('li');
		for(item in mylist)
		{
			finalArr.push(new Array(mylist[item].textContent,mylist[item].id,weekday[i]));
		}
	}
}