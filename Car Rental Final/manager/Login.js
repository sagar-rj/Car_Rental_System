
document.getElementById('loginform').addEventListener('submit', (event) =>{
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(email === '' || password === ''){
        
        alert("Please fill all the fields");
        return
    }

    let userData = localStorage.getItem(email);

    if(!userData){
        document.getElementById('invalid').innerHTML = "Email doesn't exist please Sign Up"
        document.getElementById('invalid').style.display = "block"
        setTimeout(() =>{
            window.location.href = "SignUp.html"
        },3000)
        
        return
    }


    const storedPassword = JSON.parse(userData).password;

    if(storedPassword === password){
        
        window.location.href = "manager.html"
        return
    }
    

    document.getElementById('loginform').reset();

})


