$("#login-form").submit((ev) => {
    ev.preventDefault();

    let email = $("#email").val();
    let password = $("#password").val();

    let formData = {
        "email": email,
        "password": password
    }

    $.ajax({
        type: 'POST',
        url: '../../api/v1/endpoints/login.php',
        data: formData,
        dataType: 'json',
        encode: true
      })
      .done(function(data) {
        console.log(data);
        if (data.success) {
          $('#message').html('<p>' + data.message + '</p>');
        } else {
          $('#message').html('<p>' + data.message + '</p>');
        }
      });

})

$("#register-form").submit((ev) => {
    ev.preventDefault();

    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();

    let formData = {
        "username": username,
        "email": email,
        "password": password
    }

    $.ajax({
        type: 'POST',
        url: '../../api/v1/endpoints/register.php',
        data: formData,
        dataType: 'json',
        encode: true
      })
      .done(function(data) {
        console.log(data);
        if (data.success) {
          $('#message').html('<p>' + data.message + '</p>');
        } else {
          $('#message').html('<p>' + data.message + '</p>');
        }
    });
})