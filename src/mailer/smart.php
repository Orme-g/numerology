<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
// $mail->SMTPDebug = 3;                               // Enable verbose debug output


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'grafkin.test@gmail.com';                 // Наш логин
$mail->Password = 'gsbsttyzaboqnaqo';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('grafkin.test@gmail.com', 'Numerology');   // От кого письмо 
$mail->addAddress('gamali7480@pgobo.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $name;
$mail->Body    = '
		Пользователь отправил вопрос через сайт <br> 
	Имя: ' . $name . ' <br>
	<br>
	Почтовый адрес: ' . $email . '<br>
	<br>
	Вопрос: ' . $text . '';


if(!$mail->send()) {
    $result = false;
} else {
    $result = true;
}

echo json_encode($result);

?>