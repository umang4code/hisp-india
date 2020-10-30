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
	var csvContent = "data:text/csv;charset=utf-8,";
	finalArr.forEach(function(rowArray) 
	{
    	let row = rowArray.join(",");
    	csvContent += row + "\r\n";
	});
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "my_data.csv");
	document.body.appendChild(link); // Required for FF

	link.click();
	document.body.removeChild(link);
}
