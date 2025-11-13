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
    let email = document.getElementById("signInEmail").value.trim()
    let password = document.getElementById("signInPassword").value.trim()
    if( !email || !password ){
      alert("fill all fields ")
      return
    }
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.email === email && u.password === password);
     if(user){
      window.location.href = "https://www.google.com/"
     }else if(email==="manager"&& password==="manager") {
      window.location.href = "../ManagerView/managerView.html"
    }else{
      alert("invalid")
    }
      
} 

function guest(){
  window.location.href ="https://www.google.com/"
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
  
  if (!upperCase.test(password)&&!number.test(password)){
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

// Get the password input and requirement elements
const signUpPassword = document.getElementById("signUpPassword");
const capRequirement = document.getElementById("capRequire");
const numRequirement = document.getElementById("numRequirement");

// Live update while typing
signUpPassword.addEventListener("input", () => {
    const password = signUpPassword.value;

    // Check for capital letter
    capRequirement.style.color = /[A-Z]/.test(password) ? "lightgreen" : "red";

    // Check for number
    numRequirement.style.color = /[0-9]/.test(password) ? "lightgreen" : "red";
});