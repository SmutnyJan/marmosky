<?php
?>

<!DOCTYPE html>
<html lang = 'en'>
<head>
<meta charset = 'UTF-8'>
<meta http-equiv = 'X-UA-Compatible' content = 'IE=edge'>
<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'>
<title>Odeslat objednávku</title>
<link rel = 'icon' href = 'images/loga/minilogo.png'>
<link rel = 'stylesheet' href = 'styles/animations.css'>
<link rel = 'stylesheet' href = 'styles/style.css'>
<link rel = 'stylesheet' href = 'styles/scrollbar.css'>
<link rel = 'stylesheet' href = './styles/toogle.css'>
<link href = 'https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Questrial&display=swap' rel = 'stylesheet'>
<script src = './scripts/sendOrder.js'></script>
</head>
<body>
<header class = 'header'>
<nav class = 'navig'>
<div class = 'header-left'>
<a href = '#'><img class = 'minilogo' src = 'images/loga/logo_konec.png'></a>
</div>
<button class = 'hamburger hamburger--elastic' id = 'hamburger' type = 'button'>
<span class = 'hamburger-box'>
<span class = 'hamburger-inner'></span>
</span>
</button>
<ul class = 'header-list flexed' id = 'flexed-list'>
<li><a href = 'eshop.html'>Obchod</a></li>
<li class = 'border'><a class = 'anchor' href = '#oNas'>O nás</a></li>
<li class = 'border'><a class = 'anchor' href = '#naseVyrobky'>Naše výrobky</a></li>
<li class = 'border'><a class = 'anchor' href = '#kontakty'>Kontakty</a></li>
<li class = 'border'><a href = 'https://www.instagram.com/marmosky/'>Instagram</a></li>
</ul>
</nav>
<ul class = 'header-list mobile-header' id = 'normal-list'>
<li class = 'border-mobile'><a href = 'eshop.html'>Obchod</a></li>
<li class = 'border-mobile'><a class = 'anchor' href = '#oNas'>O nás</a></li>
<li class = 'border-mobile'><a class = 'anchor' href = '#naseVyrobky'>Naše výrobky</a></li>
<li class = 'border-mobile'><a class = 'anchor' href = '#kontakty'>Kontakty</a></li>
<li class = 'no-pad'><a href = 'https://www.instagram.com/marmosky/'><img class = 'insta' src = 'images/loga/iglogo.png'></a></li>
</ul>
</header>
<div class = 'centered'>
<img class = 'mikuvOddelovac' src = 'images/marmosky/separatoredited.png'>
</div>
<main>
<?php

/**
* This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';
$boruvka = $_REQUEST['boruvka'];
$malina = $_REQUEST['malina'];
$jahoda = $_REQUEST['jahoda'];
$hruska = $_REQUEST['hruska'];
$jmenoAPrijmeni = $_REQUEST['jmenoAPrijmeni'];
$mesto = $_REQUEST['mesto'];
$psc = $_REQUEST['psc'];
$uliceACisloDomu = $_REQUEST['uliceACisloDomu'];
$tel = $_REQUEST['tel'];
$doprava = $_REQUEST['doprava'];
$cena = $_REQUEST['cena'];
$email = $_REQUEST['email'];



//Create a new PHPMailer instance
$mail = new PHPMailer();

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use)
// SMTP::DEBUG_CLIENT = client messages
// SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_OFF;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption mechanism to use - STARTTLS or SMTPS
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = 'jan.smutny@pslib.cz';

//Password to use for SMTP authentication
$mail->Password = 'Kmenhorolezcu25';

//Set who the message is to be sent from
$mail->setFrom('jan.smutny@pslib.cz');

//Set an alternative reply-to address
$mail->addReplyTo('jan.smutny@pslib.cz');

//Set who the message is to be sent to
$mail->addAddress("jan.smutny@pslib.cz");
$mail->addAddress($email);

$mail->CharSet = 'UTF-8';

//Set the subject line
$mail->Subject = "Objednávka";

$mail->msgHTML("   
<p>Vážený zákazníku,</br>
děkujeme za Váš nákup, objednávku jsme v pořádku přijali.</br>
Děkujeme,</br>
Marmošky</p>
<style type='text/css'> #order {
    font-family: 'Questrial', sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #order td, #order th {
    border: 1px solid rgb(0, 0, 0);
    padding: 8px;
  }
  
  #order tr:nth-child(even){background-color: #f2f2f2;}
  
  #order tr:hover {background-color: #ddd;}
  
  #order th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: crimson;
    color: white;
  } </style>

<table id='order'>
<tr>
    <th>Borůvka:</th>
    <td>".$boruvka."</td>
</tr>
<tr>
    <th>Malina</th>
    <td>".$malina."</td>
</tr>             
<tr>
    <th>Jahoda</th>
    <td>".$jahoda."</td>
</tr>
<tr>
    <th>Hruška</th>
    <td>".$hruska."</td>
</tr>
<tr>
    <th>Jméno a přijmení</th>
    <td>".$jmenoAPrijmeni."</td>
</tr>
<tr>
    <th>Město</th>
    <td>".$mesto."</td>
</tr>
<tr>
    <th>PSČ</th>
    <td>".$psc."</td>
</tr>
<tr>
    <th>Ulice a číslo domu</th>
    <td>".$uliceACisloDomu."</td>
</tr>
<tr>
    <th>Telefon</th>
    <td>".$tel."</td>
</tr>
<tr>
    <th>Doprava</th>
    <td>".$doprava."</td>
</tr>
<tr>
    <th>Cena</th>
    <td>".$cena."</td>
</tr>  
</table>  ");


            if (!$mail->send()) {
                echo '<h3>Vyskytla se chyba: ' . $mail->ErrorInfo . '</h3>';
                echo '<h3>Zkuste prosím odeslat objednávku znovu. Pokud problém přetrvává, neváhejte nás kontaktovat. Omlouváme se za potíže.</h3>';

            } else {
                echo '<h3>Objednávka odeslána</h3>';
                echo '<p>Shrnutí objednávky Vám bylo odesláno na email '.$idk.'</p>';
                echo '<p>Děkujeme za nákup!</p>';
            }
?>
</main>
<footer>
<p>Vojtěch Dejnožka | Jan Smutný | Filip Míka</p>
</footer>
</body>
</html>