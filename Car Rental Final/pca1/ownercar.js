// Function to retrieve car data from localStorage and display it
let cars = JSON.parse(localStorage.getItem('cars'));
function displayCars() {
  const carcontaier = document.getElementById('usercards');
  
  // Get car data from localStorage
  

  // Check if cars exist
  if (!cars) {
      carcontaier.innerHTML = '<p>No cars available. Please add some data.</p>';
      return;
  }

  // Clear the carcontaier before adding cards
  carcontaier.innerHTML = '';

  // Loop through cars and create card elements
  cars.forEach(car => {
    console.log("Car ID:", car.id);
      let card = document.createElement('div');
      card.className = 'card mb-3';

      card.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${car.name}</h5>
              <img class="carpic" src="${car.image}" alt="${car.name}" />
              <p class="card-text">Rs. ${car.price} per hr</p>
              
              <p class="card-text">${car.description}</p>
              
              <!-- Rent Button -->
              <button class="btn" onclick="renting('${car.id}')">RENT</button>
              
          </div>
      `;

      carcontaier.appendChild(card);
      console.log("end")
  });
}


// Function to handle Rent button click (updated to use the new renting function)
function renting(id) {
    console.log(id)
    // Find the car by its ID
    const cars = JSON.parse(localStorage.getItem('cars'));
    const cr = cars.find(v => v.id === Number(id)); // Find the vehicle by ID
    console.log("monkey")
    console.log(cr)
    if (cr) {
        // Populate the "Base Rent" field in billing details
        document.getElementById('base-fare').value = cr.price;

        

        // Store the selected car's ID and name in sessionStorage
        sessionStorage.setItem('selectedCarId', id);
        sessionStorage.setItem('selectedCarName', cr.name);
        sessionStorage.setItem('selectedCarPrice', cr.price);


        // Enable the "Calculate Distance" button
        document.getElementById('calculate-distance-btn').disabled = false;

        alert(`You selected ${cr.name}. Base Rent: Rs. ${cr.price}. Fill in the details to proceed.`);
    } else {
        alert('Vehicle not found!');
    }
}

// Call displayCars when the page loads
window.addEventListener('DOMContentLoaded', displayCars);
