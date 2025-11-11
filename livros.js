const livros = [
  { id: 261, autor: "CAST, P. C.; CAST, KRISTIN", titulo: "ESCOLHIDA", edicao: "", ano: "" },
  { id: 2594, autor: "BROWN, DAN", titulo: "ANJOS E DEMÔNIOS", edicao: "", ano: "" },
  { id: 2651, autor: "FIELDING, HELEN", titulo: "BRIDGET JONES LOUCA PELO GAROTO", edicao: "", ano: "" },
  { id: 2709, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. III - AS TERRAS DEVASTADAS", edicao: "", ano: "" },
  { id: 2732, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 2002 },
  { id: 2733, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 2001 },
  { id: 2734, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 1999 }
  // Adicione aqui todos os outros livros que você já enviou
];

function carregarTabela() {
  const corpo = document.getElementById("tabela-livros");
  corpo.innerHTML = "";
  livros.forEach(livro => {
    const linha = `<tr>
      <td>${livro.id}</td>
      <td>${livro.autor}</td>
      <td>${livro.titulo}</td>
      <td>${livro.edicao}</td>
      <td>${livro.ano}</td>
    </tr>`;
    corpo.innerHTML += linha;
  });
}

function filtrarLivros() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const corpo = document.getElementById("tabela-livros");
  corpo.innerHTML = "";
  livros.filter(l =>
    l.autor.toLowerCase().includes(termo) ||
    l.titulo.toLowerCase().includes(termo) ||
    String(l.ano).includes(termo)
  ).forEach(livro => {
    const linha = `<tr>
      <td>${livro.id}</td>
      <td>${livro.autor}</td>
      <td>${livro.titulo}</td>
      <td>${livro.edicao}</td>
      <td>${livro.ano}</td>
    </tr>`;
    corpo.innerHTML += linha;
  });
}

carregarTabela();
