# API de Gestão de Tarefas

## Descrição
API REST para cadastro de administradores, usuários, tarefas e relatório de progresso. Utiliza autenticação JWT e banco de dados em memória.

## Funcionalidades
- Cadastro de administrador
- Cadastro de usuários
- Login de usuários e administradores
- Criação de tarefas (admin)
- Listagem de tarefas (admin/usuário)
- Atualização de status de tarefas (usuário)
- Edição ou exclusão de tarefas (admin)
- Relatório de progresso (admin)

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `service/` - Lógica de negócio
- `model/` - Modelos e banco de dados em memória
- `middleware/` - Autenticação JWT
- `resources/` - Documentação Swagger

## Autenticação
- JWT obrigatório para acessar rotas protegidas
- Administradores têm acesso total
- Usuários acessam apenas suas tarefas e progresso

## Documentação Swagger
Acesse a documentação completa em `/docs` após iniciar o servidor.

## Instalação e Execução
1. Instale as dependências:
   ```bash
   npm install express swagger-ui-express jsonwebtoken
   ```
2. Inicie o servidor:
   ```bash
   node app.js
   ```
3. Acesse a API em `http://localhost:3000` e a documentação em `http://localhost:3000/docs`

## Endpoints Principais
Consulte o arquivo `resources/swagger.json` ou `/docs` para detalhes dos endpoints, modelos de resposta e códigos de erro.
