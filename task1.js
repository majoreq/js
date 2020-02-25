document.addEventListener("DOMContentLoaded", function() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");

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

  function hideButton(event) {
    if (btn3.value == "show") {
      document.getElementById("mainbody").style.display = "none";
      btn3.value = "hide";
    } else if (btn3.value == "hide") {
      document.getElementById("mainbody").style.display = "";
      btn3.value = "show";
    }

  }

  $(btn3).on('click', hideButton);
  $(p2).on('click', 'button', clicks);
  btn1.addEventListener("click", clicks);
  btn2.addEventListener("click", addButton);
});
