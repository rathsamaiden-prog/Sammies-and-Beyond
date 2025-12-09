document.getElementById("sammies").addEventListener("click", () => {
    window.location.href = "../userView/userView.html";
});

document.getElementById("sides").addEventListener("click", () => {
    window.location.href = "../userView/userView.html#sides";
});

document.getElementById("drinks").addEventListener("click", () => {
    window.location.href = "../userView/userView.html#drinks";
});
document.getElementById("order").addEventListener("click", () => {
    window.location.href = "../userView/userView.html";
});


document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "../LogInSignIn/index.html"; 
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

window.addEventListener("DOMContentLoaded", RolePermissions);



