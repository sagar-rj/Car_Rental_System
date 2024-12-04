// Example customer data
const customers = [
    { id: 1, name: 'Udita Sinha' },
    { id: 2, name: 'Vishal Singh' }
];

// Example reservation data for each customer
const reservations = {
    1: [{ id: 'R001', details: 'Toyota Fortuner - 2024-09-01 to 2024-09-07', baseCharges: 5000 }],
    2: [{ id: 'R002', details: 'Honda City - 2024-09-02 to 2024-09-08', baseCharges: 5500 }]
};

// Populate the customers dropdown
function populateCustomers() {
    const customerSelect = document.getElementById('customerSelect');
    customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = customer.name;
        customerSelect.appendChild(option);
    });
}

// Populate the reservations dropdown based on the selected customer
function populateReservations(customerId) {
    const reservationSelect = document.getElementById('reservationSelect');
    reservationSelect.innerHTML = '<option value="" disabled selected>Select a reservation</option>';
    
    if (reservations[customerId]) {
        reservations[customerId].forEach(reservation => {
            const option = document.createElement('option');
            option.value = reservation.id;
            option.textContent = reservation.details;
            option.setAttribute('data-baseCharges', reservation.baseCharges);
            reservationSelect.appendChild(option);
        });
    }
}

// Generate the bill
document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerSelect = document.getElementById('customerSelect');
    const reservationSelect = document.getElementById('reservationSelect');
    const additionalChargesInput = document.getElementById('additionalCharges');
    
    const customerId = customerSelect.value;
    const customerName = customerSelect.options[customerSelect.selectedIndex].text;
    const reservationId = reservationSelect.value;
    const reservationDetails = reservationSelect.options[reservationSelect.selectedIndex].text;
    const baseCharges = parseFloat(reservationSelect.options[reservationSelect.selectedIndex].getAttribute('data-baseCharges'));
    const additionalCharges = parseFloat(additionalChargesInput.value) || 0;

    // Calculate total amount
    const totalAmount = baseCharges + additionalCharges;

    // Display bill summary
    document.getElementById('billCustomer').textContent = customerName;
    document.getElementById('billReservation').textContent = reservationDetails;
    document.getElementById('baseCharges').textContent = baseCharges.toFixed(2); // Display base charges in ₹
    document.getElementById('additionalChargesSummary').textContent = additionalCharges.toFixed(2); // Display additional charges in ₹
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2); // Display total in ₹

    // Show the bill summary section
    document.getElementById('billSummary').style.display = 'block';
});

// Populate the reservations dropdown when a customer is selected
document.getElementById('customerSelect').addEventListener('change', function() {
    const customerId = this.value;
    populateReservations(customerId);
});

// Populate the customers dropdown on page load
window.onload = populateCustomers;
