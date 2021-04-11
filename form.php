<?php
$token = "1752636127:AAGqpcYZY2-GpPJT7SckzaF_xM6-ib1n11E";
$chat_id = "-1001441528728";

$date = $_POST['date'];
$time = $_POST['time'];
$person = $_POST['person'];
$firstName = $_POST['firstName'];
$phone = $_POST['phone'];

$formArr = array (
  'Дата:' => $date,
  'Час:' => $time,
  'К-сть гостей:' => $person,
  'Ім\'я:' => $firstName,
  'Телефон:' => $phone
);

foreach($formArr as $key => $value) {
  $txt.= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  echo "Заявка на бронювання попередньо підтверджена!
  <br>
  Якщо у нас виникнуть питання - ми Вам зателефонуємо!";
} else {
  echo "Щось пішло не так. Будь-ласка спробуйте ще зараз або зателефонуйте нам +380979997539!";
}
?>