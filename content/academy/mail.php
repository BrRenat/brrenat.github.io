<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    $to = "renat0014@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "Академия моды и стиля"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $message = "Моя почта: $name";


    $send = mail ($to, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success"><b>Спасибо! Сейчас вы будете перенаправлены!</b></p></center><script language="JavaScript" type="text/javascript">
<!-- 
location="thx.html" 
//--> 
</script>';
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
