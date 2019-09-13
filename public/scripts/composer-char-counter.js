$(document).ready(function() {
  $("textarea").on("keyup", function() {
    let inputLength = $(this).val().length;
    const counter = $(this).siblings(".counter");//save the counter element into variable counter;
    counter.text(`${140 - inputLength}`);
    if (inputLength > 140) {
      counter.addClass("counterNeg");
    } else {
      counter.removeClass("counterNeg");
    }
  });
});