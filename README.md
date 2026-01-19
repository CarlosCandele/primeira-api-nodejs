# Cost Management API

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

- **Node.js**
- **Fastify** – Framework web focado em performance e baixo overhead
- **Zod** – Validação e tipagem segura em tempo de execução
- **Swagger (OpenAPI)** – Documentação automática da API
- **ORM** – Abstração do acesso ao banco de dados relacional
- **Docker & Docker Compose** – Containerização e padronização do ambiente
- **Banco de Dados Relacional** (PostgreSQL / MySQL)

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
- Criação e versionamento de tabelas
- Inserção e listagem de registros de custos
- Abstração de queries SQL para maior produtividade
- Estrutura preparada para evolução do schema

### Documentação da API
- Integração completa com **Swagger**
- Endpoints documentados automaticamente
- Facilita testes, integração com front-end e consumo por terceiros

### Containerização
- Ambiente padronizado com Docker
- Facilidade de setup e execução
- Base sólida para pipelines CI/CD e deploy futuro

---

## 📌 Funcionalidades Atuais

- Criação de registros de custos
- Listagem de custos cadastrados
- Validação de dados em todas as rotas
- Documentação acessível via Swagger

---

## 🚀 Como Executar o Projeto

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Acessar o diretório
cd cost-management-api

# Subir os containers
docker-compose up
