<meta http-equiv='refresh' content='6; url=http://bloggood.ru'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['phone'])) {$email = $_POST['phone']; if ($email == '') {unset($email);}}

 
if (isset($name) && isset($email)){
 
$address = "renat00141@gmail.com";
$mes = "Имя: $name \nPhone: $email ";
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "Сообщение отправлено успешно";}
else {echo "Ошибка, сообщение не отправлено!";}
 
}
else
{
echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>