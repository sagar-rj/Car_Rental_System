const fullname = document.getElementById('fullName')
const emailPhone = document.getElementById('emailphone')
const city = document.getElementById('City')

function validateLogin() {
  // Check if the fullname is empty or contains only spaces
  if (!fullname.value.trim()) {
    return alert('full Name is required!')
  }

  // Check if emailPhone is empty or contains only spaces
  if (!emailPhone.value.trim()) {
    return alert('Email / phone number is required!')
  }

  // Check if city is empty or contains only spaces
  if (!city.value.trim()) {
    return alert('city is required!')
  }

  if(true){
    return alert('Login succesfully!')
    
  }
}

const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', validateLogin);
