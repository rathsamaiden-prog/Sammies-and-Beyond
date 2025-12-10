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
     const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { role: "guest" };
   

    allReviews.forEach((r, index) => {
        const starsHTML = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);

        const reviewCard = document.createElement("div");
        reviewCard.classList.add("reviewCard");
        reviewCard.innerHTML = `
            <button class="deleteReview" data-index="${index}">delete</button>
            <h3>${r.name}</h3>
            <p>${r.review}</p>
            <p class="rating">${starsHTML}</p>
        `;
            if (currentUser.role === "guest" || currentUser.role === "user") {
            reviewCard.querySelector(".deleteReview").style.display = "none"
            }
        reviewGallery.appendChild(reviewCard);
    });
   
 }
 document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "../index.html"; 
});

function RolePermissions() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { role: "guest" };

    const logoutBtn = document.getElementById("logoutBtn");
    const managerBtn = document.getElementById("mngView");

    if (!logoutBtn || !managerBtn) return;

    
    if (currentUser.role === "guest") {
        logoutBtn.style.display = "none";
        managerBtn.style.display = "none";
    }

    
    else if (currentUser.role === "user") {
        logoutBtn.style.display = "block";
        managerBtn.style.display = "none";
    }

   
    else if (currentUser.role === "manager") {
        logoutBtn.style.display = "block";
        managerBtn.style.display = "block";
    }
}
reviewGallery.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteReview")) {
        const index = parseInt(e.target.dataset.index);
        let allReviews = JSON.parse(localStorage.getItem("review")) || [];
        allReviews.splice(index, 1);
        localStorage.setItem("review", JSON.stringify(allReviews));
        reviewGallery.innerHTML = "";
        loadReviews();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    RolePermissions(); 
    loadReviews();     
});