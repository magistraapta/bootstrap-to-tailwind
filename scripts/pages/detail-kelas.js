$("#pills-tab .nav-link").on("click", function () {
  if ($(this).attr("id") === "pills-tools-tab" || $(this).attr("id") === "pills-portfolios-tab") {
    $("#pills-about").removeClass("active");
    $("#pills-about").removeClass("show");
  }
});

function scrollToSection(e) {
  var scrollTo = $(e).attr("data-scroll-to");

  const triggerEl = document.querySelectorAll('#pills-tab button[data-bs-target="#pills-about"]')[0];
  bootstrap.Tab.getInstance(triggerEl).show();

  window.scrollTo({
    top: $(scrollTo).offset().top,
    left: 0,
    behavior: "smooth",
  });

  if ($(e).hasClass("nav-link")) {
    // deactivate state button/pills
    $("#pills-tab .nav-link").removeClass("active");
    // add active class to clicked element
    $(e).addClass("active");
  }
}

// START: Desktop
$(function () {
  $("#btn-lainnya").on("click", function (e) {
    e.preventDefault();

    // remove class active and change aria-selected in current tab
    $("#pills-tab>.nav-item>.nav-link.active").attr("aria-selected", "false").removeClass("active");

    // update pills lessons tab
    $("#pills-lessons-tab").attr("aria-selected", "true").addClass("active");

    // remove class show and active in current tab section
    const tabPaneActive = $(".tab-content>.tab-pane.active.show");
    tabPaneActive.removeClass("show");

    setTimeout(function () {
      tabPaneActive.removeClass("active");

      // update pills lessons tab section
      $("#pills-lessons").addClass("active show");

      // scroll into content Lessons "Happy Learning"
      document.querySelector("#content-lessons").scrollIntoView({
        behavior: "smooth",
      });
    }, 250);
  });
});

// {{-- Load More Lessons untuk Kelas Required --}}
$(function () {
  $("div.item-lessons").slice(0, 2).show();
  $("#loadMoreLessons").on("click", function (e) {
    e.preventDefault();
    $("div.item-lessons:hidden").slice(0, 2).slideDown();
    if ($("div.item-lessons:hidden").length == 0) {
      $("#loadMoreLessons").fadeOut("slow");
    }
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top - 420,
      },
      250
    );
  });
});

// {{-- Load More untuk Kelas Materi Kelas --}}
$(function () {
  $("div.item-materi").slice(0, 2).show();
  $("#loadMoreMateri").on("click", function (e) {
    e.preventDefault();
    $("div.item-materi:hidden").slice(0, 2).slideDown();
    if ($("div.item-materi:hidden").length == 0) {
      $("#loadMoreMateri").fadeOut("slow");
    }
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top - 750,
      },
      250
    );
  });
});

// {{-- Load More untuk Kelas Materi Kelas pada Tab About - Update Terbaru --}}
$(function () {
  $("div.lessons-col").slice(0, 3).show();
  $("#loadMoreLessons2").on("click", function (e) {
    e.preventDefault();
    $("div.lessons-col:hidden").slice(0, 3).slideDown();
    if ($("div.lessons-col:hidden").length == 0) {
      $("#loadMoreLessons2").fadeOut("slow");
    }
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top - 250,
      },
      250
    );
  });
});
// END: Desktop

// START: Mobile
$(() => {
  var timer;
  $(window).on("scroll", function () {
    if (timer != "undefined") {
      clearTimeout(timer);
    }
    $(".buy-course-mobile, #bannerAdminModeView").fadeOut();
    timer = setTimeout(function () {
      $(".buy-course-mobile, #bannerAdminModeView").fadeIn();
    }, 200);
  });
});
// END: Mobile

// Use in Mobile - Desktop
$(function () {
  //Remove only first active image border in carousel-preview (mini carousel)
  $(".__carousel-preview .flickity-slider img")
    .not(":first")
    .on("click", function () {
      $(".__carousel-preview .flickity-slider img:first-child").removeClass("is-selected is-nav-selected");
    });

  function firstFlickitySlider() {
    //remove active mini carousel
    $(".flickity-slider").children("img.is-selected.is-nav-selected").removeClass("is-selected is-nav-selected");
    $(".__main-preview .flickity-slider").children("img.is-selected").removeClass("is-selected");

    //Force flickity slider position to left
    $(".flickity-slider").css("transform", "translateX(0%)");

    //$('.flickity-slider img').removeAttr('style')
    //add active mini carousel
    $(".__carousel-preview .flickity-slider img:first-child").addClass("is-selected is-nav-selected").removeAttr("aria-hidden");
    $(".__main-preview .flickity-slider #player").addClass("is-selected");
  }

  function embedTrailerSource() {
    var embedCode = $("#courseTrailerEmbed").attr("data-trailer");
    var iframe = $(".__desktop-player #player iframe");
    var iframeMobile = $(".__main-preview #player iframe");
    var url = `https://www.youtube.com/embed/${embedCode}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&autoplay=0`;

    if ($(window).width() < 576) {
      $(iframeMobile).attr("src", url);
      $(iframe).attr("src", "");

      //Force flickity slider position to left
      firstFlickitySlider();
    } else {
      $(iframe).attr("src", url);
      $(iframeMobile).attr("src", "");
    }
  }

  //Function Preview Video Materi
  $(document).on("click", ".btn-preview-materi", function () {
    let _this = $(this);
    let video_id = _this.attr("href").substr(1);
    let urlSrc = "https://www.youtube.com/embed/" + video_id + "?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&autoplay=0";
    var srcVideo = '<div class="plyr__video-embed ratio video-place ratio-16x9 sticky-custom" id="player"><iframe src="' + urlSrc + '" allowfullscreen allowtransparency autoplay="0"></iframe></div>';

    // statement for mobile || tablet - desktop
    if ($(window).width() < 576) {
      //Scroll after click - go to top page
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

      $(".__main-preview.course-plyr .flickity-slider #player iframe").attr("src", urlSrc);
      //Force flickity slider position to left
      firstFlickitySlider();
    } else {
      $(".btn-preview-materi").removeClass("active");
      _this.addClass("active");
      $(".__desktop-player #player").remove();
      $(".__desktop-player.course-plyr").append(srcVideo);

      setStickyIframe();
    }
    //initPlayer()
  });

  //Append iframe src when document first load
  embedTrailerSource();

  // Requiring -- scripts/windowResizeCallback.js
  //run embedTrailerSource after screen resize
  //$(window).resize(function() {
  //    //execute embedTrailerSource after resize is finish
  //    windowResizeCallback(function() {
  //        //embedTrailerSource()
  //        //Force flickity slider position to left
  //        firstFlickitySlider()
  //    }, 500, "courseDetailsWindow");
  //});
});

if (isPhone) {
  $(function () {
    $(".__main-preview").removeClass("d-none").flickity({
      pageDots: false,
      prevNextButtons: false,
      draggable: false,
    });

    $(".__carousel-preview").removeClass("d-none").flickity({
      asNavFor: ".__main-preview",
      contain: false,
      pageDots: false,
      prevNextButtons: false,
      groupCells: true,
      cellAlign: "left",
      hash: true,
    });

    $(".__main-preview .flickity-viewport").css({
      height: "250px",
    });
    $(".__main-preview .flickity-slider #player").css({
      height: "250px",
    });
  });
}

let stickyToggle = true;
function setStickyIframe() {
  var elementTarget = document.getElementById("player");
  if (stickyToggle) {
    if (window.scrollY > window.innerHeight + elementTarget.offsetHeight) {
      $("#player").addClass("show-sticky");
      setTimeout(function () {
        $("#player").addClass("animate-sticky");
      }, 300);
    } else {
      $("#player").removeClass("show-sticky");
      $("#player").removeClass("animate-sticky");
    }
  }
}
$(document).on("scroll", function () {
  setStickyIframe();
});
