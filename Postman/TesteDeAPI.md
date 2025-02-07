# Cenários de Teste - API JSONPlaceholder

## 1️⃣ POST /users - Simulação de erro 500  
**Descrição:** Simula um erro interno no servidor ao tentar criar um usuário.  

### 🔹 Passos:
1. Enviar uma requisição `POST` para `https://jsonplaceholder.typicode.com/users`  
2. Enviar um payload inválido (por exemplo, sem os campos esperados).  
3. Verificar se a API retorna o código de status `500 Internal Server Error`.  

### 🔹 Resultado Esperado:
- O servidor deve retornar `500 Internal Server Error`.  
- O corpo da resposta pode conter uma mensagem indicando erro interno.  

---

## 2️⃣ GET /users - Sucesso 200  
**Descrição:** Obtém a lista de usuários cadastrados.  

### 🔹 Passos:
1. Enviar uma requisição `GET` para `https://jsonplaceholder.typicode.com/users`.  
2. Validar a resposta HTTP.  
3. Verificar se a estrutura do JSON contém os campos esperados (`id`, `name`, `email`, etc.).  

### 🔹 Resultado Esperado:
- O servidor deve retornar `200 OK`.  
- A resposta deve conter um array de usuários.  
- Cada usuário deve possuir os campos esperados.  

---

## 3️⃣ POST /comments - Sucesso 201 (com possível falha de validação)  
**Descrição:** Cria um novo comentário, mas mesmo com JSON incompleto ou vazio, a API permite a criação.  

### 🔹 Passos:
1. Enviar uma requisição `POST` para `https://jsonplaceholder.typicode.com/comments` com um corpo JSON incompleto ou vazio.  
2. Validar a resposta HTTP.  
3. Verificar se a API retorna `201 Created`, mesmo quando faltam campos essenciais.  

### 🔹 Resultado Esperado:
- O servidor deve retornar `201 Created`.  
- A API aceita o comentário mesmo se o JSON estiver incompleto ou vazio (isso pode ser um problema de validação).  

---

## ⚠️ Observações  
- A API JSONPlaceholder é um serviço de teste e pode não simular erros reais como `500 Internal Server Error`.  
- A aceitação de `POST /comments` com JSON vazio pode indicar uma falha na validação do backend.  

---
