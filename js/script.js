// Iframe Container Float to bottom left Corner On Scroll// 
// $(function() {
// 	var header = $(".header");
// 	$(window).scroll(function() {
// 	var scroll = $(window).scrollTop();
	
// 	if (scroll > 120) {
// 	$('#webtv-iframe-container').removeClass('iframe-container').addClass("iframe-container-scroll-effect");
// 	} else {
// 	$('#webtv-iframe-container').removeClass("iframe-container-scroll-effect").addClass('iframe-container');
// 	}
// 	});
// 	});
    // Iframe Container Float to bottom left Corner On Scroll//
    
    /////////////////////////////////////////////////////////
	// Search Navbar Show Hide //
    $(document).ready(function(){
    $("#search-btn").click(function(){
    $("#searchbox").toggleClass("search-nav-show");
    });
    });
   ////////////////////////////////////////////////////
   
   // Search Navbar Show Hide //
    // Watch Video ON PopUp //
// $( document ).ready(function() {
//         $('#watch-trailer-link').magnificPopup({
//         type:'inline',
//         midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//         });
        
//         });
//         // Second-Link
//         $( document ).ready(function() {
//         $('#watch-online-link').magnificPopup({
//         type:'inline',
//         midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//         });
        
//         });
    // Watch Video ON POP UP End //

    
// Owl Carousel
// ====================================================================
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    stagePadding: 100,
    responsive:{
        0:{
            items:2,
            stagePadding: 20,
        },
        600:{
            items:2,
            stagePadding: 50
        },
        801: {
            items: 3,
            stagePadding: 50
        },
        1000:{
            items:3,
            stagePadding: 70
        },
        1200: {
            items:3,
            stagePadding: 80,
        },
        1300: {
            items: 4
        }
 
    }
})
// ====================================================================

// Add the following code if you want the name of the file appear on select
// ====================================================================
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// ====================================================================

// Initializing Select2 
// ====================================================================
//Adding Select2bs4 class to all select elements
$(document).ready(function(){
    $('select').addClass('select2bs4');
    console.log($('select').attr('class'));
});

$(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });    
});

// var atr = sc.getAttribute("placeholder", "search");
// ====================================================================


// Filter Select Dropdown
// ====================================================================
$(document).ready(function () {
    $(".main-select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            var disabled = $(this).attr('disbabled');
            if (optionValue) {
                $(".sb-category").not("." + optionValue).hide();
                $("." + optionValue).show();
                $(".sb-category1").hide();
            } else {
                $(".sb-category").hide();
            }
        });
    }).change();
});

// =====================================================================

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('horizontalImg');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  //
var loadFileVert = function(event) {
    var readerVert = new FileReader();
    readerVert.onload = function(){
      var outputVert = document.getElementById('verticalImg');
      outputVert.src = readerVert.result;
    };
    readerVert.readAsDataURL(event.target.files[0]);
  };
  //
  
  var loadFileMob = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('horizontalImgMobView');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // ==================================================================

