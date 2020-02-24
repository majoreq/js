document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementsByClassName("btn btn-success");

  var counter = 0;
  function clicks(event){
    counter += 1;
    console.log("click nr: " + counter );
  }

  button[0].addEventListener("click" , clicks);
})
