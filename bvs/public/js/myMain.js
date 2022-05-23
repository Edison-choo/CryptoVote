function loadVote() {
  $(".privateVote .Choice").on("click", () => {
    console.log("test");
  });
}

$(document).ready(function () {
  console.log("Loading");

  $(".vote .icon-box").on("click", function () {
    console.log("Test");
    $(".vote .icon-box").removeClass("selectActive");
    $(this).addClass("selectActive");
    $("#choice").val($(".selectActive input").val());
  });

  $(".privateVote .Choice").on("click", function () {
    console.log("clicked");
    $(this).parent().children().removeClass("choiceActive");
    $(this).parent().find(".chosen").val($(this).find("h5").text());
    $(this).addClass("choiceActive");

    var size = $(".privateVote .Question").length;
    var voted = $(".privateVote .choiceActive").length;
    console.log(voted, size);
    if (voted == size) {
      console.log("Able to proceed");
    }
  });

  var publicVote = 0;

  $(".vote .vote-submit").on("click", function () {
    if ($(".vote .selectActive").length == 1) {
      window.location.href = "/Success";
    } else {
      $(".danger-alert").show();
    }
  });

  $(".privateVote .vote-submit").on("click", function () {
    var size = $(".privateVote .Question").length;
    var voted = $(".privateVote .choiceActive").length;
    if (voted == size) {
      window.location.href = "/PrivateSuccess";
    } else {
      $(".danger-alert").show();
    }
  });

  $(".login img").on("click", function () {
    window.location.href = "/SelectCreateVote";
    // window.location.href='/Sessions';
  });

  $(".loginVote img").on("click", function () {
    window.location.href = "/SelectVote";
  });

  $(".mobile-nav-toggle").on("click", function () {
    $("#navbar").toggleClass("navbar-mobile");
    $(this).toggleClass("bi-list");
    $(this).toggleClass("bi-x");
  });

  $(".navbar .dropdown").on("click", function () {
    console.log("extending navbar...");
    $(this).find("ul").toggleClass("dropdown-active");
  });

  $(".alert .close").on("click", function () {
    $(this).parent(".alert").fadeOut();
  });

  // $(".paginationAll li:nth-child(-n+5)").toggleClass("show");

  //public release

  $(".publicRelease .rightIcon").on("click", function () {
    if (
      $(".paginationAll .show").last().index() + 1 ==
      $(".paginationAll li").length
    ) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".paginationAll .show").last().index() + 1;
      $(".paginationAll li").removeClass("show");
      $(`.paginationAll li:nth-child(${index + 1})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 2})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 3})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 4})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 5})`).toggleClass("show");
      checkPage();
      $(".leftIcon").removeClass("pageIcon-disabled");
    }
  });

  $(".publicRelease .leftIcon").on("click", function () {
    if ($(".paginationAll .show").first().index() + 1 == 1) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".release .paginationAll .show").first().index() + 1;
      $(".paginationAll li").removeClass("show");
      $(`.paginationAll li:nth-child(${index - 1})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 2})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 3})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 4})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 5})`).toggleClass("show");
      checkPage();
      $(".rightIcon").removeClass("pageIcon-disabled");
    }
  });

  // ownVote

  $(".ownVote .rightIcon").on("click", function () {
    if (
      $(".paginationAll .show").last().index() + 1 ==
      $(".paginationAll li").length
    ) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".paginationAll .show").last().index() + 1;
      $(".paginationAll li").removeClass("show");
      $(`.paginationAll li:nth-child(${index + 1})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 2})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 3})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 4})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index + 5})`).toggleClass("show");
      checkPage();
      $(".leftIcon").removeClass("pageIcon-disabled");
    }
  });

  $(".ownVote .leftIcon").on("click", function () {
    if ($(".paginationAll .show").first().index() + 1 == 1) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".release .paginationAll .show").first().index() + 1;
      $(".paginationAll li").removeClass("show");
      $(`.paginationAll li:nth-child(${index - 1})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 2})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 3})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 4})`).toggleClass("show");
      $(`.paginationAll li:nth-child(${index - 5})`).toggleClass("show");
      checkPage();
      $(".rightIcon").removeClass("pageIcon-disabled");
    }
  });

  // $(".sessions .paginationAll a:nth-child(-n+5)").toggleClass("show");

  $(".sessions .rightIcon").on("click", function () {
    if (
      $(".paginationAll .show").last().index() + 1 ==
      $(".paginationAll a").length
    ) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".paginationAll .show").last().index() + 1;
      $(".paginationAll a").removeClass("show");
      $(`.paginationAll a:nth-child(${index + 1})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index + 2})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index + 3})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index + 4})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index + 5})`).toggleClass("show");
      checkPage();
      $(".leftIcon").removeClass("pageIcon-disabled");
    }
  });

  $(".sessions .leftIcon").on("click", function () {
    if ($(".sessions .paginationAll .show").first().index() + 1 == 1) {
      console.log("max range");
    } else {
      console.log("run");
      var index = $(".paginationAll .show").first().index() + 1;
      $(".paginationAll a").removeClass("show");
      $(`.paginationAll a:nth-child(${index - 1})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index - 2})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index - 3})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index - 4})`).toggleClass("show");
      $(`.paginationAll a:nth-child(${index - 5})`).toggleClass("show");
      checkPage();
      $(".rightIcon").removeClass("pageIcon-disabled");
    }
  });

  // $(".allResults .paginationAll tr:nth-child(-n+10)").toggleClass("show");

  $(".attendance .rightIcon").on("click", function() {
    if ($(".paginationAll .show").last().index()+1 == $(".paginationAll tr").length) {
        console.log("max range");
    } else {
        console.log("run")
        var index = $(".paginationAll .show").last().index() + 1;
        $(".paginationAll tr").removeClass("show");
        $(`.paginationAll tr:nth-child(${index + 1})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 2})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 3})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 4})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 5})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 6})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 7})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 8})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 9})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index + 10})`).toggleClass("show");
        checkPage();
        $(".leftIcon").removeClass("pageIcon-disabled");
    }
    
});

$(".attendance .leftIcon").on("click", function() {
    if ($(".allResults .paginationAll .show").first().index()+1==1) {
        console.log("max range");
    } else {
        console.log("run")
        var index = $(".paginationAll .show").first().index() + 1;
        $(".paginationAll tr").removeClass("show");
        $(`.paginationAll tr:nth-child(${index - 1})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 2})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 3})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 4})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 5})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 6})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 7})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 8})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 9})`).toggleClass("show");
        $(`.paginationAll tr:nth-child(${index - 10})`).toggleClass("show");
        checkPage();
        $(".rightIcon").removeClass("pageIcon-disabled");
    }
    
});

  window.onload = function () {
    $(".publicRelease .paginationAll li:nth-child(-n+5)").toggleClass("show");
    $(".privateRelease .paginationAll>div:nth-child(-n+5)").toggleClass("show");
    $(".sessions .paginationAll a:nth-child(-n+5)").toggleClass("show");
    $(".attendance .paginationAll tr:nth-child(-n+10)").toggleClass("show");
    $(".ownVote .paginationAll li:nth-child(-n+5)").toggleClass("show");

    checkPage();
  };

  $(".dashboard .graphSelect").on("click", () => {
    $(".dashboard .tabContent").removeClass("tabActive");
    $(".dashboard .tableSelect a").removeClass("active");
    $(".dashboard .graphSelect a").addClass("active");
    $(".dashboard .graphTab").addClass("tabActive");
  });

  $(".dashboard .tableSelect").on("click", () => {
    $(".dashboard .tabContent").removeClass("tabActive");
    $(".dashboard .graphSelect a").removeClass("active");
    $(".dashboard .tableSelect a").addClass("active");
    $(".dashboard .tableTab").addClass("tabActive");
  });
});

function checkPage() {
  var page =
    $(".paginationAll .show").first().index() + 1 != 1
      ? Math.ceil(
          ($(".paginationAll .show").first().index() +
            1 -
            $(".paginationAll .spacer").children().length) /
            5
        )
      : 1;
  var totalPage = Math.ceil(
    ($(".paginationAll").children().length -
      $(".paginationAll .spacer").children().length) /
      5
  );

  if ($(".paginationAll .show").first().index() + 1 == 1) {
    $(".leftIcon").toggleClass("pageIcon-disabled");
  }

  if (
    $(".paginationAll .show").last().index() + 1 ==
    $(".paginationAll li").length
  ) {
    $(".rightIcon").toggleClass("pageIcon-disabled");
  }

  if (
    $(".paginationAll .show").last().index() + 1 ==
    $(".paginationAll a").length
  ) {
    $(".rightIcon").toggleClass("pageIcon-disabled");
  }

  if (
    $(".paginationAll .show").last().index() + 1 ==
    $(".paginationAll tr").length
  ) {
    $(".rightIcon").toggleClass("pageIcon-disabled");
  }

  if (
    $(".paginationAll .show").last().index() + 1 ==
    $(".paginationAll > div").length
  ) {
    $(".rightIcon").toggleClass("pageIcon-disabled");
  }

  $(".allResults");
  $(".sessions");
  $(".pageNum span").text(`${page}/${totalPage}`);
}
