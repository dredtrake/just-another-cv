<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
require './env.php';

function getIp() {
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		return $_SERVER['HTTP_CLIENT_IP'];
	} else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		return $_SERVER['HTTP_X_FORWARDED_FOR'];
	}
	if(array_key_exists('REMOTE_ADDR', $_SERVER)) {
		return $_SERVER['REMOTE_ADDR'];
	} else {
		return getHostByName(getHostName());
	}
}

function checkIsNotBot($data) {
	$ch = curl_init(GOOGLE_RECAPTCHA_URL);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result = curl_exec($ch);
	curl_close($ch);
	$result = json_decode($result, false);
	$return = false;
	var_dump($data, $result);
	if($result !== null) {
		$return = $result->success;
	}
	return $return;
}

function envoisMail($from, $name, $message){
	$mail = new PHPMailer;
	try {
		$mail->SMTPDebug = SMTP_DEBUG;                            // Enable verbose debug output
		$mail->isSMTP();                                          // Set mailer to use SMTP
		$mail->CharSet = 'utf-8';                                 // charset
		$mail->Host = SMTP_SERVER;                                // Specify main and backup SMTP servers
		$mail->SMTPAuth = SMTP_AUTH;                              // Enable SMTP authentication
		$mail->Username = EMAIL_ACCOUNT;                          // SMTP username
		$mail->Password = EMAIL_PASSWORD;                         // SMTP password
		$mail->SMTPSecure = SMTP_SECURE;                          // Enable TLS encryption, `ssl` also accepted
		$mail->Port = SMTP_PORT;                                  // TCP port to connect to
		$mail->From = EMAIL_ACCOUNT;
		$mail->FromName = $name;
		$mail->addAddress(EMAIL_ACCOUNT);                         // Add a recipient
		$mail->addReplyTo($from, $name);
		// $mail->addCC('cc@example.com');
		// $mail->addBCC('bcc@example.com');
		// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		$mail->isHTML(false);                               // Set email format to HTML
		$mail->Subject = 'Your resume send you a message';
		// parsing the mail with the template 
		// $template = str_replace(array("{MESSAGE}"), 
		// 						 array("<br>" . $message), $template);
		// $message = str_replace(array("<br>", "<br />"), "\r\n", $message);
		$mail->Body    = $message;
		// $mail->Body    = $template;
		$mail->AltBody = strip_tags($message);
		$mail->send();
		// echo 'Message could not be sent.';
		// echo 'Mailer Error: ' . $mail->ErrorInfo;
		return ['send' => 'success'];
	} catch(Exception $e) {
		return ['send' => 'failed', 'message' => $mail->ErrorInfo];
	}
}

$from = isset($_POST['from']) && $_POST['from'] != '' ? $_POST['from'] : 'andre@bidule.org';
$name = isset($_POST['name']) && $_POST['name'] != '' ? $_POST['name'] : 'djo wallou';
$message = isset($_POST['message']) && $_POST['message'] != '' ? $_POST['message'] : 'salut toi ça va ? moi plutot cool tout àa ? bref , lalal al ala lla a aal ala lal la la lla';
$gRecaptchaToken = isset($_POST['g-recaptcha']) && $_POST['g-recaptcha'] != '' ? $_POST['g-recaptcha'] : null;
$errors = [];
$errors['errors'] = [];

if($from == null) {
	$errors['errors'][] = 'You must provide a valid email address';
}
if($name == null) {
	$errors['errors'][] = 'You must provide a name';
}
if($from == null) {
	$errors['errors'][] = 'You must provide a message';
}

$data = [
	'secret'   => GOOGLE_RECAPTCHA_KEY_SECRET,
	'response' => $gRecaptchaToken,
	'remoteip' => getIp()
];

var_dump($_REQUEST, $_POST, $gRecaptchaToken, $from, $name);
if(!checkIsNotBot($data)) {
	$errors[] = '01100001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01100001 00100000 01100010 01101111 01110100 00100000 00111111<br>Are you a bot?';
}

if(empty($errors)) {
	echo json_encode(envoisMail($from, $name, $message));
} else {
	echo json_encode($errors);
}