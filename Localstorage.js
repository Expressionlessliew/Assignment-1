// Get the input element and save button element
const localInput = document.getElementById("localstorage");
const saveLocalButton = document.getElementById("localsave");

// Add event listener to the save button
saveLocalButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the input value
  const inputValue = localInput.value;

  // Save the input value to localStorage
  localStorage.setItem("data", inputValue);

  alert("Data saved to localStorage!");
});


// Retrieve data from localStorage
const savedData = localStorage.getItem("data");

// Get the container element where you want to display the data
const container = document.getElementById("localcontainer");

// Check if there is data available
if (savedData) {
  // Create a new HTML element
  const paragraph = document.createElement("p");

  // Set the content of the element to the retrieved data
  paragraph.textContent = savedData;

  // Append the element to the container
  container.appendChild(paragraph);
} else {
  // Display a message if no data is available
  container.textContent = "No data available.";
}