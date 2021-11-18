$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $(".header").css("opacity", ".9");
            $(".header").css("background", "#f5f6f8");
        }
        else {
            $(".header").css("background", "transparent");
        }
    })
})

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.menu_body').toggleClass('active');

        if ($('.header_burger,.menu_body').hasClass('active')) {
            $('.bnt_link').css('display', 'none');
        } else $('.bnt_link').css('display', 'block');
    })
})

document.addEventListener("mousemove", parallax);
function parallax(e){
	this.querySelectorAll('.layer2').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

	const x = (window.innerWidth - e.pageX*speed)/80
	const y = (window.innerHeight - e.pageY*speed)/80

	layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    this.querySelectorAll('.layer1').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

    const x = -(window.innerWidth - e.pageX*speed)/80
    const y = -(window.innerHeight - e.pageY*speed)/80

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
	})
};
