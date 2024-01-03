$(document).ready(function() {
    $("form").show();
    $(".delete").hide();
    $(".send").hide();
    $(".cancelled").hide();
    $(".done").hide();
    $("#icon").change(function(){
        let file = $("#icon").val();
        $("#photo img").attr("src", file.split("\\")[2]);
    });
    $.validator.addMethod(
        'required', 
        function (value, element) {
                if (value !== null) {
                    let elementName = "." + $(element).attr("name");
                    $(elementName).text($(element).val());
                }
            return value !== "";
        },
        'Enter here data'  
    );
    $(".send").on("click",function(event){
        event.preventDefault()
    });
    $("form").validate({
        rules: {
            "first-name": {
                required: true
            },
            "last-name": {
                required: true
            },
            "age": {
                required: true,
                range: [18,100]
            },
            "phone": {
                required: true,
                rangelength: [10,10]
            }
        },
        messages: {
            "age": {range: "You can't create account"},
            "phone": {rangelength: "Must have 10!!!"}
        },
        submitHandler:function(){
            $(".check").animate({
                zIndex: -1,
                opacity: 0
            },300);
            $(".send").show(300);
            $(".delete").show(300);
            $(".send").on("click", function() {
                $(".delete").hide();
                $(".send").hide();
                $(".done").show(300);
            });
            $(".delete").on("click", function() {
                $(".delete").hide();
                $(".send").hide();
                $(".cancelled").show(300);
            });
        }
    });
});