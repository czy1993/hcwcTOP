$(".bm_ul01 li").on("mousemove", function() {
  $(".bm_search").hide();
  $(".zj_bz").show();
  $(".bl_lop").show();
  $(".bl_login").hide();
});
$(".bl_shous").on("mousemove", function() {
  $(".bm_search").show();
  $(".bl_lop").hide();
  $(".zj_bz").show();
  $(".bl_login").hide();
  $(".bm_jiao").hide();
  $(".zj_bz03").hide();
  $(".zj_bz02").hide();
  $(".zj_bz01").hide();
});
$(".bl_zcde").on("mousemove", function() {
  $(".bm_search").hide();
  $(".zj_bz").show();
  $(".bl_login").show();
  $(".bl_lop").hide();
  $(".bm_jiao").hide();
  $(".zj_bz03").hide();
  $(".zj_bz02").hide();
  $(".zj_bz01").hide();
});
// bm_active
$(".bm_ul01 li").on("mousemove", "a", function() {
  $(this).css("color", "rgba(178, 145, 100, 1)");
  $(this)
      .parent()
      .siblings()
      .children("a")
      .css("color", "rgba(33, 33, 33, 1)");
  // $(".bm_ul01 li:nth-child(1) a").css("color", "rgba(178, 145, 100, 1)");
});

$(".bl_lop").mouseout(function() {
  $(".bm_ul01 li a ").css("color", "rgba(33, 33, 33, 1)");
  // $(".bm_ul01 li:nth-child(1) a").css("color", "rgba(178, 145, 100, 1)");
});

$(".bl_lop li").on("mousemove", "a", function() {
  $(this).css("color", "rgba(233, 185, 120, 1)");
  $(this)
      .parent()
      .siblings()
      .children("a")
      .css("color", "#fff");
});
$(".bl_lop li").on("mouseleave", "a", function() {
  $(this).css("color", "white");
});
$(".bl_login p").on("mousemove", "a", function() {
  $(this).css("color", "rgba(233, 185, 120, 1)");
  $(this)
      .parent()
      .siblings()
      .children("a")
      .css("color", "#fff");
});
$(".bm_ul01>li").mousemove(function() {
  var index = $(this).index();
  if (index == 0) {
    $(".zj_bz01").show();
    $(".zj_bz01 .bm_jiao").show();
    $(".zj_bz").hide();
    $(".zj_bz03").hide();
    $(".zj_bz02").hide();
  }
  if (index == 1) {
    $(".zj_bz02").show();
    $(".zj_bz02 .bm_jiao").show();
    $(".zj_bz").hide();
    $(".zj_bz03").hide();
    $(".zj_bz01").hide();
  }
  if (index == 2) {
    $(".zj_bz03").show();
    $(".zj_bz03 .bm_jiao").show();
    $(".zj_bz").hide();
    $(".zj_bz02").hide();
    $(".zj_bz01").hide();
  }
  if (index == 3) {
    $(".zj_bz03").hide();
    $(".zj_bz").hide();
    $(".zj_bz02").hide();
    $(".zj_bz01").hide();
  }
  if (index == 4) {
    $(".zj_bz03").hide();
    $(".zj_bz").show();
    $(".zj_bz .bm_jiao").show();
    $(".zj_bz02").hide();
    $(".zj_bz01").hide();
  }
  if (index == 5) {
    $(".zj_bz").hide();
    $(".zj_bz03").hide();
    $(".zj_bz02").hide();
    $(".zj_bz01").hide();
  }
  if (index == 6) {
    $(".zj_bz").hide();
    $(".zj_bz03").hide();
    $(".zj_bz02").hide();
    $(".zj_bz01").hide();
  }
});
$(".zj_bz01").mouseleave(function() {
  $(".zj_bz01").hide();
});
$(".zj_bz02").mouseleave(function() {
  $(".zj_bz02").hide();
});
$(".zj_bz03").mouseleave(function() {
  $(".zj_bz03").hide();
});
$(".zj_bz").mouseleave(function() {
  $(".zj_bz").hide();
});
$(".bm_ul01").on("mouseleave", "li", function() {
  var index03 = $(this).index();
  if (index03 == 3 || 5 || 6) {
    $(this)
        .children("a")
        .css("color", "#000");
  }
});
