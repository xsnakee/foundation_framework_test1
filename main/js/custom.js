$(".slide1").click(function () {
    $("#header .row").slideUp(1000, function () {
        $("a.slide1").css('visibility', 'hidden');
        $(".slide2").css('visibility', 'visible')
    });
    $("#header").css('padding', '50px 0')
});

$(".slide2").click(function () {
    $("#header .row").slideDown(1000, function () {
        $("a.slide1").css('visibility', 'visible');
        $(".slide2").css('visibility', 'hidden')
    });
    $("#header").css('padding', '225px 0')
});