<?php
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
$nome           = $_POST['nome'] ?? '';
$sexo           = $_POST['sexo'] ?? '';
$nascimento     = $_POST['nascimento'] ?? '';
$documento      = $_POST['documento'] ?? '';
$email          = $_POST['email'] ?? '';
$celular        = $_POST['celular'] ?? '';
$aceita_contato = $_POST['aceita_contato'] ?? '';
$uf             = $_POST['uf'] ?? '';
$cidade         = $_POST['cidade'] ?? '';
$senha          = $_POST['senha'] ?? '';

// Validação básica
if (empty($nome) || empty($sexo) || empty($nascimento) || empty($documento) || empty($email) || empty($celular) || empty($aceita_contato) || empty($uf) || empty($cidade) || empty($senha)) {
    die("Por favor, preencha todos os campos obrigatórios.");
}

// Criptografa a senha
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

// Prepara e executa inserção
$stmt = $conn->prepare("INSERT INTO usuarios 
    (nome, sexo, nascimento, documento, email, celular, aceita_contato, uf, cidade, senha) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssss", $nome, $sexo, $nascimento, $documento, $email, $celular, $aceita_contato, $uf, $cidade, $senhaHash);

if ($stmt->execute()) {
    echo "<h2>Cadastro realizado com sucesso!</h2>";
    echo "<p><a href='usuarios.html'>Clique aqui para voltar e fazer login</a></p>";
} else {
    echo "<h2>Erro ao cadastrar:</h2> " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
