
let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [
    { id: 'V001', model: 'Toyota Fortuner', price: '1500', ac: 'Yes', seater: 7, image: '' },
    { id: 'V002', model: 'Honda City', price: '800', ac: 'Yes', seater: 5, image: '' },
    { id: 'V003', model: 'Ford Endeavour',  price: '1500', ac: 'Yes', seater: 7, image: '' }
];

// Function to populate the vehicle table
function populateVehicleTable() {
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
    const tableBody = document.getElementById('vehicleTableBody');
    tableBody.innerHTML = ''; // Clear the table before adding new data

    vehicles.forEach(vehicle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vehicle.id}</td>
            <td>${vehicle.model}</td>
            <td>${vehicle.price}</td>
            <td>${vehicle.ac}</td>
            <td>${vehicle.seater}</td>
            <td><img src="${vehicle.image || 'default-car.png'}" class="vehicle-img" alt="${vehicle.model}"></td>
            <td><button onclick="deleteVehicle('${vehicle.id}')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new vehicle
function addVehicle(event) {
    event.preventDefault();

    const model = document.getElementById('vehicleModel').value;
    const price = document.getElementById('price').value;
    const ac = document.getElementById('ac').value;
    const seater = document.getElementById('seater').value;
    const image = document.getElementById('vehicleImage').files[0];

    // If no image is selected, set the image to an empty string
    const imageBase64 = image ? new FileReader() : '';

    if (image) {
        imageBase64.onload = function (e) {
            const newVehicle = {
                id: `V00${vehicles.length + 1}`,
                model: model,
                price: price,
                ac: ac,
                seater: seater,
                image: e.target.result // base64 encoded image
            };

            vehicles.push(newVehicle); // Add the new vehicle to the array

            // Save the updated array to localStorage
            localStorage.setItem('vehicles', JSON.stringify(vehicles));

            populateVehicleTable(); // Refresh the table
            document.getElementById('vehicleForm').reset(); // Reset the form
        };
        imageBase64.readAsDataURL(image); // Convert image to base64 for display
    } else {
        const newVehicle = {
            id: `V00${vehicles.length + 1}`,
            model: model,
            price: price,
            ac: ac,
            seater: seater,
            image: '' // no image selected
        };

        vehicles.push(newVehicle); // Add the new vehicle to the array

        // Save the updated array to localStorage
        localStorage.setItem('vehicles', JSON.stringify(vehicles));

        populateVehicleTable(); // Refresh the table
        document.getElementById('vehicleForm').reset(); // Reset the form
    }
}

// Function to delete a vehicle
function deleteVehicle(id) {
    vehicles = vehicles.filter(vehicle => vehicle.id !== id);
    
    // Update localStorage with the updated array
    localStorage.setItem('vehicles', JSON.stringify(vehicles));

    populateVehicleTable(); // Refresh the table
}

// Event listener for the form submission
document.getElementById('vehicleForm').addEventListener('submit', addVehicle);

// Initialize the table when the page loads
window.onload = populateVehicleTable;
