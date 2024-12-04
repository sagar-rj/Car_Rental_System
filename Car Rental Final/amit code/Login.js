// const loginDetails = {
//     Email:["sujal.cse122060@bppimt.ac.in", "udita.cse122063@bppimt.ac.in", "amit.cse122035@bppimt.ac.in","sagar.cse122063@bppimt.ac.in"],
//     Password:[29082003, 23122003, 1234, 12345]
// }

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
    }


    const storedPassword = JSON.parse(userData).password;

    if(storedPassword === password){
        
        window.location.href = "CarOwner.html"
        return
    }
    

    document.getElementById('loginform').reset();



    
    
})


console.log("Hello World")