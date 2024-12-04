// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('feedback').onsubmit = function(event) {
//         event.preventDefault(); // Prevent form from submitting in the default way

//         // Get form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const rating = document.querySelector('input[name="rating"]:checked')?.value || ''; // Get the selected rating
//         const experience = document.getElementById('experience').value;

//         // Store feedback data in localStorage (you can use JSON.stringify to save objects)
//         const feedback = { name, email, rating, experience };
//         let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
//         feedbacks.push(feedback);
//         localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

//         // Display alert message confirming the submission
//         alert("Form submitted successfully!");

//         // Optionally, reset the form after submission
//         event.target.reset();
//     };
// });
