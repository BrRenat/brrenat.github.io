<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['title'])) {$title = $_POST['title'];}
    if (isset($_POST['text'])) {$text = $_POST['text'];}
    if (isset($_POST['service'])) {$service = $_POST['service'];}
    $to = "renat0014@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "Genesis media group";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $message = "Имя пославшего: $name Телефон: $phone Почта: $email Услуга: $service Тема сообщения: $title Текст сообщения: $text";


    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Спасибо за отправку вашего сообщения!</p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
