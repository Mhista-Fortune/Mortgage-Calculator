# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

---

## Table of Contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Features](#features)
- [Screenshot](#screenshot)
- [Links](#links)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

A simple and interactive web application that calculates monthly mortgage repayments based on user inputs such as loan amount, interest rate, and loan term. The application supports both **Repayment** and **Interest-Only** mortgage types and provides dynamic error handling with visual feedback.

---

### The Challenge

While working on this project, I encountered the following challenges:
1. **Dynamic Error Handling:**
    Implementing real-time error feedback for invalid inputs and ensuring icons and fields visually reflected errors.
2. **Radio Button Validation:**
    Providing visual feedback for unselected mortgage types while maintaining a clean design.
3. **Responsive Design:**
    Ensuring the layout worked seamlessly across different screen sizes, especially for mobile devices.
4. **Clear Button Functionality:**
    Resetting all inputs, error messages, and results without breaking the user experience.
5. **Mortgage Calculation Logic:**
    Debugging edge cases and ensuring accurate results for both Repayment and Interest-Only mortgage types.

---

## Features

- **Dynamic Mortgage Calculations**:
  - Supports both **Repayment** and **Interest-Only** mortgage types.
  - Calculates monthly repayments and total repayment over the loan term.
- **Error Handling**:
  - Highlights invalid inputs with red borders and displays error messages.
  - Icons turn red with a white foreground for invalid fields.
  - Radio buttons are outlined in red if no option is selected.
- **Responsive Design**:
  - Fully responsive and works seamlessly on desktop, tablet, and mobile devices.
- **Clear Functionality**:
  - Resets all inputs, error messages, and results with a single click.

---

### Screenshots

![Screenshot of completed desktop form(Interest)](screenshots/screenshot-completed-interest-desktop.png)
![Screenshot of completed mobile form(Interest)](screenshots/screenshot-completed-interest-mobile.png)
![Screenshot of completed desktop form(Repayment)](screenshots/screenshot-completed-repayment-desktop.png)
![Screenshot of completed mobile form(Repayment)](screenshots/screenshot-completed-repayment-mobile.png)
![Screenshot of empty desktop form](screenshots/screenshot-empty-desktop.png)
![Screenshot of empty mobile form](screenshots/screenshot-empty-mobile.png)
![Screenshot of error in desktop](screenshots/screenshot-error-desktop.png)
![Screenshot of error in Mobile](screenshots/screenshot-error-mobile.png)

---

### Links

- Solution URL: [Add solution URL here](https://github.com/Mhista-Fortune/Mortgage-Calculator)
- Live Site URL: [Add live site URL here](https://mortgage-calculator-web-app.netlify.app/)

---

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the application, including responsive design and error feedback.
- **JavaScript**: For dynamic calculations, error handling, and DOM manipulation.

---

## Installation

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mhista-Fortune/Mortgage-Calculator.git

2. **Navigate to the Project Directory**:
cd mortgage-repayment-calculator

3. **Open the Application:**
Open the index.html file in your browser.

---

## Usage

- Enter Input Values:
- Enter the Mortgage Amount (e.g., £200,000).
- Enter the Interest Rate (e.g., 5%).
- Enter the Mortgage Term in years (e.g., 25 years).
**Select Mortgage Type:**
- Choose between Repayment or Interest Only.
**Calculate Repayments:**
- Click the Calculate Repayments button to view the  results.
- The monthly repayment and total repayment will be displayed in the results section.
**Clear All:**
- Click the Clear All button to reset the form and results.

---

## Project Structure

Mortgage Repayment Calculator Project/
│
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── index.js            # JavaScript file for functionality
├── assets/             # Folder for images and icons
│   ├── images/
│   └── icons/
└── [README.md](http://_vscodecontentref_/0)           # Project documentation

---

## Contributing

Contributions are welcome! If you’d like to contribute to this project, please follow these steps:

1. **Fork the Repository:**
    Click the "Fork" button at the top of this repository.

2. **Clone Your Fork:**
    git clone https://github.com/Mhista-Fortune/Mortgage-Calculator.git

3. **Create a New Branch:**
    git checkout -b feature-name

4. **Make Changes:**
    git add .
    git commit -m "Add your message here"

5. **Push Changes:**
    git push origin feature-name

6. **Submit a Pull Request:**
    Open a pull request to the main repository.

---

## Author

- Website - [Add your name here](https://mortgage-calculator-web-app.netlify.app/)
- Frontend Mentor - [Mhista Fortune](https://www.frontendmentor.io/profile/Mhista-Fortune)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

---

## License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project as long as proper credit is given. See the LICENSE file for more details.

---

## Acknowledgments

Frontend Mentor: For providing the project idea and inspiration.
Icons: Icons used in the project are from Font Awesome.
You: For taking the time to explore and use this project!