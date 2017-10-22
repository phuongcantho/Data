$(function(){
	// rollover
	$('.imgover').each(function(){
		this.osrc = $(this).attr('src');
		this.rollover = new Image();
		this.rollover.src = this.osrc.replace(/(\.gif|\.jpg|\.png)/, "_o$1");
	}).hover(function(){
		$(this).attr('src',this.rollover.src);
	},function(){
		$(this).attr('src',this.osrc);
	});
	
	$(".accordion").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});

	$(".accordion").click(function() {
		var elm = $(this);
		if (elm.next(".accordionBox").is(":visible")) {
			elm.removeClass("active")
			.next(".accordionBox")
			.slideUp(200);
		} else {
			elm.next(".accordionBox")
			.slideDown(200)
			.siblings(".accordionBox")
			.slideUp(200)
			.siblings(".accordion")
			.removeClass("active");
			elm.addClass("active");
		}
	});
});

var sPath = window.location.pathname;
var ie6=navigator.appVersion;
if(ie6.search("MSIE 6.0")==-1)
{ 
   var sPage = sPath.substring(sPath.lastIndexOf('/')+1);
}
else
{
   var sPage = sPath.substring(sPath.lastIndexOf('\\')+1);
}

$(function(){
var n=$('ul.lNav li').length;
	for(i=0; i<n; i++) {
		if($('ul.lNav li:eq('+i+')').find('a').attr('href')==sPage)	
		{
			$('ul.lNav li:eq('+i+')').addClass("current");
		}
		
		if($('ul.lNav li:eq('+i+')').find('a').attr('href')==sPath)	
		{
			$('ul.lNav li:eq('+i+')').addClass("current");
		}
	}
});

$(function() {
	$( ".demoJquery" ).each(function() {
		var iSrc,
			src = $( this ).find( ".demoJqueryInner" ),
			output = $( this ).find( ".demoOutput" );
		if ( !src.length || !output.length ) {
			return;
		}
		iSrc = src.find( ".getSource" ).map(function() {
			return $( this ).text().replace( /\xa0/g, " " );
		}).get().join( "\n" );

		iSrc = iSrc
			.replace( "</head>",
				"<style>" +
					"html, body { border:0; margin:0; padding:0; }" +
				"</style>" +
				"</head>" )
			.replace( /<script>([\s\S]+)<\/script>/,
				"<script>" +
				"window.onload = function() {" +
					"$1" +
				"};" +
				"</script>" );
		var iframe = document.createElement( "iframe" );
		iframe.width = "100%";
		iframe.height = output.attr( "data-height" ) || '368px';
		output.append( iframe );

		var doc = (iframe.contentWindow || iframe.contentDocument).document;
		doc.write( iSrc );
		doc.close();
	});
	
	$('.compare').each(function(){
		var bH = $(this).find('.before').height();
		var aH = $(this).find('.after').height();
		var mH = bH;
		if(bH<aH){mH = aH;}
		else{ mH = bH;}
		$(this).find('.sourceTxt').height(mH);
	});
	
	$(window).bind('load resize',function(){
		var asideH = $('#sidebar').height();
		$('#pageBody').css("min-height",asideH);
		var winW = $(window).width();
		var winH = $(window).height();
		var docH = $(document).height();
		var secLink = $('.sectionLink');
		if(winW < 641){
			secLink.find('.back').find('a').html("Trá»Ÿ vá»");
			secLink.find('.prev').find('a').html("Tiáº¿p tá»¥c");
		}

		var fadeContent = $('.fadeContent');
		var fadeH       = fadeContent.height();
		var fadeW       = fadeContent.width();
		var left        = (winW-fadeW)/2;
		var top         = (winH-fadeH)/2;
		fadeContent.css({'top':top, 'left':left});
		$('.fadeWrap').height(docH);
	});

	$.fn.fadeBox = function(id,detail){
		var content = $(detail);
		$(id).click(function() {
			var elm = $(this);
			var path = window.parent.location.href;
			if (content.is(":hidden")) {
				elm.addClass("active");
				content.fadeIn();
			} else {
				elm.removeClass("active");
				content.fadeOut();
			}
			$('.path').val(path);
		});
		
		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			if (! $clicked.parents().hasClass("gnavInner") && ! $clicked.parents().hasClass("fadeSection")){
				content.fadeOut();
				$('.fadeWrap').fadeOut();
			};
		});

		$('#closeBtn').click(function() {
			content.fadeOut();
			$('.fadeWrap').fadeOut();
		});
	}
	$(".gnavInner").fadeBox(".fadeBtn",".fadeWrap");
	$(".gnavInner").fadeBox(".fadeBtn",".fadeContent");

	$(".close-button").click(function(){
		$(this).parent(".alert").fadeOut(400);
	});
});
