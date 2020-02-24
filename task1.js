document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementsByClassName("btn btn-success");
  var counter = 0;

  function clicks(event){
    counter += 1;
    button[0].addEventListener("click" , clicks);
    var paragraph = document.getElementById("text");
    paragraph.innerHTML = "click " + counter;
  }

  button[0].addEventListener("click" , clicks);
})
