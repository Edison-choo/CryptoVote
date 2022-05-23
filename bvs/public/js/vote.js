$(".privateVote .vote-submit").on("click", function() {
    var size = $(".privateVote .Question").length;
    var voted = $(".privateVote .choiceActive").length;
    if (voted == size) {
        window.location.href='/PrivateSuccess';
    } else {
        $(".danger-alert").show();
    }

});

$(".privateVote .Choice").on("click", function() {
    console.log("clicked");
    $(this).parent().children().removeClass("choiceActive");
    $(this).parent().find(".chosen").val($(this).find("h5").text());
    $(this).addClass("choiceActive");

    var size = $(".privateVote .Question").length;
    var voted = $(".privateVote .choiceActive").length;
    console.log(voted, size)
    if (voted == size) {
        console.log("Able to proceed");
        
    }
});

console.log("Loading");
$(".privateVote .Choice").on("click", ()=>{
    console.log("test");
});
console.log(document.querySelector("#services"));