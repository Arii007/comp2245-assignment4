document.getElementById("searchButton").addEventListener("click", function () {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL /superheroes.php
    xhr.open("GET", "superheroes.php", true);

    // Set up the callback function to handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Display the response as a JavaScript alert
            alert(xhr.responseText);
        } else {
            alert("Error: Unable to fetch data");
        }
    };

    // Send the request
    xhr.send();
});
