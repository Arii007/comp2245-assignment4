document.getElementById("searchButton").addEventListener("click", function () {
    // Get the value from the text field
    const query = document.getElementById("searchField").value.trim();

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure it: GET-request with query parameter
    xhr.open("GET", `superheroes.php?query=${encodeURIComponent(query)}`, true);

    // Set up the callback function
    xhr.onload = function () {
        const resultDiv = document.getElementById("result");
        if (xhr.status === 200) {
            // Display the response in the result div
            resultDiv.innerHTML = xhr.responseText;
        } else {
            resultDiv.innerHTML = "<p>Error fetching superhero information.</p>";
        }
    };

    // Send the request
    xhr.send();
});
