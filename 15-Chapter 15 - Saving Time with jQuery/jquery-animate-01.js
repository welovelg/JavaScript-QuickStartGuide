// Only bind after element exists
$(function() {
    // Bind to the click event of the editGreeting button
    $("#editGreeting").on("click", function() {
       // Get the firstName value from the input box
        let firstName = $("#firstName").val()
        // Adjust the greeting text in the p tag with the name
        $("#greeting").text(`Hello, ${firstName}!`)
        // Move the purple box to the right by adding 340px to 
        // its left position over a period of 3 seconds
        $("#purpleBox").animate({left: "+=340px"}, 3000)
    })
})
