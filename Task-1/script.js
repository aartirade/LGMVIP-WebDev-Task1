// var a = prompt("enter name");
$(document).ready(function () {
  $(".thumb a").mouseover(function (e) {
    e.preventDefault();
    $(".imgBox img").attr("src", $(this).attr("href"));
  });
});
