var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myobj = JSON.parse(this.responseText);
    var myArr=myobj.organisationUnits;
  }
};
xmlhttp.open("GET", "https://ln1.hispindia.org/uphmis230/api/organisationUnits.json?level=4&paging=0", true);
xmlhttp.send();
var body = document.getElementById("demo");

for(obj of myArr){
    newdiv = document.createElement('div');   //create a div
    newdiv.id = obj.id;                       //add an id
    newdiv.innerhtml=obj.displayName;                      
   body.appendChild(newdiv);                 //append to the doc.body
}
