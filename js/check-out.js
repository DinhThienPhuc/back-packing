/**
 * Created by thien on 9/12/2016.
 */
$(document).ready(function () {
  var navListItems = $("ul.setup-panel li a"),
    allWells = $(".setup-content");

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr("href")),
      $item = $(this).closest("li");

    if (!$item.hasClass("disabled")) {
      navListItems.closest("li").removeClass("active");
      $item.addClass("active");
      allWells.hide();
      $target.show();
    }
  });

  $("ul.setup-panel li.active a").trigger("click");

  // DEMO ONLY //
  $("#activate-step-2").on("click", function () {
    $("ul.setup-panel li:eq(1)").removeClass("disabled");
    $("ul.setup-panel li a[href='#step-2']").trigger("click");
    //$(this).remove();
  });

  $("#down").hover(
    function () {
      $(this).addClass("open");
    },
    function () {
      $(this).removeClass("open");
    },
  );
});
