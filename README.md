# 🔢 Binary-to-Decimal Number Converter

<p align="center">
  A simple and intuitive binary-to-decimal number converter built with HTML, CSS, and JavaScript.
</p>

---

## 📌 About the Project

The **Binary-to-Decimal Number Converter** is a web application that allows users to convert numbers from the binary number system (base 2) to the decimal number system (base 10).

This project was developed to practice fundamental web development concepts, including DOM manipulation, input validation, JavaScript events, and CSS styling.

## ✨ Features

- [x] Convert binary numbers to decimal.
- [x] Validate inputs, accepting only the digits `0` and `1`.
- [x] Display error messages for invalid inputs.
- [x] Convert numbers by clicking the button or pressing Enter.
- [x] Simple and responsive user interface.

## 🛠️ Technologies Used

- **HTML5:** Application structure.
- **CSS3:** Styling and responsive design.
- **JavaScript:** Conversion logic, input validation, and DOM manipulation.
- **Git and GitHub:** Version control and source code hosting.

## 📂 Project Structure

```text
binary-to-decimal-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Taunt-byte/Bin2Dec.git
```

### 2. Navigate to the Project Directory

```bash
cd binary-to-decimal-converter
```

### 3. Run the Application

Open the `index.html` file directly in your browser or use the **Live Server** extension in Visual Studio Code.

No dependencies or server configuration are required.

## 🧮 Conversion Examples

| Binary (Base 2) | Decimal (Base 10) |
|:---:|:---:|
| `0` | `0` |
| `1` | `1` |
| `10` | `2` |
| `101` | `5` |
| `1011` | `11` |
| `11111111` | `255` |
| `100000000` | `256` |

### How Does It Work?

The conversion uses powers of 2 corresponding to each position in the binary number.

For example, the binary number `1011` is converted as follows:

```text
1011₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)

1011₂ = 8 + 0 + 2 + 1

1011₂ = 11₁₀
```

In the JavaScript implementation, the `parseInt(binary, 2)` function interprets the input as a base-2 number and returns its decimal value.

## 🎯 Learning Objectives

This project helps develop knowledge of:

- JavaScript fundamentals.
- DOM manipulation.
- Regular expressions and data validation.
- Events and functions.
- Number systems.
- HTML page structure.
- CSS styling and interface design.
- Project organization and documentation.

## 🔮 Future Improvements

Future versions may include:

- Decimal-to-binary conversion.
- Conversion between binary, decimal, octal, and hexadecimal.
- A button to copy results.
- Conversion history.
- Light and dark themes.
- Accessibility improvements.
- Automated tests.

## 📸 Screenshots

Add a screenshot of the application in action to showcase its interface.

Example:

![Binary-to-Decimal Converter](/Assets/converter.png)

## 👨‍💻 Author

**Lucas Neves**

This project was developed for educational purposes and to be included in my software development portfolio.

## 📄 License

This project can be distributed under the MIT License. To do so, add a `LICENSE` file to the repository containing the full text of the license.

---

⭐ If you found this project useful, consider giving the repository a star!
