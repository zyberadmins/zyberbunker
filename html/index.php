<?php

$test = 0;
$logged_out = false;

if ($_GET["username"] == "user" && $_GET["password"] == "P@ssw0rd") {
    header("Location: home.php");
} else {
    $test++;
    $logged_out = true;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Zyberbunker</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="modal-menu" id="modalMenu">
        <h1 id="special-title">
            THIS WEBSITE USES COOKIES!!!
        </h1>
        <h2>No Account?</h2>
        <?php
if ($logged_out && $test < 2) {
    echo "<h3>Oh, so <span class=\"special-word\">very sad!</span></h3>";
} else {
    echo "<h3>Oh, <span class=\"special-word\">sad!</span></h3>";
}
?>
        <form class="zyber-form" id="zyberLogin" action="index.php" method="get">
            <!-- <button id="exitBtn"><i class="fa-solid fa-circle-xmark"></i></button> -->
            <div>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username">
            </div>
            <div>
                <label for="password">Password: </label>
                <input type="password" name="password" id="password">
            </div>
            <input type="submit" value="Login" class="btn">
        </form>
	<a id="create_account" href="#" style="color: white;">Need an Account?</a>
	<p> Or just type in "User" and "P@ssw0rd"...</p>
    </div>

    <div class="zyber-info">
        <div class="zyber-info-prompt">
        <h1>This is Zyberbunker</h1>
        <h2>Abandon All Hope, And So On And So Forth...</h2>
        <h3>You should not register here</h3>
        <h4>You have been warned</h4>
        <small>Fuck You</small>
        <p>Enjoy</p>
        </div>
        <div class="zyber-register-form">
            <form class="register">
                <label for="username">Username: *</label>
                <input type="text" name="username" id="username">
                <label for="password">Password: *</label>
                <input type="password" name="password" id="password">
                <label for="sex">Sex: *</label>
                <select name="sex" id="sex">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
                <label for="email">Email: *</label>
                <input type="email" name="email" id="email">
                <button class="btn" id="btn-register">Register</button>
                <button class="btn" id="exit-register">Exit</button>
            </form>
            <br>
        </div>
        <p style="margin-top: 20px;">If it has an *, it's mandatory information</p>
        <small>Even though I don't need it</small>
    </div>

    <script src="js/scriptIndex.js"></script>

<?php include "data/includes/page_end.php"?>
