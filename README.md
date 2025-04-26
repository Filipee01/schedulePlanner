# Planejador de Horários em Prolog

## Visão Geral

O Planejador de Horários é uma aplicação que auxilia os usuários a criarem seus horários acadêmicos com base nas disciplinas disponíveis. Ele utiliza Prolog para a lógica de backend e uma interface amigável para seleção de disciplinas e geração de horários.

## Funcionalidades

- **Seleção de Disciplinas**: Filtra disciplinas por nível.
- **Planejamento de Horários**: Permite arrastar e soltar disciplinas em uma tabela de horários.
- **Exportação para PDF**: Gera um arquivo PDF com o horário planejado.
- **Backend em Prolog**: Processa dados e fornece endpoints para o frontend.

## Estrutura do Projeto

- **Backend**:
  - `base.pl`: Base de dados com as disciplinas.
  - `schedule_logic.pl`: Lógica do servidor e endpoints.
- **Frontend**:
  - `index.html`: Estrutura da interface.
  - `app.js`: Lógica de interação do usuário.
  - `styles.css`: Estilo visual da aplicação.

## Como Executar

1. **Configurar o Backend**:
   - Certifique-se de ter o SWI-Prolog instalado.
   - Inicie o servidor no arquivo `schedule_logic.pl`:
     ```prolog
     ?- server(3000).
     ```
2. **Executar o Frontend**:
   - Abra o arquivo `index.html` em um navegador.

## Tecnologias Utilizadas

- **Prolog**: Lógica de backend.
- **HTML/CSS/JavaScript**: Interface do usuário.
- **jsPDF**: Exportação de horários para PDF.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
