// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("eaten");
  
      var newEatState = {
        burger_eaten: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(function() {
          console.log("changed eat status to " + newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#burg").val().trim(),
        burger_eaten: $("[name=is-eaten]:checked").val().trim()
      };
      if ($("#burg").val().trim() === "") {
        alert("Please Enter A Name");
      } else {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    });
  

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
          console.log("deleted burger " + id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
