/*! pages-boiler-plate - v1.0.0 - 2017-05-21 */"use strict";$(document).ready(function(){$('[data-pages="search"]').search({searchField:"#overlay-search",closeButton:".overlay-close",suggestions:"#overlay-suggestions",brand:".brand",onSearchSubmit:function(a){console.log("Search for: "+a)},onKeyEnter:function(a){console.log("Live search for: "+a);var b=$("#overlay-search"),c=$(".search-results");clearTimeout($.data(this,"timer")),c.fadeOut("fast");var d=setTimeout(function(){c.find(".result-name").each(function(){0!=b.val().length&&($(this).html(b.val()),c.fadeIn("fast"))})},500);$(this).data("timer",d)}});new Swiper("#hero",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",parallax:!0,speed:1e3}),new Swiper("#testimonials_slider",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",parallax:!0,speed:1e3})});