var xmlhttp = new XMLHttpRequest();
var myobj;
var myArr;
var noDistricts;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myobj = JSON.parse(this.responseText);
    myArr=myobj.organisationUnits;
    noDistricts=myArr.length;
  }
	var ou=document.getElementById("orgUnits");
	for(x in myArr){
    var newItem=document.createElement('li');   //create a list element
    newItem.id=myArr[x].id;		//add an id
    newItem.className="ui-sortable-handle";                      
    newItem.textContent=myArr[x].displayName;                      
   	ou.appendChild(newItem);                 //append to the doc.body
	}
  $(document).ready(function () {
            $('#orgUnits li').draggable({
          helper: "clone",
        start: function(e, ui)
        {
          $(ui.helper).addClass("ui-draggable-helper");
        }
        
                
            });

            $('#day1').droppable({
                drop: function (event, ui) {
                    $('#Monday').append(ui.draggable);
                }
            });

            $('#day2').droppable({
     
                drop: function (event, ui) {
                    $('#Tuesday').append(ui.draggable);
                }
            });
      $('#day3').droppable({
     
                drop: function (event, ui) {
                    $('#Wednesday').append(ui.draggable);
                }
            });
      $('#day4').droppable({
     
                drop: function (event, ui) {
                    $('#Thursday').append(ui.draggable);
                }
            });
      $('#day5').droppable({
     
                drop: function (event, ui) {
                    $('#Friday').append(ui.draggable);
                }
            });
      $('#day6').droppable({
     
                drop: function (event, ui) {
                    $('#Saturday').append(ui.draggable);
                }
            });
      
      
        });
};
xmlhttp.open("GET", "https://ln1.hispindia.org/uphmis230/api/organisationUnits.json?level=4&paging=0", true);
xmlhttp.send();
