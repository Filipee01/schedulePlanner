:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_parameters)).

:- consult('base.pl').

% Define o endpoint
:- http_handler(root(disciplinas), disciplinas_handler, []).

% Inicia o servidor
server(Port) :-
    http_server(http_dispatch, [port(Port)]).

% Handler para buscar disciplinas por nível com suporte a CORS
disciplinas_handler(Request) :-
    http_parameters(Request, [nivel(Nivel, [integer])]),
    findall(
        _{codigo: Codigo, nome: Nome, ch: CH},
        disciplina(Codigo, Nome, CH, _, Nivel),
        Disciplinas
    ),
    cors_enable, % Adiciona cabeçalhos CORS
    reply_json(Disciplinas).

% Adiciona suporte a CORS
:- use_module(library(http/http_cors)).
:- set_setting(http:cors, [*]). % Permite requisições de qualquer origem

% Endpoint para processar o horário
:- http_handler(root(criar_horario), criar_horario_handler, []).

criar_horario_handler(Request) :-
    http_read_json_dict(Request, DisciplinasSelecionadas),
    % Aqui você pode processar as disciplinas selecionadas
    reply_json(_{status: "Horário criado com sucesso", disciplinas: DisciplinasSelecionadas}).