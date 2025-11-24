let selectedRating = 0;

const stars = document.querySelectorAll(".star");
const nameInput = document.getElementById("nameInput");
const reviewInput = document.getElementById("reviewContainer");
const submitBtn = document.getElementById("submitButton");
const reviewGallery = document.querySelector(".reviewGallery");

// Click stars to set rating
stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-value"));
        updateStars(selectedRating);
    });
});

// Update the stars visually
function updateStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute("data-value"));
        star.setAttribute("name", value <= rating ? "star" : "star-outline");
    });
}

function reviews() {
    const nameVal = nameInput.value.trim();
    const reviewVal = reviewInput.value.trim();

    if (!nameVal || !reviewVal || selectedRating === 0) {
        alert("Please fill all fields and select a rating.");
        return;
    }

    let allReviews = JSON.parse(localStorage.getItem("review")) || [];

    allReviews.push({
        name: nameVal,
        review: reviewVal,
        rating: selectedRating
    });

    localStorage.setItem("review", JSON.stringify(allReviews));
    alert("Thanks for the review!");

    nameInput.value = "";
    reviewInput.value = "";
    selectedRating = 0;
    updateStars(0);
    location.reload();
}

// Display reviews
function loadReviews() {
    const allReviews = JSON.parse(localStorage.getItem("review")) || [];

   

    allReviews.forEach(r => {
        const starsHTML = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);

        const reviewCard = document.createElement("div");
        reviewCard.classList.add("reviewCard");
        reviewCard.innerHTML = `
            <h3>${r.name}</h3>
            <p>${r.review}</p>
            <p class="rating">${starsHTML}</p>
        `;

        reviewGallery.appendChild(reviewCard);
    });
}

// Load reviews on page load
window.onload = loadReviews;


