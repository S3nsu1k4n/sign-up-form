body = document.querySelector('body');

let submit_button = document.querySelector("#submit-button");

submit_button.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button press");

  let first_name = document.getElementsByName('first_name')[0];
  let last_name = document.getElementsByName('last_name')[0];
  let email = document.getElementsByName('email')[0];
  let phone_number = document.getElementsByName('phone_number')[0];
  let password = document.getElementsByName('password')[0];
  let confirm_password = document.getElementsByName('confirm_password')[0];
  
  let match_error = document.querySelector(".error")
  let password_row = document.querySelector("#password-row");

  // if both password input do not match
  if(password.value != confirm_password.value){
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    if(!match_error){
      error_message = document.createElement("div");
      error_message.classList.add("error");
      error_message.textContent = "* Passwords do not match";
      error_message.style.color = "red";
      password_row.appendChild(error_message);
    }
  }
  else{
    if(match_error){
      match_error.remove()
    }
    password.style.borderColor = "#E5E7EB"
    confirm_password.style.borderColor = "#E5E7EB"
  }
})