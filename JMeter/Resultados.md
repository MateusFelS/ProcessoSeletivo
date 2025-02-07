# Resultados dos Testes de Performance - JMeter

## Cenário 1: Teste de Carga no GET /users

### **Objetivo**
Avaliar o tempo de resposta da API ao listar usuários com 100 requisições simultâneas.

### **Configuração**
- **Endpoint:** `GET /users`
- **Número de Threads:** 100
- **Tempo de Ramp-up:** 10 segundos
- **Duração:** 1 minuto

### **Critérios de Sucesso**
- O servidor deve responder com **status 200** para todas as requisições.
- O tempo médio de resposta deve ser **inferior a 100ms**.
- O desvio padrão dos tempos de resposta não deve ser muito alto.

## **Resultados do Cenário 1:**
| Métrica            | Valor  |
|--------------------|--------|
| **Número de Amostras** | 100    |
| **Última Amostra**     | 50ms   |
| **Média de Resposta**  | 72ms   |
| **Desvio Padrão**      | 89ms   |

### **Análise**
- O tempo médio de resposta (72ms) foi **rápido e aceitável**.
- O desvio padrão (89ms) mostra certa variação nos tempos de resposta, indicando pequenas oscilações na API.  

---

## Cenário 2: Teste de Carga no POST /posts

### **Objetivo**
Verificar como a API se comporta ao receber 200 requisições simultâneas para criação de posts.

### **Configuração**
- **Endpoint:** `POST /posts`
- **Número de Threads:** 200
- **Tempo de Ramp-up:** 20 segundos
- **Duração:** 2 minutos
- **Corpo da Requisição:** 

```json
  {
    "title": "Teste JMeter",
    "body": "Esse é um teste de performance com JMeter",
    "userId": 1
  }
```

## **Resultados do Cenário 2:**
| Métrica            | Valor  |
|--------------------|--------|
| **Número de Amostras** | 200    |
| **Última Amostra**     | 390ms  |
| **Média de Resposta**  | 231ms  |
| **Desvio Padrão**      | 106ms  |

### **Análise**
- O endpoint **suportou 200 requisições simultâneas**, mas o tempo médio aumentou para 231ms.  
- O desvio padrão (106ms) indica **variações significativas nos tempos de resposta**.  
- A última amostra (390ms) mostra um tempo alto, possivelmente por sobrecarga no servidor.  

---

# **Conclusão**
- O GET `/users` apresentou **tempos de resposta rápidos e estáveis**, enquanto o POST `/comments` demonstrou **variações maiores**, sugerindo um possível gargalo na criação de novos registros.  
- Recomenda-se **otimização no processamento de dados** para manter a estabilidade da API sob alta carga.  
