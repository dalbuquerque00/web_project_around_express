# 🗂️ Around the U.S. – Back-End API

Este é o back-end da aplicação **Around the U.S.**, uma API REST construída com **Node.js** e **Express**. Ela gerencia dados de usuários e cartões, servindo como camada de comunicação entre o cliente e os recursos armazenados no servidor.

---

## 📦 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript server-side  
- **Express.js** — Framework minimalista e flexível para criação de servidores HTTP  
- **File System (fs)** — Leitura e manipulação de arquivos JSON  
- **ESLint** — Linter para garantir a padronização e qualidade do código  
- **EditorConfig** — Configuração compartilhada de estilo de código  
- **Nodemon** — Monitoramento e recarregamento automático durante o desenvolvimento

---

## 📁 Estrutura de Diretórios

```
/
├── data/         # Arquivos JSON simulando base de dados
├── routes/       # Definições de rotas para usuários e cartões
├── app.js        # Arquivo principal da aplicação Express
├── package.json  # Metadados e scripts do projeto
```

---

## 🚀 Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm run start
```

3. Para desenvolvimento com hot reload:

```bash
npm run dev
```

---

## 📡 Endpoints da API

| Método | Rota           | Descrição                          |
|--------|----------------|------------------------------------|
| GET    | `/users`       | Retorna todos os usuários          |
| GET    | `/users/:id`   | Retorna um usuário pelo seu `_id` |
| GET    | `/cards`       | Retorna todas as cartas            |

---

## 📘 Códigos de Resposta

- `200 OK` – Requisição bem-sucedida  
- `404 Not Found` – Recurso não encontrado  
- `500 Internal Server Error` – Erro no servidor

---

## 🧪 Requisitos

- Node.js `^18.x` ou superior
- npm `^9.x` ou superior

