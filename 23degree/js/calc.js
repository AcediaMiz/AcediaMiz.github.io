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
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("portfolio__item");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i] != cityName) {
      tabcontent[i].style.display = "none";
    }
  }
  tablinks = document.getElementsByClassName("portfolio__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  if (cityName == "item_1") {
    document.getElementById("event_1").classList.add("active");
  }
  if (cityName == "item_2") {
    document.getElementById("event_2").classList.add("active");
  }
  if (cityName == "item_3") {
    document.getElementById("event_3").classList.add("active");
  }
  document.getElementById(cityName).classList.add("active");
  document.getElementById(cityName).style.display = "grid";
}
function open1() {
  var tablinks = document.getElementsByClassName("portfolio__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById("event").classList.add("active");
  var item = document.getElementsByClassName("portfolio__item");
  for (i = 0; i < item.length; i++) {
    item[i].classList.add("active");
    item[i].style.display = "grid";
  }
}
