# Odyspace Tokens

**Odyspace Tokens** é uma biblioteca de **Design Tokens** que fornece um conjunto padronizado e escalável de valores compartilhados, como cores, espaçamentos, tipografia e muito mais. Esses tokens ajudam a manter consistência no design e permitem fácil integração em sistemas de design e aplicações web.

---

## 📦 **Instalação**

Você pode instalar a biblioteca via **npm** ou **yarn**:

### **Com npm**
```bash
npm install @odyspace/tokens
```

### **Com yarn**
```bash
yarn add @odyspace/tokens
```

---

## 🚀 **Funcionalidades**

- **Cores**: Paletas de cores globais e específicas para temas claros e escuros.
- **Espaçamentos**: Valores padronizados para margens, paddings e tamanhos.
- **Tipografia**: Tamanhos, pesos e estilos para fontes consistentes.
- **Tamanhos de Componente**: Dimensões padrão para botões, inputs e outros elementos.
- **Integrado com SCSS, CSS-in-JS e JSON**: Use tokens em diferentes tecnologias.

---

## 📚 **Documentação**

### **Como Usar**

#### **1. Importar Tokens no SCSS**
No SCSS, importe os tokens diretamente para usar em seus estilos:

```scss
@import "@odyspace/tokens";

TO-DO
```

#### **2. Usar Tokens no JavaScript**
Os tokens também estão disponíveis como objetos JSON e JS para integrar com bibliotecas em javascript/typescript:

```javascript
import tokens from '@odyspace/tokens';

TO-DO
```

---

### **Estrutura dos Tokens**

#### **1. Foundation (Base Comum)**
A **Foundation** é o núcleo que contém valores fixos e independentes de temas, como:
- Cores básicas
- Tipografias
- Espaçamentos
- Bordas
- Sombreamentos

#### **2. Theme (Customizações por Tema)**
O **Theme** contém variações que personalizam os valores da Foundation com base em um contexto, como:
- Tema claro ou escuro
- Temas personalizados para diferentes marcas

---

### **Como Funciona**

#### **Foundation (Base)**
- Define valores que podem ser usados diretamente ou como referência nos temas.
- **Exemplo**: A cor `brand` em `{color.blue.500.value}` é definida uma vez e usada em temas diferentes.

#### **Themes (Variações)**
- Personalizam as cores, espaçamentos, etc., para diferentes temas.
- **Exemplo**: O tema base usa `{color.blue.500.value}` para `background`.

---

### **Vantagens da Estrutura**

1. **Reutilização**:
    - Valores de Foundation são consistentes e podem ser referenciados em vários temas.
2. **Escalabilidade**:
    - Adicionar novos temas ou modificar os existentes é fácil.
3. **Manutenção Simples**:
    - Separação clara entre valores fixos e específicos de tema.

---

## 🌐 **Compatibilidade**
Os tokens são fornecidos nos seguintes formatos:
- **SCSS**: Para uso direto em folhas de estilo.
- **JSON/JS**: Para integração em aplicações JavaScript e frameworks.
- **CSS Custom Properties**: Para fácil uso em qualquer projeto web.

---

## 📝 **Licença**
Este projeto está licenciado sob a [MIT License](LICENSE).

---