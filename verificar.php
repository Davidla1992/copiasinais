<?php
require 'conexao.php';

$token = $_GET['token'];

$sql = "UPDATE usuarios SET verificado = 1 WHERE token = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$token]);

if ($stmt->rowCount()) {
  echo "E-mail confirmado com sucesso!";
} else {
  echo "Token inválido ou já confirmado.";
}
?>
