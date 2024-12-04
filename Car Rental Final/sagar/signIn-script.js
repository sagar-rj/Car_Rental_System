document.getElementById('signupform').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(email);
    

    if(email === '' || password === ''){
        alert("Please fill all the fields");
        return
    }

    let emailExist = localStorage.getItem(email);

    if(emailExist){
        document.getElementById('invalid').innerHTML = "User already exist please login"
        document.getElementById('invalid').style.display = "block"
        setTimeout(() =>{
            window.location.href = "login.html"
        },3000)
        
        return
    }

    const user = {password: password}
    localStorage.setItem(email, JSON.stringify(user));
    window.location.href = "signedUpSuccessfully.html"
    

    document.getElementById('signupform').reset();

})