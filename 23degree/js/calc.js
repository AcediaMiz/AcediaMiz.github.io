var slider = document.getElementById("myRange");
var a = 850;
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var tg = slider.value * document.getElementById("demo_1").innerHTML;
slider.oninput = function () {
  output.innerHTML = this.value + "m2";
  document.getElementById("demo_2").innerHTML = slider.value * a + "  тг.";
};

function fun1() {
  a = 850;
  var rad = document.getElementsByName("package");
  for (var i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      if (i == 0) {
        document.getElementById("demo_1").innerHTML = a + "  тг.";
        document.getElementById("label_1").classList.add("active");
        document.getElementById("label_2").classList.remove("active");
        document.getElementById("label_3").classList.remove("active");
        document.getElementById("demo_2").innerHTML =
          slider.value * a + "  тг.";
      } else if (i == 1) {
        a = 950;
        document.getElementById("demo_1").innerHTML = a + "  тг.";
        document.getElementById("label_2").classList.add("active");
        document.getElementById("label_1").classList.remove("active");
        document.getElementById("label_3").classList.remove("active");
        document.getElementById("demo_2").innerHTML =
          slider.value * a + "  тг.";
      } else if (i == 2) {
        a *= 1.5;
        document.getElementById("demo_1").innerHTML = a + "  тг.";
        document.getElementById("label_3").classList.add("active");
        document.getElementById("label_2").classList.remove("active");
        document.getElementById("label_1").classList.remove("active");
        document.getElementById("demo_2").innerHTML =
          slider.value * a + "  тг.";
      }
    }
  }
}
