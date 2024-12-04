// Populate Billing Details on Page Load
window.onload = function () {
    // Get data from localStorage
    const pickupLocation = localStorage.getItem('pickupLocation');
    const dropLocation = localStorage.getItem('dropLocation');
    const fromTime = localStorage.getItem('fromTime');
    const toTime = localStorage.getItem('toTime');

    // Populate input fields
    document.getElementById('from-location').value = pickupLocation + " (From: " + fromTime + ")";
    document.getElementById('to-location').value = dropLocation + " (To: " + toTime + ")";
};

// Handle Next Button Click
document.getElementById('next').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'payment.html'; // Redirect to payment.html
});





