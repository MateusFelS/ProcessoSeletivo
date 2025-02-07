# 📝 Cenários de Teste de Performance - JMeter

## 📌 Cenário 1: Teste de Carga no GET /users

### 🎯 **Objetivo**
Avaliar o tempo de resposta da API ao listar usuários com 100 requisições simultâneas.

### 🔧 **Configuração**
- **Endpoint:** `GET /users`
- **Número de Threads:** 100
- **Tempo de Ramp-up:** 10 segundos
- **Duração:** 1 minuto

### ✅ **Critérios de Sucesso**
- O servidor deve responder com **status 200** para todas as requisições.
- O tempo médio de resposta deve ser **inferior a 100ms**.
- O desvio padrão dos tempos de resposta não deve ser muito alto.

---

## 📌 Cenário 2: Teste de Carga no POST /comments

### 🎯 **Objetivo**
Verificar como a API se comporta ao receber 200 requisições simultâneas para criação de comentários.

### 🔧 **Configuração**
- **Endpoint:** `POST /comments`
- **Número de Threads:** 200
- **Tempo de Ramp-up:** 20 segundos
- **Duração:** 2 minutos
- **Corpo da Requisição:** 
  ```json
  {
    "name": "Teste de Comentário",
    "email": "teste@email.com",
    "body": "Este é um comentário de teste."
  }
