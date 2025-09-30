$(document).ready(function () {

  $(".popCon_close").click(function () {
    $(".mainIntro_pop").hide();
    $('body').off('scroll touchmove mousewheel');
  });

  $(".btn ul li.modal_conent").click(function () {
    $(".modal_pop").show().animate({ scrollTop: 0 });
    $(".swiper-button-next, .swiper-button-prev").hide();
    $("#fp-nav").hide();
    $(".main_tit").hide();

    $('body').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".back").click(function () {
    $(".modal_pop").hide();
    $(".swiper-button-next, .swiper-button-prev").show();
    $("#fp-nav").show();
    $(".main_tit").show();
    $('body').off('scroll touchmove mousewheel');
  });

  $(".btn ul li.frame_conent").click(function () {
    $(".frame_pop").show();
    $(".swiper-button-next, .swiper-button-prev").hide();
    $('#fp-nav').hide();

    $('body').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });
  
  $(".btn ul li.moFrame_conent").click(function () {
    $(".moFrame_pop").show();
    $(".swiper-button-next, .swiper-button-prev").hide();
    $('#fp-nav').hide();

    $('body').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".close-btn").click(function () {
    $(".pop").hide();
    $(".swiper-button-next, .swiper-button-prev").show();
    $('#fp-nav').show();
    $('body').off('scroll touchmove mousewheel');
  });

  $("#s6 .design_content .card").click(function(){
    itemIdx = $(this).index();

    $('#s6 .g_page span:nth-child(1)').text(itemIdx + 1); 
    $('#s6 .ui_con>li').eq(itemIdx).fadeIn(); 
    $('#s6 .ui_modal').stop().fadeIn(); 

    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
    });

  $('#s6 .pre').click(function () {
    if (itemIdx > 0) {
      $('.ui_con>li').eq(itemIdx).fadeOut();
      itemIdx--;
      $('.g_page span:nth-child(1)').text(itemIdx + 1);
      $('.ui_con>li').eq(itemIdx).stop().fadeIn();
      $('.ui_modal').animate({ scrollTop: 0 });
    }
  });
  $('#s6 .next').click(function () {
    if (itemIdx < 6) {
      $('.ui_con>li').eq(itemIdx).fadeOut();
      itemIdx++;
      $('.g_page span:nth-child(1)').text(itemIdx + 1);
      $('.ui_con>li').eq(itemIdx).stop().fadeIn();
      $('.ui_modal').animate({ scrollTop: 0 });
    }
  });

  $('#s6 .close').click(function () {
    $('.ui_modal').stop().fadeOut();
    $('.modal-content>li').stop().hide();
    $('body').off('scroll touchmove mousewheel');
  });

  $("#s7 .design_content .card").click(function(){
    itemIdx = $(this).index();

    $('#s7 .g_page span:nth-child(1)').text(itemIdx + 1); 
    $('#s7 .gp_con>li').eq(itemIdx).fadeIn(); 
    $('#s7 .gp_modal').stop().fadeIn(); 

    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
    });

  $('#s7 .pre').click(function () {
    if (itemIdx > 0) {
      $('.gp_con>li').eq(itemIdx).fadeOut();
      itemIdx--;
      $('.g_page span:nth-child(1)').text(itemIdx + 1);
      $('.gp_con>li').eq(itemIdx).stop().fadeIn();
      $('.gp_modal').animate({ scrollTop: 0 });
    }
  });
  $('#s7 .next').click(function () {
    if (itemIdx < 7) {
      $('.gp_con>li').eq(itemIdx).fadeOut();
      itemIdx++;
      $('.g_page span:nth-child(1)').text(itemIdx + 1);
      $('.gp_con>li').eq(itemIdx).stop().fadeIn();
      $('.gp_modal').animate({ scrollTop: 0 });
    }
  });

  $('#s7 .close').click(function () {
    $('.gp_modal').stop().fadeOut();
    $('.gp_con>li').stop().hide();
    $('body').off('scroll touchmove mousewheel');
  });
});