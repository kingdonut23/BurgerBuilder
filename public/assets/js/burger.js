$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        console.log($(this))
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

    $(".add-Sql").on("click", function (event) {
        event.preventDefault();
        console.log(event)

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
