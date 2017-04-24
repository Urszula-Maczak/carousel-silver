$(function() {
			var carouselList = $("#carousel ul");

			setInterval(changeSlide, 3000);

			function changeSlide() {
				//$('#next').click(function() {
					//carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
				//});
			};

			function moveFirstSlide() {
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});

			};

			$("#next").on('click', function() {
				//console.log("Działa przód!");
				$("img").animate({
					'marginLeft': '-=600px'
				}, 500, moveFirstSlide);/*, function() {
					$("img").find('li:last').after($(this).find('li:first'));
					$("img").css({marginLeft:0}); //----- http://www.my-html-codes.com/easy-jquery-carousel
				})*/
			});

			$("#prev").on('click', function() {
				//console.log("Działa wstecz!");
				$("img").animate({
					'marginLeft': '+=600px'
				}, 500, moveFirstSlide);
			});
});

