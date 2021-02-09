$(function () {
  $(".ham_btn").on("click", function () {
    $(this).toggleClass("ham_btn_move");
    $(".hdr_nav").toggleClass("hdr_nav_move");
  });
})