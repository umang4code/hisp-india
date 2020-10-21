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
var body = document.getElementById("demo");
var x;
var newpara;
for(x in myArr){
    newpara = document.createElement('p');   //create a p
    newpara.id = myArr[x].id;                       //add an id
    newpara.innerHTML=myArr[x].displayName;                      
   document.body.appendChild(newpara);                 //append to the doc.body
}
