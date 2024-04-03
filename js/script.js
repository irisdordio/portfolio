console.log("javascript on!");

$(document).ready(function () {
  $(".burger").on("click", function () {
    $("nav").toggleClass("active");
    $(".burger").toggleClass("active");
  });
});