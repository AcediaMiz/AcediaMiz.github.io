document.querySelector(".nav__btn").onclick = function () {
  document.querySelector(".nav__btn").classList.toggle("active");
  document.querySelector(".nav__list").classList.toggle("active");
};
document.querySelector(".nav__close").onclick = function () {
  document.querySelector(".nav__btn").classList.remove("active");
  document.querySelector(".nav__list").classList.remove("active");
};
$(function () {
  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $("html, body").animate({ scrollTop: dn }, 500);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});
