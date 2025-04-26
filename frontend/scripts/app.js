// Lista global para armazenar disciplinas selecionadas
let disciplinasSelecionadas = [];

// Evento de submissão do formulário para buscar disciplinas
document
  .getElementById("schedule-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nivel = document.getElementById("nivel").value;
    const disciplinasList = document.getElementById("disciplinas-list");

    // Limpa a lista de disciplinas disponíveis
    disciplinasList.innerHTML = "";

    try {
      // Faz uma requisição para o backend Prolog
      const response = await fetch(
        `http://localhost:3000/disciplinas?nivel=${nivel}`
      );
      const disciplinas = await response.json();

      // Adiciona as disciplinas na lista com funcionalidade de arrastar
      disciplinas.forEach((disciplina) => {
        const li = document.createElement("li");
        li.textContent = `${disciplina.codigo} - ${disciplina.nome} (${disciplina.ch}h)`;
        li.draggable = true; // Torna o item arrastável
        li.dataset.disciplina = JSON.stringify(disciplina);

        // Evento de início do arrasto
        li.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", li.dataset.disciplina);
        });

        disciplinasList.appendChild(li);
      });
    } catch (error) {
      console.error("Erro ao buscar disciplinas:", error);
    }
  });

// Função para configurar eventos de dragover, drop e dblclick em uma célula
function configurarDropzone(cell) {
  // Permite soltar na célula
  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Evento de soltar
  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    const disciplinaData = e.dataTransfer.getData("text/plain");
    const disciplina = JSON.parse(disciplinaData);

    // Verifica se a célula já contém uma disciplina
    if (cell.textContent.trim() !== "") {
      alert("Já existe uma disciplina neste horário e dia!");
      return;
    }

    // Adiciona a disciplina na célula
    cell.textContent = `${disciplina.nome} (${disciplina.codigo})`;
    cell.dataset.disciplina = disciplinaData;
  });

  // Evento de duplo clique para remover a disciplina
  cell.addEventListener("dblclick", () => {
    if (cell.textContent.trim() !== "") {
      const confirmacao = confirm("Deseja remover esta disciplina?");
      if (confirmacao) {
        cell.textContent = ""; // Remove o conteúdo da célula
        delete cell.dataset.disciplina; // Remove o dado associado
      }
    }
  });
}

// Configura as células existentes como dropzones
const dropzones = document.querySelectorAll(".dropzone");
dropzones.forEach((cell) => {
  configurarDropzone(cell);
});

// Função para criar uma nova linha com células dropzones
function criarNovaLinha(horario) {
  const tabela = document
    .getElementById("tabela-horario")
    .querySelector("tbody");
  const novaLinha = document.createElement("tr");

  // Adiciona a célula de horário
  const horarioCell = document.createElement("td");
  horarioCell.textContent = horario;
  novaLinha.appendChild(horarioCell);

  // Adiciona células vazias para os dias
  for (let i = 0; i < 7; i++) {
    const novaCelula = document.createElement("td");
    novaCelula.classList.add("dropzone");

    // Configura a nova célula como dropzone
    configurarDropzone(novaCelula);

    novaLinha.appendChild(novaCelula);
  }

  // Adiciona a nova linha à tabela
  tabela.appendChild(novaLinha);
}

// Função para imprimir o horário criado em PDF
document.getElementById("print-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf; // Certifique-se de que a biblioteca jsPDF está incluída
  const doc = new jsPDF();

  // Adiciona o título ao PDF
  doc.setFontSize(16);
  doc.text("Horário", 105, 10, { align: "center" }); // Centraliza o título

  // Seleciona a tabela do horário
  const tabela = document.getElementById("tabela-horario");

  // Converte a tabela para o PDF
  doc.autoTable({
    html: tabela,
    startY: 20, // Define a posição inicial da tabela no PDF
    styles: {
      fontSize: 8, // Reduz o tamanho da fonte para caber no PDF
      cellPadding: 2,
      halign: "center", // Centraliza o texto nas células
    },
    headStyles: {
      fillColor: [52, 66, 74], // Cor de fundo do cabeçalho
      textColor: [255, 255, 255], // Cor do texto do cabeçalho
      fontStyle: "bold", // Coloca o texto do cabeçalho em negrito
      halign: "center", // Centraliza o texto do cabeçalho
    },
    bodyStyles: {
      halign: "center", // Centraliza o texto do corpo
    },
  });

  // Salva o PDF
  doc.save("horario.pdf");
});

// // Função para imprimir o horário criado em PDF
// document.getElementById("print-pdf").addEventListener("click", () => {
//   const { jsPDF } = window.jspdf; // Certifique-se de que a biblioteca jsPDF está incluída
//   const doc = new jsPDF();

//   // Adiciona o título ao PDF
//   doc.setFontSize(16);
//   doc.text("Horário", 10, 10);

//   // Seleciona a tabela do horário
//   const tabela = document.getElementById("tabela-horario");

//   // Converte a tabela para o PDF
//   doc.autoTable({
//     html: tabela,
//     startY: 20, // Define a posição inicial da tabela no PDF
//     styles: {
//       fontSize: 8, // Reduz o tamanho da fonte para caber no PDF
//       cellPadding: 2,
//     },
//     headStyles: {
//       fillColor: [52, 66, 74], // Cor de fundo do cabeçalho
//       textColor: [255, 255, 255], // Cor do texto do cabeçalho
//     },
//   });

//   // Salva o PDF
//   doc.save("horario.pdf");
// });
