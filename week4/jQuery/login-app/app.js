$(".tablinks").click(function (event) {
    showTab(event, $(this).attr("data-tab"));
})

$("#login").submit(function(evt) {
    evt.preventDefault();

    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();

    if(!validateEmail(email)){
        $("#emailError").text("Please enter a valid email address");
    }else if(password.length < 8){
        $("#passwordError").text("Password must be at least 8 characters long.")
    }else{
        $("#emailError").text("");
        $("#passwordError").text("");
        console.log({email: email, password: password});
    }
})

$("#register").submit(function(evt) {
    evt.preventDefault();

    let fullName = $("#fullName").val();
    let email = $("#registerEmail").val();
    let password = $("#registerPassword").val();
    let confirmPassword = $("#confirmPassword").val();

    // console.log(fullName, email, password, confirmPassword);
    if(fullName.length < 3){
        $("#fullNameError").text("Full Name must be at least 3 characters long.")
    }else if(!validateEmail(email)){
        $("#registerEmailError").text("Please enter a valid email address");
    }else if(password.length < 8){
        $("#registerPasswordError").text("Password must be at least 8 characters long.")
    }else if(password !== confirmPassword){
        $("#confirmPasswordError").text("Passwords does not match!")
    }else{
        $("#fullNameError").text("");
        $("#registerEmailError").text("");
        $("#registerPasswordError").text("");
        $("#confirmPasswordError").text("");
      
        console.log({
            fullName,
            email,
            password,
            confirmPassword
        });
    }
})

function validateEmail(email){
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function showTab(event, tabName){
    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    $("#" + tabName).show();
    $(event.currentTarget).addClass("active")
}