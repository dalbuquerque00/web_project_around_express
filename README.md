# 🗂️ Web Project Around Express

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MongoDB. Ele permite a criação, leitura, atualização e exclusão (CRUD) de usuários e cartões, seguindo a arquitetura MVC.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript server-side
- **Express.js** – Framework web leve e robusto
- **MongoDB** + **Mongoose** – Banco de dados NoSQL e ODM
- **Postman** – Testes de requisições HTTP
- **MongoDB Compass** – Interface gráfica para visualização dos dados
- **Nodemon** – Reload automático em ambiente de desenvolvimento

---

## 📁 Estrutura do Projeto

```
web_project_around_express/
├── controllers/       # Lógica de negócios para usuários e cards
├── models/            # Schemas Mongoose
├── routes/            # Definição das rotas da API
├── app.js             # Arquivo principal do servidor
├── package.json       # Configuração do projeto
```

---

## 📡 Endpoints da API

### Usuários (`/users`)
| Método | Rota                 | Descrição                                |
|--------|----------------------|------------------------------------------|
| GET    | `/users`             | Retorna todos os usuários                |
| GET    | `/users/:userId`     | Retorna um usuário por ID                |
| POST   | `/users`             | Cria um novo usuário                     |
| PATCH  | `/users/me`          | Atualiza nome e descrição do usuário     |
| PATCH  | `/users/me/avatar`   | Atualiza o avatar do usuário             |

### Cartões (`/cards`)
| Método | Rota                    | Descrição                                |
|--------|-------------------------|------------------------------------------|
| GET    | `/cards`                | Retorna todos os cards                   |
| POST   | `/cards`                | Cria um novo card                        |
| DELETE | `/cards/:cardId`        | Remove um card (se for o dono)           |
| PUT    | `/cards/:cardId/likes`  | Adiciona um like ao card                 |
| DELETE | `/cards/:cardId/likes`  | Remove um like do card                   |

---

## 🧪 Como Rodar Localmente

1. Instale as dependências:

```bash
npm install
```

2. Certifique-se de que o MongoDB esteja rodando localmente:

```bash
brew services start mongodb-community@7.0 
```

3. Inicie o servidor com:

```bash
npm run dev
```

4. Acesse via Postman em: `http://localhost:3000`

---

## 💾 Banco de Dados

O banco `aroundb` será criado automaticamente ao executar o projeto pela primeira vez. Ele contém as coleções:

- `users`
- `cards`

Você pode visualizá-las com o MongoDB Compass.

---

## 🔐 Autenticação (a implementar)

Atualmente, o ID do usuário é injetado manualmente no `req.user` via middleware. Em versões futuras, recomenda-se:

- Autenticação com JWT
- Middleware de proteção de rotas
- Registro e login de usuários

---
