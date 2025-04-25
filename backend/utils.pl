% This file contains utility functions that assist with data manipulation and retrieval.

% Search for a course by its code
buscar_por_codigo(Codigo, Nome, CH, Tipo, Nivel) :-
    disciplina(Codigo, Nome, CH, Tipo, Nivel).

% Search for courses by type (obrigatoria or optativa)
buscar_por_tipo(Tipo, Disciplinas) :-
    findall((Codigo, Nome, CH, Nivel), disciplina(Codigo, Nome, CH, Tipo, Nivel), Disciplinas).

% Filter courses based on user preferences (e.g., level)
filtrar_por_nivel(Nivel, DisciplinasFiltradas) :-
    findall((Codigo, Nome, CH, Tipo), disciplina(Codigo, Nome, CH, Tipo, Nivel), DisciplinasFiltradas).

% Get all courses
todas_disciplinas(Disciplinas) :-
    findall((Codigo, Nome, CH, Tipo, Nivel), disciplina(Codigo, Nome, CH, Tipo, Nivel), Disciplinas).