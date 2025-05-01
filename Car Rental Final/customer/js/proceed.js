// Handle Proceed Button Click
document.getElementById('proceed-btn').addEventListener('click', function () {
    // Get values from the form
    const pickupLocation = document.getElementById('pickup-location').value;
    const fromTime = document.getElementById('from-time').value;
    const dropLocation = document.getElementById('drop-location').value;
    const toTime = document.getElementById('to-time').value;

    if(pickupLocation == '' || dropLocation == ''){
        alert("Fill all the fields");
        return;
    }
    // Store values in localStorage
    localStorage.setItem('pickupLocation', pickupLocation);
    localStorage.setItem('fromTime', fromTime);
    localStorage.setItem('dropLocation', dropLocation);
    localStorage.setItem('toTime', toTime);

    // Redirect to index.html
    window.location.href = 'index.html';
});

window.onload = function() {
    const fromTimeInput = document.getElementById('from-time');
    const toTimeInput = document.getElementById('to-time');

    // Set the minimum date and time for the "From" datetime input
    const now = new Date();
    const minDateTime = now.toISOString().slice(0, 16); // Format 'YYYY-MM-DDTHH:MM'
    fromTimeInput.min = minDateTime;

    // Update the "Until" datetime input whenever "From" datetime changes
    fromTimeInput.addEventListener('input', () => {
        const selectedFromTime = fromTimeInput.value;
        toTimeInput.min = selectedFromTime; // Set "Until" min to selected "From" time
    });

    // Ensure "Until" cannot be earlier than the current "From" value
    toTimeInput.addEventListener('input', () => {
        if (toTimeInput.value < fromTimeInput.value) {
            alert("The 'Until' time cannot be earlier than the 'From' time.");
            toTimeInput.value = fromTimeInput.value;
        }
    });
};
