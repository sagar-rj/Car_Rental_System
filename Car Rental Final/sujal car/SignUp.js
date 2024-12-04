// document.getElementById('signupform').addEventListener('submit', (event) => {
//     event.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

//     console.log(email);
    

//     if(email === '' || password === ''){
//         alert("Please fill all the fields");
//         return
//     }

//     let emailExist = localStorage.getItem(email);

//     if(emailExist){
//         document.getElementById('invalid').innerHTML = "User already exist please login"
//         document.getElementById('invalid').style.display = "block"
//         setTimeout(() =>{
//             window.location.href = "Login.html"
//         },3000)
        
//         return
//     }

//     const user = {password: password}
//     localStorage.setItem(email, JSON.stringify(user));
//     window.location.href = "signedUpSuccessfully.html"
    

//     document.getElementById('signupform').reset();

// })






document.getElementById('signupform').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const invalidMessage = document.getElementById('invalid');

    // Clear previous error message
    invalidMessage.style.display = "none";

    // Check if fields are empty
    if (email === '' || password === '') {
        alert("Please fill all the fields");
        return;
    }

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        invalidMessage.innerHTML = "Invalid email format. Please use a valid email.";
        invalidMessage.style.display = "block";
        return;
    }

    // Check for duplicate dots in the local part (before @)
    const localPart = email.split('@')[0];
    if (localPart.includes('..')) {
        invalidMessage.innerHTML = "Invalid email: Consecutive dots are not allowed.";
        invalidMessage.style.display = "block";
        return;
    }

    // Check if email already exists in localStorage
    let emailExist = localStorage.getItem(email);
    if (emailExist) {
        invalidMessage.innerHTML = "User already exists. Please log in.";
        invalidMessage.style.display = "block";
        setTimeout(() => {
            window.location.href = "Login.html";
        }, 3000);
        return;
    }

    // Save the user to localStorage
    const user = { password: password };
    localStorage.setItem(email, JSON.stringify(user));
    window.location.href = "signedUpSuccessfully.html";

    document.getElementById('signupform').reset();
});
