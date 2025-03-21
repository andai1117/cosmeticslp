$(function () {
  $('a[href^="#"]').click(function() {
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop : position}, 600, 'swing');
    return false;
});

  $(".topics-list").slick({
  slidesToShow:3,
  slideToScroll:1,
  centerMode:true,
  responsive: [{
    breakpoint: 650, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      autoPlay:true,
      speed: 600,
    },},]
});
  $(".lotion-list").slick({
  slidesToShow:3,
  slideToScroll:1,
  centerMode:true,
  responsive: [{
    breakpoint: 650, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      autoPlay:true,
      speed: 600,
    },},]
});
  $(".serum-list").slick({
  slidesToShow:3,
  slideToScroll:1,
  centerMode:true,
  responsive: [{
    breakpoint: 650, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      autoPlay:true,
      speed: 600,
    },},]
});
  $(".milklotion-list").slick({
  slidesToShow:3,
  slideToScroll:1,
  centerMode:true,
  responsive: [{
    breakpoint: 650, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      autoPlay:true,
      speed: 600,
    },},]
});
  $(".cream-list").slick({
  slidesToShow:3,
  slideToScroll:1,
  centerMode:true,
  responsive: [{
    breakpoint: 650, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      autoPlay:true,
      speed: 600,
    },},]
});

$('.toggle_btn').on('click', function() {
  if ($('header').hasClass('open')) {
    $('header').removeClass('open');
  } else {
    $('header').addClass('open');
  }
});

$(".navi-menu a").on("click", function () {
  $("header").toggleClass("open");
});
});