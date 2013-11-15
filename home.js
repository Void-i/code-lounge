$(function(){
if (window.location.href === 'http://derpthebass.com/code-lounge/') $('.under-construction').css('display', 'block');

x = 0;
animateAvatar = function() {
	$('.animated-avatar').css('background-position-x', x+'px');
	if (x == 1650) x = 150; else x += 150;
};

animateInterval = setInterval(animateAvatar, 82);

function pluginHoverIn(){
	$('.plug').removeClass('unplugged').addClass('plugged');
	$('.plug-in-span').css('display', 'block');
}
function pluginHoverOut(){
	$('.plug').removeClass('plugged').addClass('unplugged');
	$('.plug-in-span').css('display', 'none');
}

function resizeWindow(){
	$('.song-info').css('right', $(window).width() - 1200 + 'px');
}

$(window).resize(resizeWindow);
resizeWindow();
$('.plug-in').hover(pluginHoverIn, pluginHoverOut);

})
