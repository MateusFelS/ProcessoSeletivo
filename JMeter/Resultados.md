# Resultados dos Testes de Performance - JMeter

## **Resultados do Cenário 1: GET /users**
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

## **Resultados do Cenário 2: POST /posts**
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
