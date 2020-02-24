document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementsByClassName("btn btn-success");
  var counter = 0;
  var newButton = '<button type="button" class="btn btn-success">Success</button>'

  function clicks(event){
    counter += 1;
    button[0].addEventListener("click" , clicks);
    var paragraph = document.getElementById("text");

    paragraph.innerHTML = "click " + counter;
    paragraph.outerHTML += newButton;
  }

  button[0].addEventListener("click" , clicks);
})
