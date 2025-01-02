$(document).ready(function () {
  $("#user-info-register").click(function () {
    $("#user-tab-register").addClass("active");
    $("#register").addClass("active in");
    $("#user-tab-login").removeClass("active");
    $("#login").removeClass("active in");
  });

  $("#button-user-info").click(function () {
    $("#user-tab-login").addClass("active");
    $("#login").addClass("active in");
    $("#user-tab-register").removeClass("active");
    $("#register").removeClass("active in");
  });

  $(".content .sale .sign-up > img").click(function () {
    $("#user-tab-register").addClass("active");
    $("#register").addClass("active in");
    $("#user-tab-login").removeClass("active");
    $("#login").removeClass("active in");
  });

  $("#down").hover(
    function () {
      $(this).addClass("open");
    },
    function () {
      $(this).removeClass("open");
    },
  );

  $("#button-user-info").hover(
    function () {
      $(this).addClass("open");
    },
    function () {
      $(this).removeClass("open");
    },
  );
});
