// document.addEventListener('DOMContentLoaded', function() {
//     // Get the feedback container element
//     const feedbackContainer = document.querySelector('.feedback-container');
//     if (feedbackContainer) {
//         // Retrieve feedbacks from localStorage
//         const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

//         // Loop through the feedbacks and create cards
//         feedbacks.forEach(function(feedback) {
//             const feedbackCard = document.createElement("div");
//             feedbackCard.classList.add("feedback-card");

//             // Name
//             const feedbackName = document.createElement("h3");
//             feedbackName.textContent = feedback.name;
//             feedbackCard.appendChild(feedbackName);

//             // Rating
//             // const feedbackRating = document.createElement("div");
//             // feedbackRating.classList.add("rating");
//             // for (let i = 5; i >= 1; i--) {
//             //     const star = document.createElement("span");
//             //     star.classList.add("material-symbols-outlined");
//             //     star.textContent = i <= feedback.rating ? "star" : "star_border"; // Filled stars based on rating
//             //     feedbackRating.appendChild(star);
//             // }
//             // feedbackCard.appendChild(feedbackRating);

//             // Rating - only display the number of stars based on the rating
//         const feedbackRating = document.createElement("div");
//         feedbackRating.classList.add("rating");
//         for (let i = 0; i < feedback.rating; i++) {
//             const star = document.createElement("span");
//             star.classList.add("material-symbols-outlined");
//             star.textContent = "star"; // Display a filled star
//             feedbackRating.appendChild(star);
//         }
//         feedbackCard.appendChild(feedbackRating);

//             // Experience
//             const feedbackText = document.createElement("p");
//             feedbackText.classList.add("feedback-text");
//             feedbackText.textContent = `"${feedback.experience}"`;
//             feedbackCard.appendChild(feedbackText);

//             // Append the feedback card to the feedback container
//             feedbackContainer.appendChild(feedbackCard);
//         });
//     } else {
//         console.error("Feedback container not found");
//     }
// });
