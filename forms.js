const formElement = document.querySelector("form")

formElement.addEventListener("submit", function(e){
    e.preventDefault();
    
    const firstnameField = document.querySelector("#firstname");
    const lastnameField = document.querySelector("#lastname")
    const emailField = document.querySelector("#email")
    const phoneField = document.querySelector("#phone")
    const dobField = document.querySelector("#DOB")
    const genderField = document.querySelector("#gender")
    const passwordField = document.querySelector("#password")

    // console.log(emailField)
    
    console.log({
        firstname: firstnameField.value,
        lastname: lastnameField.value,
        email: emailField.value,
        phone: phoneField.value,
        dob: dobField.value,
        gender: genderField.value,
        password: passwordField.value,

    })
});