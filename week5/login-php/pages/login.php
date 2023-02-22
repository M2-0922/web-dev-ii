<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Login Page</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CDN -->
        <link rel="stylesheet" href="../assets/css/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        
        
    </head>
    <body>
        <div class="container">
            <h1>Login</h1>
            <form id="login-form">
                <div class="mb-3 input-field">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control validate" id="email" aria-describedby="emailHelp">
                </div>
                <div class="mb-3 input-field">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control validate" id="password">
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
            <div id="message"></div>
        </div>
        <!-- jQuery CDN -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <!-- external script -->
        <script src="../assets/js/app.js"></script>
    </body>
</html>