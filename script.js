function getName() {
    // Prompt the user to enter their name
    const name = prompt("Please enter your name:");

    // Display the name in the output paragraph (or a message if no name is entered)
    document.getElementById("output").textContent = name ? `Hello, ${name}!` : "You didn't enter a name.";
}
