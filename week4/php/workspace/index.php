<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <h1>
            <?php 
                // echo "Hello Developers!";

                $name = "Kubilay";
                $age = 50;
                $isComplete = false;
                $fruits = array("apple", "banana", "cherry");

                // echo "Hello $name, You are $age year old and He likes $fruits[0]";

                function greet($name) {
                    echo "Hello, $name!";
                }

                function displayFruitName($arr){
                    for($i = 0; $i < count($arr); $i++){
                        echo $arr[$i] . "<br>";
                    }
                }
                displayFruitName($fruits)
                // greet($name); // Outputs: Hello, John!
            ?>
        </h1>
        
        <h2>
        <?php
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                $name = $_GET['name'];
                echo "Hello, $name!";
            }
        ?>
        </h2>
        <script src="" async defer></script>
    </body>
</html>