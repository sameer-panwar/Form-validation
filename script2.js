-function validateFullName(){
    let fullname=document.getElementById('fullname');
    let fullnameError=document.getElementById('fullname-error');
    fullnameError.textContent='';
    fullname.classList.remove('error-border');

    fullname.addEventListener('input',()=>{
        if(fullname.value===''){
            fullnameError.textContent='Full Name is required';
            fullname.classList.add('error-border');
            return false;
        }
        else if(fullname.value.length<5){
            fullnameError.textContent='Your Name is too short.';
            fullname.classList.add('error-border'); 
            return false;
        }
        else if(!containFullName(fullname.value)){
            fullnameError.textContent='You Only entered your First name, not Full name.';
            fullname.classList.add('error-border');
            return false;
        }
        return true;
    });
}

function submitted(){
    const isFullNameValid= validateFullName();
    return isFullNameValid;
}