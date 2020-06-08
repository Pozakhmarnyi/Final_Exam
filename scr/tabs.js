// таби

$(".content_in_2but").hide();
$(".content_in_3but").hide();

$(".but1").click(function () {
  $(".content_in_1but").show("slow", function () {});
  $(".content_in_2but").hide();
  $(".content_in_3but").hide();
});
$(".but2").click(function () {
  $(".content_in_1but").hide();
  $(".content_in_2but").show("slow", function () {});
  $(".content_in_3but").hide();
});

$(".but3").click(function () {
  $(".content_in_1but").hide();
  $(".content_in_2but").hide();
  $(".content_in_3but").show("slow", function () {});
});

// СЛАйдер

$(document).ready(function () {
  let $slider = $(".slider2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  });

  $("#prev").click(function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $("#next").click(function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});

// Гармошка ==============

$("#F").click(function () {
  $("#text").slideToggle("slow", function () {});
  $("#text2").hide();
  $("#text3").hide();
  $("#text4").hide();
});

$("#S").click(function () {
  $("#text2").slideToggle("slow", function () {});
  $("#text").hide();
  $("#text3").hide();
  $("#text4").hide();
});

$("#T").click(function () {
  $("#text3").slideToggle("slow", function () {});
  $("#text").hide();
  $("#text2").hide();
  $("#text4").hide();
});

$("#f").click(function () {
  $("#text4").slideToggle("slow", function () {});
  $("#text").hide();
  $("#text2").hide();
  $("#text3").hide();
});

// slider BIG

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    // таким нехитрим чином, зробив стрілки, такими, як треба... прикрутив їх...

    arrows: true,
    prevArrow: $("#prev2"),
    nextArrow: $("#next2"),
  });
});

// ПЛАВНИЙ СКРОЛ ПО СТОРІНЦІ - при натискання на меню
$(document).ready(function () {
  $(`a[href^="#"]`).click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $("html").animate({ scrollTop: destination }, 1000);
  });
});
