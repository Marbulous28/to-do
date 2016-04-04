//Buisness Logic

function AddItem(thingToAdd) {
  this.item = thingToAdd;
}



//user interface Logic

$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();

    var thing = $("#itemInput").val();

    var newItem = new AddItem(thing);

    $("ul#output").append("<li>" + newItem.item + "  <span class='deleteThis'>Done</span>" + "</li>");

    $(".deleteThis").last().click(function(){
      $(this).closest('li').addClass("crossOut");
      $(".deleteThis").remove();
    });
  });
});
