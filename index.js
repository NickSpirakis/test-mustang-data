var urlcont = [];
var pageCounter = 1;
var pplContainer = document.getElementById("people-info");
var btn = document.getElementById("btn");

var btn2 = document.getElementById("btn2");
var contContainer = document.getElementById("contact-info");

btn.addEventListener("click", function() {
    btns();
});

function btns() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json'); //+ pageCounter + '.json');
    ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      //console.log(ourData[0]);
        renderHTML(ourData);
     
    };
    ourRequest.send();
    
  };
  

function renderHTML(data) {
  var htmlString = "";

  
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].Name + " " + data[i].Email + " " + data[i].ContactURL;
    
     urlcont.push(data[i].ContactURL)
    

    console.log(urlcont);
  }

  pplContainer.insertAdjacentHTML('beforeend', htmlString);
}


function btns2(URL){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', URL);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
         console.log(ourData[0]);
        renderHTML2(ourData);
     
         };
    
    ourRequest.send();
  };


  btn2.addEventListener("click", function() {
    contactHelper();
    
    console.log("btn2 hit");
    //for (i = 0; i < urlcont.length; i++) {
       // btns2(urlcont[i]);
   // }
  });


  function renderHTML2(data) {
    var htmlString = "";
  
    
    //for (i = 0; i < urlcont.length; i++) {
      htmlString += "<p>" + " first name: " + data.firstName + " last name: " + data.lastName + 
      " prefered name: " + 
      data.preferredName + " email: " + data.email + " phone number: " + data.phoneNumber
      + " class: " + data.class + " room: " + data.room + " Start: " + data.startTime + 
      " Seat: " + data.seatNumber + " inPerson: " + data.inPerson + " virtual: " + data.virtual 
      + " city: " + data.city + " state: " + data.state + " zip: " + data.zip +
       " lat: " + data.lat + " lng: " + data.lng + " hobby: " + data.favoriteHobby + " ";
   // }
    console.log(data.firstName + " " + data.lastName + " " + "loaded");

    contContainer.insertAdjacentHTML('beforeend', htmlString);
  }



  function contactHelper() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json'); //+ pageCounter + '.json');
    ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      //console.log(ourData[0]);
        //renderHTML(ourData);
        renderContactHelper(ourData);
    };
    ourRequest.send();
    
  };


  function renderContactHelper(data) {

    if (urlcont.length < 1){
        
    
     for (i = 0; i < data.length; i++) {
        urlcont.push(data[i].ContactURL)
        }
    }
        loopy();
    }

function loopy(){

    for (i = 0; i < urlcont.length; i++) {
        btns2(urlcont[i]);
    }
}