$(document).ready(function() {
	onResize();	
	
	$("#img_fallenstar").animate({"--progress": "1"}, {
		duration: 1000, step: function(val) {
			$(this).css({"--progress": val});
			
			const height = $(window).height();
			const width = $(window).width();
			const t = Math.max(Math.min((height - width + 250)/250,1),0);
			
			const container = $("#img_fallenstar_container");
			const fallenstar = $("#img_fallenstar");
			
			$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
			
			fallenstar.css({height: (100-30*t) + "%", top: (12*t) + "%"});
			fallenstar.css("left", Math.min(-(1-fallenstar.css("--progress"))*fallenstar.width(),container.width()-fallenstar.width()) + "px");
		}
	});
	
	$("#img_library").animate({left: Math.max(80,parseInt($("#img_library").css("left"))*7/30)+"px"}, 800, "swing", function() {
		$(this).css({left: "max(80px,35%)"});
	});
	
	$(".hamburger-icon").click(function() {
		const icon = $(this);
		icon.toggleClass("hamburger-change");
		const items = $("#dropdown-menu-bar-items");
		const h = icon.hasClass("hamburger-change") ? items.children().first().height() : 0;
		items.animate({height: h + "px"}, 300);
	});
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((width - height + 50)/250,1),0);
	const maxHeight = Math.max(Math.min((900 - width)/200,1),0)*430;
	$("#img_fallenstar").css("top", "max(" + (55-t*25)+"vh," + maxHeight + "px)");
	$("#img_library").css("top", "max(" + (5+t*20)+"vh,30px)");
	
	const h = $("#cover-page").outerHeight();
	if(h !== undefined)
		$("#background").css("height", "max(100vh," + (h*1.1) + "px)");
	
	if(width<560)
	{
		$("#menu-bar").css({display: "none"});
		$("#dropdown-menu-bar").css({display: "block"});
		$("#icon").css({display: "none"});
	}
	else
	{
		$("#menu-bar").css({display: "block"});
		$("#dropdown-menu-bar").css({display: "none"});
		$("#icon").css({display: "block"});
	}
}
