// Predefined mapping of distances between locations (in km)
const distanceMap = {
    "kaikhali to airport gate number 1": 1.8,
    "haldiram to howrah junction": 16,
    "park street to eden gardens": 1.6
};

// Function to calculate the distance
function calculateDistance() {
    // Get the values from the location input fields
    const fromLocation = document.getElementById('from-location').value.trim().toLowerCase();
    const toLocation = document.getElementById('to-location').value.trim().toLowerCase();
    
    // Remove the time and date portion from the location input values
    const fromLocationWithoutTime = fromLocation.split(' (')[0];
    const toLocationWithoutTime = toLocation.split(' (')[0];

    // Format the key to check for a match in the distance map
    const key = `${fromLocationWithoutTime} to ${toLocationWithoutTime}`;
    console.log(key);  // Log the key for debugging

    // Check if the distance exists in the map
    if (distanceMap[key]) {
        // If found, populate the distance field
        const distance = distanceMap[key];
        document.getElementById('distance').value = distance;

        // Enable the Calculate Total Fare button
        document.getElementById('calculate-fare-btn').disabled = false;
    } else {
        // If not found, alert the user
        alert("Distance between these locations is not available.");
    }
}

// Function to calculate the total fare
function calculateFare() {
    // Get the distance value from the input field
    const distance = parseFloat(document.getElementById('distance').value);
    
    // Base fare is assumed to be ₹500 (could be dynamic based on user input)
    const baseFare = parseFloat(document.getElementById('base-fare').value) || 0;

    // Distance rate is assumed to be ₹10 per km
    const distanceRate = 10;

    // Calculate fare based on distance
    const distanceFare = distance * distanceRate;

    // Get the coupon code
    const couponCode = document.getElementById('discount').value.trim().toUpperCase();

    // Apply coupon logic
    let discount = 0;
    let discountAmount = 0;

    // Handle MYFIRST coupon (20% off)
    if (couponCode === "MYFIRST") {
        discount = 0.2; // 20% discount
        discountAmount = (baseFare + distanceFare) * discount;
    }
    // Handle JOURNEY coupon (25% off for bookings above ₹999)
    else if (couponCode === "JOURNEY" && (baseFare + distanceFare) > 999) {
        discount = 0.25; // 25% discount
        discountAmount = (baseFare + distanceFare) * discount;
    }
    // Handle TRIP coupon (30% off for bookings above ₹1999)
    else if (couponCode === "TRIP" && (baseFare + distanceFare) > 1999) {
        discount = 0.3; // 30% discount
        discountAmount = (baseFare + distanceFare) * discount;
    }

    // Calculate the total fare after applying the discount
    const totalFare = baseFare + distanceFare - discountAmount;
    

    // Store the total fare in sessionStorage
    sessionStorage.setItem("totalFare", totalFare.toFixed(2));

    // Populate the total fare input field
    document.getElementById('total-fare').value = totalFare.toFixed(2);  // Rounded to 2 decimal places
}

// Function to handle the "Proceed for Payment" action


// Attach the function to the Calculate Distance button
document.getElementById('calculate-distance-btn').addEventListener('click', calculateDistance);

// Attach the function to the Calculate Fare button
document.getElementById('calculate-fare-btn').addEventListener('click', calculateFare);


function proceedForPayment() {
    // Call the fare calculation before proceeding to the payment page
    calculateFare();

    // Redirect to the payment page (assuming it's named "payment.html")
    window.location.href = "payment.html";
}