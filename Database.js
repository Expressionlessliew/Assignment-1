// Get a reference to the Firebase Realtime Database
const database = firebase.database();

// Handle form submission
const databaseInput = document.getElementById("database-input");
const saveButton = document.getElementById("datasave");

saveButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the input value
  const inputValue = databaseInput.value;

  // Save the input value to Firebase Realtime Database
  database
    .ref("datas")
    .push(inputValue)
    .then(() => {
      alert("Data saved successfully!");
      databaseInput.value = ""; // Reset the input field
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
});

// Get the container element where you want to display the data
const databaseContainer = document.getElementById("databasecontainer");

// Function to display the data
function displayData(data) {
  // Clear the previous content
  databaseContainer.innerHTML = "";

  // Loop through the data and create HTML elements to display it
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const p = document.createElement("p");
      p.textContent = value;
      databaseContainer.appendChild(p);
    }
  }
}

// Retrieve the data from the Firebase Realtime Database
database
  .ref("datas")
  .once("value")
  .then((snapshot) => {
    const data = snapshot.val();
    displayData(data);
  })
  .catch((error) => {
    console.error("Error retrieving data: ", error);
  });
