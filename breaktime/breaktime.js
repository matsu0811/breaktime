"use strict";

$(".toggle").click(function () {
  $(this).toggleClass("on");
  $(".nav-right ul").toggleClass("add");
  $(".nav-right ul").slideToggle();
});
