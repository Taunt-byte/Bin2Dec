# 🔢 Binary-to-Decimal Number Converter

<p align="center">
  Um conversor simples e intuitivo de números binários para decimais, desenvolvido com HTML, CSS e JavaScript.
</p>

---

## 📌 Sobre o projeto

O **Binary-to-Decimal Number Converter** é uma aplicação web que permite converter números do sistema binário (base 2) para o sistema decimal (base 10).

O projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de desenvolvimento web, incluindo manipulação do DOM, validação de entradas, eventos em JavaScript e estilização com CSS.

## ✨ Funcionalidades

- [x] Converter números binários para decimais.
- [x] Validar entradas, aceitando apenas os dígitos `0` e `1`.
- [x] Exibir mensagens para entradas inválidas.
- [x] Converter ao clicar no botão ou pressionar Enter.
- [x] Interface simples e responsiva.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização e responsividade.
- **JavaScript:** lógica de conversão, validação e manipulação do DOM.
- **Git e GitHub:** versionamento e hospedagem do código-fonte.

## 📂 Estrutura do projeto

```text
binary-to-decimal-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/binary-to-decimal-converter.git
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

### 2. Acesse a pasta

```bash
cd binary-to-decimal-converter
```

### 3. Execute a aplicação

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

Não é necessário instalar dependências ou configurar um servidor.

## 🧮 Exemplos de conversão

| Binário (Base 2) | Decimal (Base 10) |
|:---:|:---:|
| `0` | `0` |
| `1` | `1` |
| `10` | `2` |
| `101` | `5` |
| `1011` | `11` |
| `11111111` | `255` |
| `100000000` | `256` |

### Como funciona?

A conversão utiliza as potências de 2 correspondentes a cada posição do número binário.

Por exemplo, o número binário `1011` é convertido da seguinte forma:

```text
1011₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)

1011₂ = 8 + 0 + 2 + 1

1011₂ = 11₁₀
```

Na implementação JavaScript, a função `parseInt(binary, 2)` interpreta a entrada como um número na base 2 e retorna seu valor na base 10.

## 🎯 Objetivos de aprendizagem

Este projeto ajuda a desenvolver conhecimentos em:

- Fundamentos de JavaScript.
- Manipulação do DOM.
- Expressões regulares e validação de dados.
- Eventos e funções.
- Sistemas de numeração.
- Estruturação de páginas com HTML.
- Estilização de interfaces com CSS.
- Organização e documentação de projetos.

## 🔮 Melhorias futuras

As próximas versões poderão incluir:

- Conversão de decimal para binário.
- Conversão entre binário, decimal, octal e hexadecimal.
- Botão para copiar resultados.
- Histórico de conversões.
- Tema claro e escuro.
- Melhorias de acessibilidade.
- Testes automatizados.

## 📸 Capturas de tela

Adicione aqui uma captura de tela da aplicação em funcionamento para demonstrar sua interface.

Exemplo:

```markdown
![Binary-to-Decimal Converter](./screenshots/converter.png)
```

Para utilizar esse exemplo, crie uma pasta chamada `screenshots` e salve nela uma imagem chamada `converter.png`.

## 👨‍💻 Autor

**Lucas Neves**

Projeto desenvolvido para fins educacionais e para compor meu portfólio de desenvolvimento de software.

## 📄 Licença

Este projeto pode ser distribuído sob a licença MIT. Para isso, adicione um arquivo `LICENSE` ao repositório contendo o texto dessa licença.

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
