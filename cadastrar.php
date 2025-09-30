<?php
require 'conexao.php';
require 'vendor/autoload.php'; // PHPMailer

use PHPMailer\PHPMailer\PHPMailer;

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
$token = bin2hex(random_bytes(16));

// Salvar no banco
$sql = "INSERT INTO usuarios (nome, email, senha, token) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$nome, $email, $senha, $token]);

// Enviar e-mail
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'seuemail@gmail.com';
$mail->Password = 'suasenha';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('seuemail@gmail.com', 'Gibiteka Max Zendron');
$mail->addAddress($email, $nome);
$mail->isHTML(true);
$mail->Subject = 'Confirme seu cadastro';
$mail->Body = "
  Olá $nome,<br><br>
  Clique no link abaixo para confirmar seu cadastro:<br>
  <a href='https://dig.davidla1992.com.br/verificar.php?token=$token'>Confirmar e-mail</a>
";

$mail->send();

echo "Cadastro realizado! Verifique seu e-mail.";
?>

echo "Cadastro realizado! Verifique seu e-mail.";
?>
