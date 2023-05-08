<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $mail = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefono = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $mensaje = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Construct the email message
    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "Su correo electrónico es " . $mail . ",\r\n";
    $mensaje .= "Y su teléfono es " . $telefono . ",\r\n";
    $mensaje .= "Y dice: " . $mensaje . ",\r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    // Set up the email headers
    $header = "From: $mail\r\n";
    $header .= "Reply-To: $mail\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Send the email
    $destinatario = 'dmedinat.ar@gmail.com';
    $asunto = 'Este mail fue enviado desde tu portfolio';
    $enviado = mail($destinatario, $asunto, $mensaje, $header);

    // Check if the email was sent successfully and redirect to the thank you page
    if ($enviado) {
        header('Location: gracias.html');
        exit;
    } else {
        echo 'Hubo un error al intentar enviar el mensaje. Por favor intenta de nuevo más tarde.';
    }
}

// $nombre = $_POST['name'];
// $mail = $_POST['email'];
// $telefono = $_POST['phone'];
// $mensaje = $_POST['message'];

// $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
// $mensaje = "Su correo electrónico es " . $mail . ",\r\n";
// $mensaje = "Y su teléfono es " . $telefono . ",\r\n";
// $mensaje = "Y dice: " . $_POST['mensaje'] . ",\r\n";
// $mensaje = "Enviado el " . date('d/m/Y', time());

// $destinatario = 'dmedinat.ar@gmail.com';
// $asunto = 'Este mail fue enviado desde tu portfolio';

// mail($destinatario, $asunto, utf8_decode($mensaje), $header);

// header('Location:gracias.html')

?>