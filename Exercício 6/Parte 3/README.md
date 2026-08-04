## Navbar, Páginas Internas e Cards de Produtos
Nesta terceira parte do exercício, o projeto foi expandido com a implementação de uma navbar responsiva em todas as páginas, criação de páginas internas funcionais e adição de cards de produtos temáticos.
### Principais Implementações:
#### Navbar Responsiva
A navbar foi implementada usando o componente navbar do Bootstrap, com as seguintes características:

- **Menu colapsável**: Em dispositivos móveis, o menu se transforma em um ícone de hamburger que expande/contrai ao ser clicado.
- **Links funcionais**: Todos os links navegam corretamente entre as páginas do projeto.
- **Estilo temático**: Mantém a paleta de cores de Pânico 6 (preto e vermelho).
- **Sticky positioning**: A navbar permanece no topo durante a navegação.

### Páginas Internas Criadas
1. **produtos.html**
Exibe um catálogo com 6 cards de produtos temáticos, cada um contendo:
- Título e descrição
- Preço
- Botão "Adicionar ao Carrinho"

**Produtos inclusos**:
- Máscara de Ghostface (Réplica Premium) - R$ 299,90
- Câmera de Segurança Noturna 4K - R$ 1.499,90
- Fone com Cancelamento de Ruído (Edição Limitada) - R$ 899,90
- Lanterna LED Tática 10.000 Lumens - R$ 349,90
- Smartwatch Robusto com GPS - R$ 749,90
- Drone com Câmera 4K e Visão Noturna - R$ 2.499,90

2. **sobre.html**
**Apresenta informações sobre a empresa, incluindo**:
- História da MercadoTech
- Missão e valores
- Razões para escolher a empresa
- Cards informativos sobre qualidade, inovação, confiabilidade e atendimento

3. **contato.html**
**Contém um formulário de contato completo com:**
- Campos para nome, email, telefone
- Seletor de assunto
- Área de texto para mensagem
- Informações de contato (telefone, email, endereço)

4. **carrinho.html**
**Exibe um resumo de compras com:**
- Tabela de produtos no carrinho
- Cálculo de subtotal, frete e desconto
- Resumo do pedido com total
- Métodos de pagamento aceitos

### Atualizações no CSS
O arquivo assets/css/style.css foi expandido com novos estilos para:
- Cards de produtos com efeitos hover
- Formulários com validação visual
- Tabelas responsivas
- Navbar com efeitos de transição
- Listas e informações temáticas
- Responsividade em dispositivos móveis

### Critérios de Aceite Atendidos
 A navbar é responsiva e funcional em todas as páginas
✓ Os cards utilizam classes Bootstrap
✓ Todas as páginas usam o mesmo CSS externo
✓ Os links entre páginas funcionam corretamente
✓ O layout se adapta a celular e desktop
✓ Nenhum CSS inline foi utilizado

Este projeto demonstra a aplicação prática de Bootstrap para criar um site de vendas profissional, responsivo e temático, mantendo a coesão visual e a funcionalidade em todas as páginas.



