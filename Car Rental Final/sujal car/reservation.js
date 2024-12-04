// Sample initial reservation data
let reservations = [
    { id: 'R001', customerName: 'Udita Sinha', vehicleModel: 'Toyota Fortuner', pickupDateTime: '2023-09-10T09:00', returnDateTime: '2023-09-12T18:00' },
    { id: 'R002', customerName: 'Vishal Singh', vehicleModel: 'Honda City', pickupDateTime: '2023-09-12T10:00', returnDateTime: '2023-09-14T17:00' }
];

// Function to populate the reservation table
function populateReservationTable() {
    const tableBody = document.getElementById('reservationTableBody');
    tableBody.innerHTML = ''; // Clear the table before adding new data

    reservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.id}</td>
            <td>${reservation.customerName}</td>
            <td>${reservation.vehicleModel}</td>
            <td>${reservation.pickupDateTime}</td>
            <td>${reservation.returnDateTime}</td>
            <td><button onclick="deleteReservation('${reservation.id}')">Cancel</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new reservation
function addReservation(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const pickupDateTime = document.getElementById('pickupDateTime').value;
    const returnDateTime = document.getElementById('returnDateTime').value;

    const newReservation = {
        id: `R00${reservations.length + 1}`,
        customerName: customerName,
        vehicleModel: vehicleModel,
        pickupDateTime: pickupDateTime,
        returnDateTime: returnDateTime
    };

    reservations.push(newReservation); // Add the new reservation to the array
    populateReservationTable(); // Refresh the table
    document.getElementById('reservationForm').reset(); // Reset the form
}

// Function to delete a reservation
function deleteReservation(id) {
    reservations = reservations.filter(reservation => reservation.id !== id);
    populateReservationTable(); // Refresh the table
}

// Event listener for the form submission
document.getElementById('reservationForm').addEventListener('submit', addReservation);

// Initialize the table when the page loads
window.onload = populateReservationTable;
