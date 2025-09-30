$(document).ready(function () {

  $("#s3 .slide1 .btn ul li.modal_conent").click(function () {
    introA();
  });

  const tlA = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introA() {
    tlA.from('.pop1 .main_text h2', { duration: 0.5 });
    tlA.from('.pop1  .main_text h3', { x: -50, duration: 0.3 });
    tlA.from('.pop1 .main_text p', { x: 50 }, '<');
    tlA.from('.pop1 .puration', { y: 50 });
    tlA.from('.pop1 .tool', { y: 50 });
    tlA.from('.pop1 .sub img:nth-child(3)', { x: 50, y:50, duration: 0.3 }, '<');
    tlA.from('.pop1 .sub img:nth-child(2)', { x: 50, y: 50, duration: 0.3 });
    tlA.from('.pop1 .sub img:nth-child(1)', { x: 50, y: 50, duration: 0.3 });
  };

  const ScrPop1 = $('.pop1');

  ScrPop1.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 3200) {
      $('.pop1 .project .main01 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3400) {
      $('.pop1 .project .main02 .video').addClass("video_ani");
    };
    if ($this.scrollTop() > 3700) {
      $('.pop1 .project .main02 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3800) {
      $('.pop1 .project .main03 .video').addClass("video_ani");
    };
    if ($this.scrollTop() > 4000) {
      $('.pop1 .project .main03 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4800) {
      $('.pop1 .project .sub01').addClass("sub_ani");
    };
    if ($this.scrollTop() > 5500) {
      $('.pop1 .project .sub02').addClass("sub_ani");
    };
    if ($this.scrollTop() > 6300) {
      $('.pop1 .project .sub03').addClass("sub_ani");
    };
    if ($this.scrollTop() > 7500) {
      $('.pop1 .mo_content_in .main_text').addClass("mainText_ani");
    };
  });

  $("#s3 .slide2 .btn ul li.modal_conent").click(function () {
    introB();
  });

  const tlB = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introB() {
    tlB.from('.pop2 .main_text h2', { duration: 0.5 });
    tlB.from('.pop2  .main_text h3', { x: -50, duration: 0.3 });
    tlB.from('.pop2 .main_text p', { x: 50 }, '<');
    tlB.from('.pop2 .puration', { y: 50 });
    tlB.from('.pop2 .tool', { y: 50 });
  };

  const ScrPop2 = $('.pop2');

  ScrPop2.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 1900) {
      $('.pop2 .plan_03 .plan_03_image img').addClass("plan_ani");
    };
    if ($this.scrollTop() > 2900) {
      $('.pop2 .project .main01 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3700) {
      $('.pop2 .project .main02 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3750) {
      $('.pop2 .project .main02 .illu').addClass("illu_ani");
    };
    if ($this.scrollTop() > 4100) {
      $('.pop2 .project .main03 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4150) {
      $('.pop2 .project .main03 .illu').addClass("illu_ani");
    };
    if ($this.scrollTop() > 4600) {
      $('.pop2 .project .main04 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4650) {
      $('.pop2 .project .main04 .illu').addClass("illu_ani");
    };
    if ($this.scrollTop() > 5600) {
      $('.pop2 .mo_content_in .main_text').addClass("mainText_ani");
    };
  });

  $("#s3 .slide3 .btn ul li.modal_conent").click(function () {
    introC();
  });

  const tlC = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introC() {
    tlC.from('.pop3 .main_text h2', { duration: 0.5 });
    tlC.from('.pop3  .main_text h3', { x: -50, duration: 0.3 });
    tlC.from('.pop3 .main_text p', { x: 50 }, '<');
    tlC.from('.pop3 .puration', { y: 50 });
    tlC.from('.pop3 .tool', { y: 50 });
  };

  const ScrPop3 = $('.pop3');

  ScrPop3.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 2100) {
      $('.pop3 .project .main01 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3000) {
      $('.pop3 .project .main02 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3800) {
      $('.pop3 .project .main03 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4900) {
      $('.pop3 .project .main04 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 5900) {
      $('.pop3 .project .main05 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 6800) {
      $('.pop3 .project .main06 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 7800) {
      $('.pop3 .mo_content_in .main_text').addClass("mainText_ani");
    };
  });

  $("#s4 .slide1 .btn ul li.modal_conent").click(function () {
    introD();
  });

  const tlD = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introD() {
    tlD.from('.pop4 .main_text h2', { duration: 0.5 });
    tlD.from('.pop4  .main_text h3', { x: -50, duration: 0.3 });
    tlD.from('.pop4 .main_text p', { x: 50 }, '<');
    tlD.from('.pop4 .puration', { y: 50 });
    tlD.from('.pop4 .tool', { y: 50 });
    tlD.from('.pop4 .intro_right img:nth-child(2)', { y: 100, duration: 0.5 }, '<');
    tlD.from('.pop4 .intro_right img:nth-child(3)', { x: 100, duration: 0.5 }, '<');
  };

  const ScrPop4 = $('.pop4');

  ScrPop4.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 3700) {
      $('.pop4 .main:nth-of-type(1) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 4400) {
      $('.pop4 .main:nth-of-type(2) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 4600) {
      $('.pop4 .main:nth-of-type(3) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 5400) {
      $('.pop4 .main:nth-of-type(4) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 6000) {
      $('.pop4 .main:nth-of-type(5) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 6600) {
      $('.pop4 .main:nth-of-type(6) .moMain').addClass("mo_ani");
    };
    if ($this.scrollTop() > 8800) {
      $('.pop4 .mo_content_in .main_text').addClass("mainText_ani");
    };
  });

  $("#s4 .slide2 .btn ul li.modal_conent").click(function () {
    introE();
  });

  const tlE = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introE() {
    tlE.from('.pop5 .main_text h2', { duration: 0.5 });
    tlE.from('.pop5  .main_text h3', { x: -50, duration: 0.3 });
    tlE.from('.pop5 .main_text p', { x: 50 }, '<');
    tlE.from('.pop5 .puration', { y: 50 });
    tlE.from('.pop5 .tool', { y: 50 });
    tlE.from('.pop5 .intro_right img:nth-child(1)', { x: 50 }, '<');
    tlE.from('.pop5 .intro_right img:nth-child(2)', { x: 100, duration: 0.5 });
    tlE.from('.pop5 .intro_right img:nth-child(3)', { x: 100, duration: 0.5 });
  };

  const ScrPop5 = $('.pop5');

  ScrPop5.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 900) {
      $('.pop5 .concept .plan_01 img').addClass("plan_ani");
    };
    if ($this.scrollTop() > 2000) {
      $('.pop5 .concept .plan_03 img:not(:nth-of-type(1))').addClass("plan_aniB");
    };
    if ($this.scrollTop() > 3000) {
      $('.pop5 .concept .plan_05 img').addClass("plan_aniC");
    };
    if ($this.scrollTop() > 3900) {
      $('.pop5 .concept .plan_06 img').addClass("plan_ani");
    };
    if ($this.scrollTop() > 7400) {
      $('.pop5 .project .pc_menu').addClass("pc_ani");
    };
    if ($this.scrollTop() > 7500) {
      $('.pop5 .project .pc_scroll').addClass("pcScroll_ani");
    };
    if ($this.scrollTop() > 8100) {
      $('.pop5 .project .uni_section1').addClass("pc_ani");
    };
    if ($this.scrollTop() > 8400) {
      $('.pop5 .project .uni_section2').addClass("pc_ani");
    };
    if ($this.scrollTop() > 9700) {
      $('.pop5 .mo_content .main_text').addClass("mo_con_aniA");
      $('.pop5 .mo_content img:last-child').addClass("mo_con_aniB");
    };
  });

  $("#s5 .slide1 .btn ul li.modal_conent").click(function () {
    introF();
  });

  const tlF = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introF() {
    tlF.from('.pop6 .main_text h2', { duration: 0.5 });
    tlF.from('.pop6  .main_text h3', { x: -50, duration: 0.3 });
    tlF.from('.pop6 .main_text p', { x: 50 }, '<');
    tlF.from('.pop6 .puration', { y: 50 });
    tlF.from('.pop6 .tool', { y: 50 });
    tlF.from('.pop6 .intro_right img:nth-child(2)', { y: -50, ease: "power4.out" }, '<');
    tlF.from('.pop6 .intro_right img:nth-child(3)', { y: 50, ease: "power4.out", duration: 0.5 }, '<');
    tlF.from('.pop6 .intro_right img:nth-child(1)', { y: -50},'-=.35');
  };

  const ScrPop6 = $('.pop6');

  ScrPop6.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 2300) {
      $('.pop6 .project .main01 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 2800) {
      $('.pop6 .project .main02').addClass("video_ani");
    };
    if ($this.scrollTop() > 2850) {
      $('.pop6 .project .main02 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 3600) {
      $('.pop6 .project .main03').addClass("video_ani");
    };
    if ($this.scrollTop() > 3650) {
      $('.pop6 .project .main03 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4000) {
      $('.pop6 .project .main04').addClass("video_ani");
    };
    if ($this.scrollTop() > 4050) {
      $('.pop6 .project .main04 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 4800) {
      $('.pop6 .project .main05').addClass("video_ani");
    };
    if ($this.scrollTop() > 4850) {
      $('.pop6 .project .main05 .mainText').addClass("text_ani");
    };
    if ($this.scrollTop() > 6100) {
      $('.pop6 .mo_content .main_text').addClass("mainText_ani");
      $('.pop6 .mo_content>img').addClass("mainImage_ani");
    };
  });

  $("#s5 .slide2 .btn ul li.modal_conent").click(function () {
    introG();
  });

  const tlG = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.8,
    }
  });
  function introG() {
    tlG.from('.pop7 .main_text h2', { duration: 0.5 });
    tlG.from('.pop7  .main_text h3', { x: -50, duration: 0.3 });
    tlG.from('.pop7 .main_text p', { x: 50 }, '<');
    tlG.from('.pop7 .puration', { y: 50 });
    tlG.from('.pop7 .tool', { y: 50 });
    tlG.from('.pop7 .intro_right img:nth-child(1)', { x: -50 }, '<');
    tlG.from('.pop7 .intro_right img:nth-child(2)', { y: -30, x: -20, rotation: -20, duration: 0.5 }, '<');
  };

  const ScrPop7 = $('.pop7');

  ScrPop7.scroll(function () {
    const $this = $(this);
    // console.log($this.scrollTop());

    if ($this.scrollTop() > 1300) {
      $('.pop7 .concept .plan_04').addClass("animate");
    };
    if ($this.scrollTop() > 4000) {
      $('.pop7 .login').addClass("arrow");
    };
    if ($this.scrollTop() > 5000) {
      $('.pop7 .item3 .text').addClass("con-ar");
    };
    if ($this.scrollTop() > 5400) {
      $('.pop7 .item3 .image').addClass("conA");
    };
    if ($this.scrollTop() > 5900) {
      $('.pop7 .item1 p').addClass("conB");
      $('.pop7 .item2 .text').addClass("con-ar");
    };
    if ($this.scrollTop() > 6000) {
      $('.pop7 .item2 .image').addClass("conC");
    };
    if ($this.scrollTop() > 6400) {
      $('.pop7 .item4 span:nth-of-type(1)').addClass("con-ar");
    };
    if ($this.scrollTop() > 6800) {
      $('.pop7 .item4 .image').addClass("conD");
    };
    if ($this.scrollTop() > 7000) {
      $('.pop7 .item4 span:nth-of-type(2)').addClass("con-ar");
      $('.pop7 .item4 p:last-child').addClass("con-ar");
    };
    if ($this.scrollTop() > 7200) {
      $('.pop7 .home_text').addClass("con-ar");
    };
    if ($this.scrollTop() > 8200) {
      $('.pop7 .item6').addClass("conE");
    };
    if ($this.scrollTop() > 8300) {
      $('.pop7 .item7').addClass("conE");
    };
    if ($this.scrollTop() > 8700) {
      $('.pop7 .item8 span').addClass("con-ar");
    };
    if ($this.scrollTop() > 9200) {
      $('.pop7 .item8 .con').addClass("conF");
    };
    if ($this.scrollTop() > 11000) {
      $('.pop7 .mo_content .main_text').addClass("con_aniA");
      $('.pop7 .mo_content>img').addClass("con_aniB");
    };
  });

});