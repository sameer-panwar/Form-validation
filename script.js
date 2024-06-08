//submitting the form by pressing Enter key
document.addEventListener('keydown',(event)=>{
    if(event.key=='Enter'){
        submitted();
    }
});




//validation for Full Name input
function validateFullName(){
    let fullname=document.getElementById('fullname');
    let fullnameError=document.getElementById('fullname-error');
    fullnameError.textContent='';

    
        if(fullname.value===''){
            fullnameError.textContent='Full Name is required';
            return false;
        }
        else if(fullname.value.length<5){
            fullnameError.textContent='Your Name is too short.';
            return false;
        }
        else if(!containFullName(fullname.value)){
            fullnameError.textContent='You Only entered your First name, not Full name.';
            return false;
        }
        return true;
   
}


//returns boolean value if full name is not submitted
function containFullName(fullname){
    for(let i=0; i<fullname.length; i++){
        if(fullname[i]===' '){
            return true;
        }
    }
    return false;
}


//validation for Email input
function validateEmail(){
    let email=document.getElementById('email');
    let emailError=document.getElementById('email-error');
    emailError.textContent='';

    if(email.value===''){
        emailError.textContent='Email is required';
        return false;
    }
    else if(!email.value.includes('@')){
        emailError.textContent='Email must contain @'; 
        return false;
    }
    return true;
}



//validation for Contact input
function validateContact(){
    let contact=document.getElementById('contact');
    let contactError=document.getElementById('contact-error');
    contactError.textContent='';

    if(contact.value ===''){
        contactError.textContent='Contact Number is required';
        return false;
    }
    else if(contact.value.length!=10 || contact.value=='0123456789' || contact.value=='1234567890'){
        contactError.textContent='Your Phone number is not Correct';
        return false;
    }
    return true;
}



//validation for password input
function validatePassword(){
    let password=document.getElementById('password');
    let passwordError=document.getElementById('password-error');
    passwordError.textContent='';

    if(password.value===''){
        passwordError.textContent='Password is required';
        return false;
    }
    else if(password.value.length<8){
        passwordError.textContent='Password must be 8 characters long';
        return false;
    }
    else if(password.value.toLowerCase()=='password'){
        passwordError.textContent='Password cannot be password';
        return false;
    }
    
    else if(password.value===fullname){
        passwordError.textContent=`Password cannot be ${fullname}`; 
        return false;
    }
    return true;
}


//validation for Confirm password input
function validateConfirmPassword(){
    let password=document.getElementById('password');
    let confirmPassword=document.getElementById('confirm-password').value;
    let confirmPasswordError=document.getElementById('confirm-password-error');
    confirmPasswordError.textContent='';

    if(confirmPassword.value==''){
        confirmPasswordError.textContent='Confirm Password is required';
        return false;
    }
    
    else if(password.value!=confirmPassword.value){
        confirmPasswordError.textContent='Password does not match';
        return false;
    }
    return true;
}

//to color the input border red if input is not valid
function toggleErrorBorder(isValid, element) {
    if (!isValid) {
        element.classList.add("error-border");
    } else {
        element.classList.remove("error-border");
    }
}

function submitted(){    
    const isFullNameValid = validateFullName();
    toggleErrorBorder(isFullNameValid, fullname);
    
    const isEmailValid = validateEmail();
    toggleErrorBorder(isEmailValid, email);
    
    const isContactValid = validateContact();
    toggleErrorBorder(isContactValid, contact);
    
    const isPasswordValid = validatePassword();
    toggleErrorBorder(isPasswordValid, password);
    
    const isConfirmPasswordValid = validateConfirmPassword();
    toggleErrorBorder(isConfirmPasswordValid, confirmPassword);
    

    return isFullNameValid && isEmailValid && isConfirmPasswordValid && isContactValid && isPasswordValid;
}