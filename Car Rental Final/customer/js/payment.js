// Retrieve selected car and calculate billing details
const selectedCarId = sessionStorage.getItem("selectedCarId"); // Assuming car ID is stored here
const vehicles = JSON.parse(localStorage.getItem("vehicles")) || []; // Retrieve vehicles from localStorage
const vehicle = vehicles.find((v) => v.id === selectedCarId);
const cars=JSON.parse(localStorage.getItem("cars")) || [];
const car=cars.find((v) => v.id === Number(selectedCarId));
console.log(car)
if (vehicle) {
    const billingDetails = {
        carModel: vehicle.model,
        basePrice: vehicle.price,
        totalFare: sessionStorage.getItem("totalFare"), // Retrieve total fare from sessionStorage
        
    };

    // Store billing details in localStorage
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
}
else if(car){
    const carBill = {
        carModel: car.name,
        basePrice: car.price,
        totalFare: sessionStorage.getItem("totalFare"), // Retrieve total fare from sessionStorage
        
    };

    // Store billing details in localStorage
    localStorage.setItem("carBill", JSON.stringify(carBill));
}



document.addEventListener("DOMContentLoaded", () => {
    const billingDetails = JSON.parse(localStorage.getItem("billingDetails"));
    const carBill = JSON.parse(localStorage.getItem("carBill"));

    // Check if billingDetails exist
    if (billingDetails) {
        console.log(billingDetails.carModel)
        // Update the vehicle model in the DOM
        document.getElementById("vehicle-model").textContent = billingDetails.carModel;
    }
    else if(carBill){
        console.log(carBill.carModel)
        // Update the vehicle model in the DOM
        document.getElementById("vehicle-model").textContent = carBill.carModel;
    }
     else {
        // If no billing details are found, show a default message
        document.getElementById("vehicle-model").textContent = "Details not available";
    }



    const paymentForm = document.getElementById("payment-form");
    const cardFields = document.querySelectorAll("#card-form input");
    const upiField = document.getElementById("upi-id");

    // Toggle between payment methods
    document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.value === "card") {
                // Show card form and hide UPI form
                document.getElementById("card-form").style.display = "block";
                document.getElementById("upi-form").style.display = "none";

                // Add 'required' to card fields, remove 'required' from UPI field
                cardFields.forEach((field) => field.setAttribute("required", "required"));
                upiField.removeAttribute("required");
            } else if (this.value === "upi") {
                // Show UPI form and hide card form
                document.getElementById("card-form").style.display = "none";
                document.getElementById("upi-form").style.display = "block";

                // Add 'required' to UPI field, remove 'required' from card fields
                upiField.setAttribute("required", "required");
                cardFields.forEach((field) => field.removeAttribute("required"));
            }
        });
    });

    // Handle form submission
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve selected payment method
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

        if (selectedPaymentMethod === "card") {
            const name = document.getElementById("name").value.trim();
            const cardNumber = document.getElementById("card-number").value.trim();
            const expiryDate = document.getElementById("expiry-date").value.trim();
            const cvv = document.getElementById("cvv").value.trim();

            // Validate card details
            if (!name) {
                alert("Please enter your full name.");
                return;
            }
            if (!/^\d{16}$/.test(cardNumber)) {
                alert("Card number must be exactly 16 digits.");
                return;
            }
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
                alert("Expiry date must be in MM/YY format with a valid month.");
                return;
            }
            if (!/^\d{3}$/.test(cvv)) {
                alert("CVV must be exactly 3 digits.");
                return;
            }
        } else if (selectedPaymentMethod === "upi") {
            const upiId = upiField.value.trim();

            // Validate UPI ID
            if (!upiId) {
                alert("Please enter your UPI ID.");
                return;
            }
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
                alert("Invalid UPI ID. It must follow the format example@upi.");
                return;
            }
        }

        

        // Redirect to track.html
        alert("Payment successful!");
        window.location.href = "track.html";
    });
});

