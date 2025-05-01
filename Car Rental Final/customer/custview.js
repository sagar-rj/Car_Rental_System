// Fetch the list of vehicles from localStorage or initialize with an empty array
// let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
// console.log(vehicles);

let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

        // If localStorage is empty, save the default vehicles
        if (vehicles.length === 0) {
            vehicles = [
                { id: 'V001', model: 'Toyota Fortuner', price: '1500', ac: 'Yes', seater: 7, image: '' },
                { id: 'V002', model: 'Honda City', price: '800', ac: 'Yes', seater: 5, image: '' },
                { id: 'V003', model: 'Ford Endeavour', price: '1500', ac: 'Yes', seater: 7, image: '' }
            ];
            localStorage.setItem('vehicles', JSON.stringify(vehicles)); // Save to localStorage
        }
        
// Function to populate the vehicle cards
function populateVehicleCards() {
    const vehicleCardsContainer = document.getElementById('vehicleCards');
    vehicleCardsContainer.innerHTML = ''; // Clear the container before adding new data

    // Check if there are any vehicles
    if (vehicles.length === 0) {
        vehicleCardsContainer.innerHTML = '<p>No vehicles available at the moment.</p>';
        return;
    }
    else
    console.log("working");

    // Loop through the vehicles and create a card for each
    vehicles.forEach(vehicle => {
        console.log("inside loop")
        // Create a div for each vehicle card
        const card = document.createElement('div');
        card.classList.add('card'); // Adding a CSS class for styling
        card.innerHTML = `
            <img src="${vehicle.image || 'default-car.png'}" alt="Vehicle Image" class="vehicle-img" height="180" width="232">
            <h4>${vehicle.model}</h4>
            <p>Base Price: ${vehicle.price}</p>
            <p>AC: ${vehicle.ac}</p>
            <p>Seats: ${vehicle.seater}</p>
            
            <button onclick="rentVehicle('${vehicle.id}')">RENT</button>
        `;
        vehicleCardsContainer.appendChild(card); // Append the card to the container
    });
}

// Function to handle the rent button click
function rentVehicle(id) {
    const vehicle = vehicles.find(v => v.id === id); // Find the vehicle by ID
    if (vehicle) {
        // Populate the "Base Rent" field in billing details
        document.getElementById('base-fare').value = vehicle.price;

        sessionStorage.setItem('selectedCarId', id);
        // Enable the "Calculate Distance" button
        document.getElementById('calculate-distance-btn').disabled = false;

        alert(`You selected ${vehicle.model}. Base Rent: Rs. ${vehicle.price}. Fill in the details to proceed.`);
    } else {
        alert('Vehicle not found!');
    }
}
// Initialize the page by populating the vehicle cards
window.addEventListener('DOMContentLoaded', populateVehicleCards);

// window.onload = populateVehicleCards;
