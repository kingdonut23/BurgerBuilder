$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");

        var didYouDevour = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: didYouDevour

        }).then(function () {
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#burger").val().trim(),

        };

        //Post and reload
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger Created" + newBurger);
            location.reload();
        })

    })

});
