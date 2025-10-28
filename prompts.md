1-Objetivo
Criar uma API Rest para gestão de tarefas.

2-Contexto
- A API possui as seguintes funcionalidades: registro de administrador, registro de usuários, busca de usuários, busca de 
- A API possui as seguintes funcionalidades: cadastro de administrador, cadastro de usuários, Login de usuários, criação de tarefas(admin), listagem de tarefas(todos), atualização de status(usuário), edição ou exclusão de tarefas(admin), relatório de progresso(admin).
Funcionalidades 
1.	Cadastro de administrador: cria o usuário administrador responsável por gerenciar o sistema.
2.	Cadastro de usuários: permite registrar usuários comuns que receberão tarefas.
3.	Login de usuários: autentica administradores e usuários, retornando token de acesso.
4.	Criação de tarefas (admin): o administrador pode criar novas tarefas e definir título, descrição, prazo e responsável.
5.	Listagem de tarefas (todos): permite visualizar todas as tarefas (admin) ou apenas as próprias tarefas (usuário).
6.	Atualização de status (usuário): o usuário pode alterar o status da tarefa para “não realizado”, “em andamento” ou “concluído”.
7.	Edição ou exclusão de tarefas (admin): o administrador pode editar dados ou remover tarefas.
8.	Relatório de progresso (admin): o administrador pode visualizar quantas tarefas estão concluídas, em andamento ou pendentes.

- Para que eu possa usar as funcionalidades, preciso fazer login como administrador.
- Para que os usuários possam consultar suas tarefas, eles precisam fazer login como usuário.
- Usuarios apenas consultam progresso, administradores acessam todas as funcionalidades do sistema.



3-Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.

