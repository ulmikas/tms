<?php
	$_POST = json_decode(file_get_contents('php://input'), true);
		
	if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['email']) and !empty($_POST['message'])){
		$name = trim(strip_tags($_POST['name']));
		$phone = trim(strip_tags($_POST['phone']));
		$mail = trim(strip_tags($_POST['email']));
		$region = trim(strip_tags($_POST['region']));
		$customregion = trim(strip_tags($_POST['customregion']));
		$message = trim(strip_tags($_POST['message']));
		
		$to = 'tool.mach.supp@gmail.com';
		$subject = 'Заполнена контактная форма с ' . $_SERVER['HTTP_REFERER'];
		$subject = "=?utf-8?b?". base64_encode($subject) ."?=";
		$message = "Вам написал: " . $name . "\nEmail: " . $mail . 
							 "\nТелефон: " . $phone . "\nРегион: " . (($customregion) ? $customregion : $region) . "\nСообщение: " . $message;
		$headers = 'Content-type: text/plain; charset="utf-8"';
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
		
		mail($to, $subject, $message, $headers);

		$className = "popup popup--success";
		$msg = "<p>Ваше сообщение успешно отправлено!</p><p>Вы получите ответ в ближайшее время</p>";
	} 
	else {
		$className = "popup ";
		$msg = "<p>Для отправки сообщения заполните все поля!</p>";
	}
?>

<div class="<?=$className?>">
	<?php echo $msg; ?>
	<div class="popup__close">&times;</div>
</div>
