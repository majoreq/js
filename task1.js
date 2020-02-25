document.addEventListener("DOMContentLoaded", function() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");

  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");

  var counter = 0;
  var newButton = '<button type="button" class="btn btn-success">NowyKliker</button>'

  function clicks(event) {
    counter += 1;
    p1.innerHTML = "click " + counter;
  }

  function addButton(event) {
    p2.innerHTML += newButton;
  }

  $(p2).on('click', 'button', clicks);
  btn1.addEventListener("click", clicks);
  btn2.addEventListener("click", addButton);
});
