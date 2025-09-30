<?php
require 'conexao.php';

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);
$usuario = $stmt->fetch();

if ($usuario && password_verify($senha, $usuario['senha'])) {
  if ($usuario['verificado']) {
    echo "✅ Login realizado com sucesso!";
    // Aqui você pode iniciar uma sessão ou redirecionar
  } else {
    echo "⚠️ Você precisa confirmar seu e-mail antes de entrar.";
  }
} else {
  echo "❌ Email ou senha incorretos.";
}
?>
