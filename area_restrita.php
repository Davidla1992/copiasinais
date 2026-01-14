<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['usuario_id'])) {
    // Se não estiver logado, redireciona para a página de login/cadastro
    header("Location: usuarios.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Área Restrita – Gibiteka Max Zendron</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 800px;
      margin: 50px auto;
      background-color: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      text-align: center;
    }

    h1 {
      color: #0077cc;
    }

    p {
      color: #333;
      font-size: 18px;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #0077cc;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
    }

    a:hover {
      background-color: #005fa3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Bem-vindo, <?php echo htmlspecialchars($_SESSION['usuario_nome']); ?>!</h1>
    <p>Você está logado na área restrita da Gibiteka Max Zendron.</p>
    <p>Aqui você pode acessar conteúdos exclusivos, eventos e informações reservadas.</p>
    <a href="logout.php">Sair</a>
  </div>
</body>
</html>
