function signUp() {
  const name = document.getElementById("signUpName").value.trim();
  const email = document.getElementById("signUpEmail").value.trim();
  const password = document.getElementById("signUpPassword").value.trim();

 
  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }
  if(!passwordcheck(password)){
    return
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];


  if (users.some(user => user.email === email)) {
    alert("Email already exists");
    return;
  }
  
  
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");

 
  document.getElementById("signUpName").value = "";
  document.getElementById("signUpEmail").value = "";
  document.getElementById("signUpPassword").value = "";
}



function signIn(){
    let email = document.getElementById("signInEmail").value.trim().toLowerCase()
    let password = document.getElementById("signInPassword").value.trim()
    if( !email || !password ){
      alert("fill all fields ")
      return
    }
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.email.toLowerCase() === email && u.password === password);
    
      if(user){
  
      localStorage.setItem("currentUser", JSON.stringify({ email, name: user.name, role: "user" }));
       window.location.href = "./homeScreen/home.html"
       return
     }else if(email==="manager"&& password==="manager") {
       localStorage.setItem("currentUser", JSON.stringify({ email, name: "Manager", role: "manager" }));
      window.location.href = "./homeScreen/home.html"
        return

    }else{
      alert("invalid")
    }
      
} 

function guest(){
  localStorage.setItem("currentUser", JSON.stringify({ role: "guest" }));
  window.location.href ="../homeScreen/home.html"
}

function showSignIn() {
    document.getElementById("signIn").style.display = "flex";
    document.getElementById("signUp").style.display = "none";

    document.getElementById("btnSignIn").classList.add("active");
    document.getElementById("btnSignUp").classList.remove("active");
}

function showSignUp() {
    document.getElementById("signIn").style.display = "none";
    document.getElementById("signUp").style.display = "flex";

    document.getElementById("btnSignIn").classList.remove("active");
    document.getElementById("btnSignUp").classList.add("active");
}

function passwordcheck(password){

  var upperCase = /[A-Z]/
  var number = /[0-9]/
  
  if (!upperCase.test(password)||!number.test(password)){
    alert("invalid password")
    return false
  }else if (!number.test(password)){
    alert("add number")
    return false
  }else if (!upperCase.test(password)){
    alert("add capital letter")
    return false
  }
  else {
    alert("password set")
    return true
  }

}

window.addEventListener("DOMContentLoaded", () => {
    capRequirement.style.color = "red";
    numRequirement.style.color = "red";
});
const signUpPassword = document.getElementById("signUpPassword");
const capRequirement = document.getElementById("capRequire");
const numRequirement = document.getElementById("numRequirement");


signUpPassword.addEventListener("input", () => {
    const password = signUpPassword.value;

    capRequirement.style.color = /[A-Z]/.test(password) ? "lightgreen" : "red";

 
    numRequirement.style.color = /[0-9]/.test(password) ? "lightgreen" : "red";
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "./index.html"; 
});

function RolePermissions() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { role: "guest" };

    const logoutBtn = document.getElementById("logoutBtn");
    const managerBtn = document.getElementById("managerView");

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
