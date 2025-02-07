# 📌 Relatório de Testes - Formulário de Cadastro (Cypress)

## 📝 Descrição  
Este documento apresenta os resultados dos testes automatizados executados no formulário de cadastro utilizando **Cypress**.  

---

## ✅ Cenários de Teste Executados  

### 1️⃣ Preenchimento correto do formulário  
**Descrição:** Preencher todos os campos obrigatórios corretamente e enviar o formulário.  
**Resultado esperado:** Deve exibir uma mensagem de sucesso.  
**Resultado obtido:** ✅ **Teste aprovado** – O sistema confirmou o cadastro com sucesso.  

---

### 2️⃣ Campos obrigatórios vazios  
**Descrição:** Tentar enviar o formulário sem preencher os campos obrigatórios.  
**Resultado esperado:** O sistema deve exibir mensagens de erro para os campos ausentes.  
**Resultado obtido:** ✅ **Teste aprovado** – O sistema impediu o envio e exibiu os erros corretamente.  

---

### 3️⃣ Senha fraca  
**Descrição:** Inserir uma senha fraca (exemplo: `"12345"`) e tentar cadastrar.  
**Resultado esperado:** O sistema deve exibir uma mensagem de erro informando que a senha é fraca.  
**Resultado obtido:** ✅ **Teste aprovado** – O sistema rejeitou a senha e mostrou a validação corretamente.  

---

## 📊 Conclusão  
Todos os cenários de teste foram executados com sucesso e os resultados foram **conformes com as expectativas**. O sistema validou corretamente os campos obrigatórios, a força da senha e a confirmação de e-mail.  
