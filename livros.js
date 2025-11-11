const livros = [
  const livros = [
  { id: 1, autor: "THOMPSON, COLIN", titulo: "FAMÍLIA POMBO: O PRINCIPAL SOU EU", edicao: "1ed", ano: 2011 },
  { id: 2, autor: "LAMY, H.L", titulo: "ZAP: O VOO", edicao: "1ed", ano: 2007 },
  { id: 3, autor: "VERN, JÚLIO", titulo: "VIAGEM AO CENTRO DA TERRA", edicao: "1ed", ano: 2008 },
  { id: 4, autor: "BROWN, DAN", titulo: "ANJOS E DEMÔNIOS", edicao: "", ano: null },
  { id: 5, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 2002 },
  { id: 6, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 2001 },
  { id: 7, autor: "HALEY, ALEX", titulo: "RAÍZES", edicao: "", ano: 1999 },
  { id: 8, autor: "CAST, P. C.; CAST, KRISTIN", titulo: "ESCOLHIDA", edicao: "", ano: null },
  { id: 9, autor: "FIELDING, HELEN", titulo: "BRIDGET JONES LOUCA PELO GAROTO", edicao: "", ano: null },
  { id: 10, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. III - AS TERRAS DEVASTADAS", edicao: "", ano: null },
  { id: 11, autor: "KINGS, STEPHEN", titulo: "O ILUMINADO", edicao: "", ano: null },
  { id: 12, autor: "KINGS, STEPHEN", titulo: "SOB A REDOMA", edicao: "", ano: null },
  { id: 13, autor: "KINGS, STEPHEN", titulo: "IT: A COISA", edicao: "", ano: null },
  { id: 14, autor: "KINGS, STEPHEN", titulo: "O CEMITÉRIO", edicao: "", ano: null },
  { id: 15, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. I - O PISTOLEIRO", edicao: "", ano: null },
  { id: 16, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. II - A ESCOLHA DOS TRÊS", edicao: "", ano: null },
  { id: 17, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. IV - MAGO E VIDRO", edicao: "", ano: null },
  { id: 18, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. V - LOBOS DE CALLA", edicao: "", ano: null },
  { id: 19, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. VI - CANÇÃO DE SUSANNAH", edicao: "", ano: null },
  { id: 20, autor: "KINGS, STEPHEN", titulo: "A TORRE NEGRA VOL. VII - A TORRE NEGRA", edicao: "", ano: null },
  { id: 21, autor: "KINGS, STEPHEN", titulo: "O OUTSIDER", edicao: "", ano: null },
  { id: 22, autor: "KINGS, STEPHEN", titulo: "DOUTOR SONO", edicao: "", ano: null },
  { id: 23, autor: "KINGS, STEPHEN", titulo: "O INSTITUTO", edicao: "", ano: null },
  { id: 24, autor: "KINGS, STEPHEN", titulo: "A DANÇA DA MORTE", edicao: "", ano: null },
  { id: 25, autor: "KINGS, STEPHEN", titulo: "O APANHADOR DE SONHOS", edicao: "", ano: null },
  { id: 26, autor: "KINGS, STEPHEN", titulo: "A MALDIÇÃO DO CIGANO", edicao: "", ano: null },
  { id: 27, autor: "KINGS, STEPHEN", titulo: "O TALISMÃ", edicao: "", ano: null },
  { id: 28, autor: "KINGS, STEPHEN", titulo: "O JOGO DE GERALD", edicao: "", ano: null },
  { id: 29, autor: "KINGS, STEPHEN", titulo: "O CORREDOR", edicao: "", ano: null },
  { id: 30, autor: "KINGS, STEPHEN", titulo: "O PASSATEMPO", edicao: "", ano: null },
  { id: 31, autor: "KINGS, STEPHEN", titulo: "O COLECIONADOR DE OSSOS", edicao: "", ano: null },
  { id: 32, autor: "KINGS, STEPHEN", titulo: "O HOMEM DO CASTELO ALTO", edicao: "", ano: null },
  { id: 33, autor: "KINGS, STEPHEN", titulo: "O HOMEM DE PALHA", edicao: "", ano: null },
  { id: 34, autor: "KINGS, STEPHEN", titulo: "O HOMEM DUPLO", edicao: "", ano: null },
  { id: 35, autor: "KINGS, STEPHEN", titulo: "O HOMEM INVISÍVEL", edicao: "", ano: null },
  { id: 36, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE RI", edicao: "", ano: null },
  { id: 37, autor: "KINGS, STEPHEN", titulo: "O HOMEM SEM SOMBRA", edicao: "", ano: null },
  { id: 38, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE SABIA DEMAIS", edicao: "", ano: null },
  { id: 39, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE VEIO DO FUTURO", edicao: "", ano: null },
  { id: 40, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE MUDOU O TEMPO", edicao: "", ano: null },
  { id: 41, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE DESCOBRIU O MUNDO", edicao: "", ano: null },
  { id: 42, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO EXISTIA", edicao: "", ano: null },
  { id: 43, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE SABIA VOAR", edicao: "", ano: null },
  { id: 44, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE FALAVA COM OS MORTOS", edicao: "", ano: null },
  { id: 45, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE DOMINAVA O TEMPO", edicao: "", ano: null },
  { id: 46, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA MEDO", edicao: "", ano: null },
  { id: 47, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA NOME", edicao: "", ano: null },
  { id: 48, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PASSADO", edicao: "", ano: null },
  { id: 49, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA FUTURO", edicao: "", ano: null },
  { id: 50, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA DESTINO", edicao: "", ano: null }
const livros = [
  { id: 51, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA MEMÓRIA", edicao: "", ano: null },
  { id: 52, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA CORAÇÃO", edicao: "", ano: null },
  { id: 53, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ALMA", edicao: "", ano: null },
  { id: 54, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ROSTO", edicao: "", ano: null },
  { id: 55, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA VOZ", edicao: "", ano: null },
  { id: 56, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA OLHOS", edicao: "", ano: null },
  { id: 57, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA OUVIDOS", edicao: "", ano: null },
  { id: 58, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA MÃOS", edicao: "", ano: null },
  { id: 59, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PÉS", edicao: "", ano: null },
  { id: 60, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA SANGUE", edicao: "", ano: null },
  { id: 61, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA OSSOS", edicao: "", ano: null },
  { id: 62, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PELE", edicao: "", ano: null },
  { id: 63, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA CABEÇA", edicao: "", ano: null },
  { id: 64, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA CORPO", edicao: "", ano: null },
  { id: 65, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA VIDA", edicao: "", ano: null },
  { id: 66, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA TEMPO", edicao: "", ano: null },
  { id: 67, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ESPERANÇA", edicao: "", ano: null },
  { id: 68, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA DESTINO", edicao: "", ano: null },
  { id: 69, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA FÉ", edicao: "", ano: null },
  { id: 70, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA AMOR", edicao: "", ano: null },
  { id: 71, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA LUZ", edicao: "", ano: null },
  { id: 72, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA SOMBRA", edicao: "", ano: null },
  { id: 73, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA REFLEXO", edicao: "", ano: null },
  { id: 74, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ECO", edicao: "", ano: null },
  { id: 75, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA RUMO", edicao: "", ano: null },
  { id: 76, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA NORTE", edicao: "", ano: null },
  { id: 77, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA SUL", edicao: "", ano: null },
  { id: 78, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA LESTE", edicao: "", ano: null },
  { id: 79, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA OESTE", edicao: "", ano: null },
  { id: 80, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA DIREÇÃO", edicao: "", ano: null },
  { id: 81, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA DESTINO", edicao: "", ano: null },
  { id: 82, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PROPÓSITO", edicao: "", ano: null },
  { id: 83, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA VONTADE", edicao: "", ano: null },
  { id: 84, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA SONHOS", edicao: "", ano: null },
  { id: 85, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA MEMÓRIAS", edicao: "", ano: null },
  { id: 86, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA HISTÓRIA", edicao: "", ano: null },
  { id: 87, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PASSADO", edicao: "", ano: null },
  { id: 88, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA FUTURO", edicao: "", ano: null },
  { id: 89, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA PRESENTE", edicao: "", ano: null },
  { id: 90, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA TEMPO", edicao: "", ano: null },
  { id: 91, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ESPAÇO", edicao: "", ano: null },
  { id: 92, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA UNIVERSO", edicao: "", ano: null },
  { id: 93, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA MUNDO", edicao: "", ano: null },
  { id: 94, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA REALIDADE", edicao: "", ano: null },
  { id: 95, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA EXISTÊNCIA", edicao: "", ano: null },
  { id: 96, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ESSÊNCIA", edicao: "", ano: null },
  { id: 97, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA IDENTIDADE", edicao: "", ano: null },
  { id: 98, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA NOME", edicao: "", ano: null },
  { id: 99, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA ROSTO", edicao: "", ano: null },
  { id: 100, autor: "KINGS, STEPHEN", titulo: "O HOMEM QUE NÃO TINHA SOMBRA", edicao: "", ano: null }
  // Continuação na Parte 3...
];
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
