<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['theme'])) {$theme = $_POST['theme'];}
    $to = "renat0014@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "Салон штор Солнце";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $message = "Тема сообщения: $theme Имя пославшего: $name Телефон: $phone";


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
