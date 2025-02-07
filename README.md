# 🧪 Resumo dos Testes  

Este projeto contém testes de API, UI e performance utilizando **Cypress**, **Postman** e **JMeter**. Para ver os dados completos entre nas pastas do projeto.

---

## 📌 Tecnologias Utilizadas  

- **Cypress** → Testes de interface web automatizados  
- **Postman** → Testes de API  
- **JMeter** → Testes de performance  

---

## 🚀 Testes Realizados  

### 🖥️ Testes de UI (Cypress)  

Os testes foram realizados no site [Automation Practice](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account), cobrindo os seguintes cenários:

✅ **Cadastro bem-sucedido** → O usuário preenche os dados corretamente e cria a conta com sucesso.  
✅ **Cadastro sem preencher campos obrigatórios** → O sistema exibe uma mensagem de erro informando os campos ausentes.  
✅ **Senha fraca** → Se a senha for muito curta, o sistema exibe um erro informando que ela é inválida.  

🔹 **Resultado:** Todos os testes foram executados com sucesso.

![image](https://github.com/user-attachments/assets/05b38acc-c1c5-4a97-8297-72972c2809a7)

---

### 🔗 Testes de API (Postman)  

Os testes foram realizados na API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/), cobrindo os seguintes endpoints:

- `POST /users` → Simulação de erro **500** ao criar usuário  
- `GET /users` → Retorno **200** com a lista de usuários  
- `POST /comments` → Criação de comentário retorna **201**, porém permite JSONs incompletos ou vazios  

🔹 **Resultado:** Os testes passaram, mas o endpoint `/comments` permite criar posts vazios, o que pode ser um problema.

---

### ⚡ Testes de Performance (JMeter)  

#### **Cenário 1:**  
- **Número de Amostras:** 100  
- **Última Amostra:** 50ms  
- **Média:** 72ms  
- **Desvio Padrão:** 89ms  

#### **Cenário 2:**  
- **Número de Amostras:** 200  
- **Última Amostra:** 390ms  
- **Média:** 231ms  
- **Desvio Padrão:** 106ms  

🔹 **Resultado:** O tempo médio aumentou no segundo cenário, indicando que a API pode sofrer degradação de desempenho sob carga.
