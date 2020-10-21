var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
  }
};
var body = document.getElementsById("demo");
for(obj of myArr)
    newdiv = document.createElement('div');   //create a div
    newdiv.id = obj.id;                       //add an id
    newdiv.innerhtml=obj.displayName;                      
    body.appendChild(newdiv);                 //append to the doc.body
xmlhttp.open("GET", "api/organisationUnits.json?level=4&paging=0", true);
xmlhttp.send();
