$(document).ready(function() {
    let i = 0;
    let price = 0;
    $(".container-products-head-max-product").hide();
    $(".container-text-welcome-to-wheels").hide();
    $( "#tabs" ).tabs();
    if ($(window).width() >= 1200) {
        function show() {
            $(".container-text-welcome-to-wheels").show("drop", 1000);
        }
        setTimeout(show, 1500);
    }
    $("body").addClass("opacity");
    $("body").animate({
        opacity: 1
    }, 1500);
    $(".price-button").on("click", function() {
        if (i < 6) {
            i += 1;
            price = i*399;
            $(".container-products-head-price").text("Your amount is: $" + price);
        }
        else {
            $(".container-products-head-max-product").show();
        }
    })
});