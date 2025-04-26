# Planejador de Horários em Prolog

## Visão Geral 🎯

O Planejador de Horários é um projeto desenvolvido para a disciplina de Lógica Aplicada à Computação da Universidade Federal da Paraíba (UFPB). Ele tem como objetivo facilitar a criação de horários acadêmicos para os alunos, oferecendo uma solução simples e prática.

A aplicação utiliza Prolog para a lógica de backend e uma interface amigável para que os usuários possam selecionar disciplinas e gerar seus horários de forma eficiente. Com isso, elimina-se a necessidade de criar horários manualmente em ferramentas como Excel, que podem ser trabalhosas e demoradas. O Planejador de Horários busca tornar esse processo mais rápido e acessível para todos.

## Funcionalidades 👨‍💻

- **Seleção de Disciplinas**: Filtra disciplinas por nível.
- **Planejamento de Horários**: Permite arrastar e soltar disciplinas em uma tabela de horários.
- **Exportação para PDF**: Gera um arquivo PDF com o horário planejado.
- **Backend em Prolog**: Processa dados e fornece endpoints para o frontend.

## Estrutura do Projeto 🧱

- **Backend**:
  - `base.pl`: Base de dados com as disciplinas.
  - `schedule_logic.pl`: Lógica do servidor e endpoints.
- **Frontend**:
  - `index.html`: Estrutura da interface.
  - `app.js`: Lógica de interação do usuário.
  - `styles.css`: Estilo visual da aplicação.

## Como Executar 🚀

1. **Configurar o Backend**:
   - Certifique-se de ter o SWI-Prolog instalado.
   - Inicie o servidor no arquivo `schedule_logic.pl`:
     ```prolog
     ?- server(3000).
     ```
2. **Executar o Frontend**:
   - Abra o arquivo `index.html` em um navegador.

## Tecnologias Utilizadas 🖥

- **Prolog**: Lógica de backend.
- **HTML/CSS/JavaScript**: Interface do usuário.
- **jsPDF**: Exportação de horários para PDF.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
