<?php
session_start();

// Configuração do banco de dados
$host = "localhost";      // servidor
$user = "root";           // usuário do MySQL
$pass = "";               // senha do MySQL
$dbname = "gibiteka";     // nome do banco

// Conexão com o banco
$conn = new mysqli($host, $user, $pass, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Recebe dados do formulário
$email = $_POST['usuario'] ?? '';
$senha = $_POST['senha'] ?? '';

// Validação básica
if (empty($email) || empty($senha)) {
    die("Por favor, preencha todos os campos.");
}

// Busca usuário pelo email
$stmt = $conn->prepare("SELECT id, nome, senha FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verifica senha
    if (password_verify($senha, $user['senha'])) {
        // Cria sessão
        $_SESSION['usuario_id'] = $user['id'];
        $_SESSION['usuario_nome'] = $user['nome'];

        // Redireciona para área restrita
        header("Location: area_restrita.php");
        exit();
    } else {
        echo "<h2>Senha incorreta.</h2>";
        echo "<p><a href='usuarios.html'>Voltar</a></p>";
    }
} else {
    echo "<h2>Usuário não encontrado.</h2>";
    echo "<p><a href='usuarios.html'>Voltar</a></p>";
}

$stmt->close();
$conn->close();
?>
