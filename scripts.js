window.onload = function() {
  document.getElementById('header_s').style.fontSize = '50px'
};

Click = document.querySelector("#header h1");
Click.onclick = function() {
  Click.classList.toggle("click");
};

list_0 = document.querySelector("div#ingredients");
list_0.onclick = function() {
  list_0.classList.toggle("hide");
};

list_1 = document.querySelector("div#equipment");
list_1.onclick = function() {
  list_1.classList.toggle("hide");
};

list_2 = document.querySelector("div#directions");
list_2.onclick = function() {
  list_2.classList.toggle("hide");
};

var element = document.getElementById("new");
element.innerHTML = "By:Tarren McDaniel";


// JavaScript for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}

window.onload = function() {
  
  loadFileInto("ingredients.html","ingredients");
  
  loadFileInto("equipment.html","equipment");
  
  loadFileInto("directions.html","directions");
  
};