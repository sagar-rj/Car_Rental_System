// Sample initial customer data
let customers = [
    { id: 'C001', name: 'Udita Sinha', email: 'udita123@gmail.com', phone: '8240987610' },
    { id: 'C002', name: 'Vishal Singh', email: 'Vishal123@gmail.com', phone: '9876543210' }
];

// Function to populate the customer table
function populateCustomerTable() {
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = ''; // Clear the table before adding new data

    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td><button onclick="deleteCustomer('${customer.id}')">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new customer
function addCustomer(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;

    const newCustomer = {
        id: `C00${customers.length + 1}`,
        name: customerName,
        email: customerEmail,
        phone: customerPhone
    };

    customers.push(newCustomer); // Add the new customer to the array
    populateCustomerTable(); // Refresh the table
    document.getElementById('customerForm').reset(); // Reset the form
}

// Function to delete a customer
function deleteCustomer(id) {
    customers = customers.filter(customer => customer.id !== id);
    populateCustomerTable(); // Refresh the table
}

// Event listener for the form submission
document.getElementById('customerForm').addEventListener('submit', addCustomer);

// Initialize the table when the page loads
window.onload = populateCustomerTable;
