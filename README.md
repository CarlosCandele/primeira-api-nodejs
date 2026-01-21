# API de Cursos - Node.js

API RESTful desenvolvida em Node.js com foco em **arquitetura limpa**, **boas práticas de desenvolvimento**, **validação robusta de dados** e **documentação profissional**, simulando um cenário real de aplicação backend em ambiente produtivo.

Este projeto foi construído com o objetivo de consolidar conhecimentos avançados no desenvolvimento de APIs modernas, utilizando ferramentas amplamente adotadas pelo mercado.

---

## 🎯 Objetivo do Projeto

- Desenvolver uma API escalável e bem estruturada
- Aplicar boas práticas de design e organização de código
- Garantir integridade dos dados através de validações rigorosas
- Documentar a API de forma clara e confiável
- Padronizar o ambiente de execução com Docker
- Simular um projeto backend próximo da realidade corporativa

---

## 🧱 Stack Tecnológica

- **Node.js** – Runtime JavaScript
- **Fastify** – Framework web focado em performance e baixo overhead
- **TypeScript** – Tipagem estática para maior segurança
- **Zod** – Validação e tipagem segura em tempo de execução
- **Swagger/OpenAPI** – Documentação automática interativa da API
- **Drizzle ORM** – ORM moderno e type-safe para acesso ao banco de dados
- **Docker & Docker Compose** – Containerização e padronização do ambiente
- **PostgreSQL** – Banco de dados relacional

---

## 🧠 Conceitos Técnicos Aplicados

### Arquitetura e Organização
- Separação clara de responsabilidades
- Estrutura modular de rotas e camadas
- Código preparado para crescimento e manutenção
- Padronização de nomenclaturas e organização de pastas

### Validação e Confiabilidade
- Validação de entrada de dados com **Zod**
- Prevenção de dados inconsistentes e erros em runtime
- Contratos bem definidos entre requisição e resposta

### Banco de Dados e ORM
- Criação e versionamento de tabelas com migrations
- Inserção, leitura e manipulação de registros
- Abstração de queries SQL com Drizzle ORM
- Estrutura preparada para evolução do schema

### Documentação da API
- Integração completa com **Swagger/OpenAPI**
- Endpoints documentados automaticamente
- Facilita testes, integração com front-end e consumo por terceiros
- Interface interativa para explorar e testar a API

### Containerização
- Ambiente padronizado com Docker
- Facilidade de setup e execução em qualquer máquina
- Base sólida para pipelines CI/CD e deploy futuro

---

## 📌 Funcionalidades Atuais

- ✅ Criar novos cursos
- ✅ Listar todos os cursos cadastrados
- ✅ Buscar curso por ID
- ✅ Validação robusta de dados em todas as rotas
- ✅ Documentação interativa via Swagger
- ✅ Logging estruturado com Pino

---

## 📊 Fluxo Principal da Aplicação

```mermaid
graph TD
    A["Requisição HTTP"] --> B{"Tipo de Requisição?"}
    B -->|POST /courses| C["Validação com Zod"]
    B -->|GET /courses| D["Validação com Zod"]
    B -->|GET /courses/:id| E["Validação com Zod"]
    
    C --> F{"Dados Válidos?"}
    D --> G["Conectar ao Banco"]
    E --> H["Conectar ao Banco"]
    
    F -->|Não| I["Retorna Erro 400"]
    F -->|Sim| J["Insert no Banco"]
    
    J --> K["Retorna 201 com courseId"]
    G --> L["Select todos os cursos"]
    H --> M["Select curso por ID"]
    
    L --> N["Retorna 200 com Cursos"]
    M --> O["Retorna 200 com Curso"]
    
    K --> P["Resposta JSON"]
    N --> P
    O --> P
    I --> P
    
    P --> Q["Cliente Recebe Resposta"]
    
    style A fill:#e1f5ff
    style K fill:#c8e6c9
    style N fill:#c8e6c9
    style O fill:#c8e6c9
    style I fill:#ffcdd2
    style Q fill:#f3e5f5
```

---

## 🗂️ Estrutura do Projeto

```
├── src/
│   ├── database/
│   │   ├── client.ts        # Configuração do cliente do banco
│   │   └── schema.ts        # Definição das tabelas (Drizzle)
│   └── routes/
│       ├── create-course.ts # Rota POST /courses
│       ├── get-courses.ts   # Rota GET /courses
│       └── get-course-by-id.ts # Rota GET /courses/:id
├── drizzle/
│   ├── migrations/          # Histórico de migrations
│   └── meta/                # Metadados do Drizzle
├── server.ts                # Configuração do Fastify
├── docker-compose.yml       # Orquestração de containers
├── drizzle.config.ts        # Configuração do Drizzle ORM
├── tsconfig.json            # Configuração do TypeScript
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

---

## 📋 Endpoints da API

### POST `/courses` - Criar um novo curso
Cria um novo curso no banco de dados.

**Body (JSON):**
```json
{
  "title": "Meu Novo Curso"
}
```

**Respostas:**
- `201 Created` - Curso criado com sucesso
```json
{
  "courseId": "550e8400-e29b-41d4-a716-446655440000"
}
```
- `400 Bad Request` - Validação falhou

### GET `/courses` - Listar todos os cursos
Retorna uma lista de todos os cursos cadastrados.

**Resposta `200 OK`:**
```json
{
  "courses": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Meu Novo Curso"
    }
  ]
}
```

### GET `/courses/:id` - Buscar curso por ID
Retorna os detalhes de um curso específico.

**Respostas:**
- `200 OK` - Curso encontrado
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Meu Novo Curso"
}
```
- `404 Not Found` - Curso não encontrado

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js v18 ou superior
- Docker e Docker Compose
- npm ou yarn

### Instalação Local

1. **Clone o repositório:**
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
cd primeira-api-nodejs
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

4. **Inicie o banco de dados com Docker:**
```bash
docker-compose up -d
```

5. **Execute as migrations:**
```bash
npm run db:migrate
```

6. **Inicie o servidor:**
```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

### Acessar a Documentação

A documentação interativa da API (Swagger) está disponível em:
**http://localhost:3000/docs**

---

## 📦 Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento com hot-reload
npm run dev

# Compilar TypeScript
npm run build

# Executar a aplicação compilada
npm run start

# Executar migrations do banco de dados
npm run db:migrate

# Gerar migrations pendentes
npm run db:generate

# Resetar o banco de dados (desenvolvimento apenas)
npm run db:reset
```

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Banco de Dados
DATABASE_URL=postgresql://usuario:senha@localhost:5432/cursos

# Ambiente
NODE_ENV=development

# Porta do servidor
PORT=3000
```

---

## 🐳 Executar com Docker

1. **Build da imagem:**
```bash
docker build -t primeira-api-nodejs .
```

2. **Executar com Docker Compose:**
```bash
docker-compose up
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 🧪 Testes

Para executar os testes:
```bash
npm run test
```

Para testes com cobertura:
```bash
npm run test:coverage
```

---

## 📝 Validações

A API utiliza **Zod** para validação automática de dados:

- **POST `/courses`**: O título deve ter no mínimo 6 caracteres
- Mensagens de erro claras e padronizadas
- Validação em tempo de execução com segurança de tipos

---

## 🌐 Boas Práticas Implementadas

✅ Separação de responsabilidades  
✅ Type-safe com TypeScript  
✅ Validação robusta com Zod  
✅ Documentação automática com Swagger  
✅ Logging estruturado  
✅ Tratamento de erros consistente  
✅ Migrations versionadas  
✅ Containerização com Docker  
✅ Ambiente isolado com Docker Compose  
✅ Code organization modular  

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

---

## 📞 Contato e Suporte

Para dúvidas, sugestões ou reportar bugs:
- Abra uma [issue](https://github.com/SEU_USUARIO/NOME_DO_REPO/issues)
- Entre em contato pelo email ou redes sociais

---

## 🎓 Conhecimentos Consolidados

- ✅ Construção de APIs RESTful modernas
- ✅ Validação e tipagem segura
- ✅ Trabalho com bancos de dados relacionais
- ✅ Containerização e orquestração
- ✅ Documentação profissional de APIs
- ✅ Boas práticas de desenvolvimento
- ✅ Arquitetura escalável

---

**Desenvolvido com ❤️ usando Node.js e Fastify**
