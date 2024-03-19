// Javascript code for validation

document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the form and input field by IDs
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");

  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-z0-9]+$/i;

  // Function to validate input
  function validateInput(value) {
    return alphanumericPattern.test(value);
  }

  // Add an event listener to the form submit event
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputValue = inputField.value;

    // Checks if input value matches pattern
    if (validateInput(inputValue)) {
      alert("Input is valid. Form submitted successfully!");
    } else {
      alert("Error: Input must be alphanumeric.");
    }
  });
});