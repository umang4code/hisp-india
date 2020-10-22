var xmlhttp = new XMLHttpRequest();
var myobj;
var myArr;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myobj = JSON.parse(this.responseText);
    myArr=myobj.organisationUnits;
  }
};
xmlhttp.open("GET", "https://ln1.hispindia.org/uphmis230/api/organisationUnits.json?level=4&paging=0", true);
xmlhttp.send();
var ou=document.getElementById("orgUnits");
for(x in myArr){
    var newItem=document.createElement('li');   //create a list element
    newItem.id=myArr[x].id;		//add an id
    newItem.className="ui-sortable-handle";                      
    newItem.textContent=myArr[x].displayName;                      
   	ou.appendChild(newItem);                 //append to the doc.body
}
