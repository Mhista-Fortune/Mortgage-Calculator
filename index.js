document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submit-btn");
    const clearButton = document.querySelector(".wrapper a");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const principal = parseFloat(document.querySelector("#mortgage-amount").value);
        const annualRate = parseFloat(document.querySelector("#interest-rate").value);
        const years = parseFloat(document.querySelector("#mortgage-term").value);
        const mortgageType = document.querySelector("input[name='choice']:checked");

        let isValid = true; // Flag to track if all inputs are valid

        // Validate Mortgage Amount
        const principalInput = document.querySelector("#mortgage-amount");
        const principalIcon = principalInput.closest(".input-icon").querySelector(".icon-bg"); // Get the icon
        const principalError = principalInput.closest(".form-group").querySelector(".error-message");
        if (isNaN(principal) || principal <= 0) {
            isValid = false;
            if (!principalError) {
                const error = document.createElement("p");
                error.className = "error-message";
                error.textContent = "Please enter a valid mortgage amount.";
                principalInput.closest(".form-group").appendChild(error);
            }
            principalInput.classList.add("error-border");
            principalIcon.classList.add("error-bg"); // Add error class to the icon background
        } else {
            if (principalError) principalError.remove();
            principalInput.classList.remove("error-border");
            principalIcon.classList.remove("error-bg"); // Remove error class from the icon background
        }

        // Validate Interest Rate
        const rateInput = document.querySelector("#interest-rate");
        const rateIcon = rateInput.closest(".input-icon").querySelector(".icon-bg"); // Get the icon
        const rateError = rateInput.closest(".form-group").querySelector(".error-message");
        if (isNaN(annualRate) || annualRate <= 0) {
            isValid = false;
            if (!rateError) {
                const error = document.createElement("p");
                error.className = "error-message";
                error.textContent = "Please enter a valid interest rate.";
                rateInput.closest(".form-group").appendChild(error);
            }
            rateInput.classList.add("error-border");
            rateIcon.classList.add("error-bg"); // Add error class to the icon background
        } else {
            if (rateError) rateError.remove();
            rateInput.classList.remove("error-border");
            rateIcon.classList.remove("error-bg"); // Remove error class from the icon background
        }

        // Validate Mortgage Term
        const termInput = document.querySelector("#mortgage-term");
        const termIcon = termInput.closest(".input-icon").querySelector(".icon-bg"); // Get the icon
        const termError = termInput.closest(".form-group").querySelector(".error-message");
        if (isNaN(years) || years <= 0) {
            isValid = false;
            if (!termError) {
                const error = document.createElement("p");
                error.className = "error-message";
                error.textContent = "Please enter a valid mortgage term.";
                termInput.closest(".form-group").appendChild(error);
            }
            termInput.classList.add("error-border");
            termIcon.classList.add("error-bg"); // Add error class to the icon background
        } else {
            if (termError) termError.remove();
            termInput.classList.remove("error-border");
            termIcon.classList.remove("error-bg"); // Remove error class from the icon background
        }

        // Validate Mortgage Type
        const radioGroup = document.querySelector(".radio-group");
        const radioButtons = document.querySelectorAll("input[name='choice']");
        const radioError = radioGroup.querySelector(".error-message");
        if (!mortgageType) {
            isValid = false;

            // Add error message if not already present
            if (!radioError) {
                const error = document.createElement("p");
                error.className = "error-message";
                error.textContent = "Please select a mortgage type.";
                radioGroup.appendChild(error);
            }
            radioButtons.forEach(radio => radio.classList.add("error-border")); // Add red border to each radio button
            // Add red border to each radio button
        } else {
            if (radioError) radioError.remove();
            radioButtons.forEach(radio => radio.classList.remove("error-border")); // Remove red border from each radio button
        }

        // If all inputs are valid, perform the calculation
        if (isValid) {
            let monthlyPayment;
            if (mortgageType.value === "option1") {
                // Repayment Mortgage
                monthlyPayment = calculateRepaymentMortgage(principal, annualRate, years);
            } else if (mortgageType.value === "option2") {
                // Interest Only Mortgage
                monthlyPayment = calculateInterestOnlyMortgage(principal, annualRate);
            }

            const totalRepayment = mortgageType.value === "option1" ? monthlyPayment * years * 12 : principal;

            // Output results to the completed result section
            document.querySelector("#monthly-repayment").textContent = `£${monthlyPayment.toFixed(2)}`;
            document.querySelector("#total-repayment").textContent = `£${totalRepayment.toFixed(2)}`;

            // Show the completed result section
            document.querySelector(".completed-result").style.display = "block";

            // Hide the empty result section
            document.querySelector(".empty-result").style.display = "none";
        }
    });

    // Clear button functionality
    clearButton.addEventListener("click", function (event) {
        event.preventDefault();
        form.reset();

        // Remove error styles and messages
        document.querySelectorAll(".error-message").forEach(error => error.remove());
        document.querySelectorAll(".error-border").forEach(input => input.classList.remove("error-border"));
        document.querySelectorAll(".error-bg").forEach(icon => icon.classList.remove("error-bg")); // Remove error class from icons

        // Reset icon backgrounds to their original color
        document.querySelectorAll(".icon-bg").forEach(icon => {
            icon.style.backgroundColor = ""; // Reset background color
            icon.style.color = ""; // Reset text/icon color
        });

        // Clear result values
        document.getElementById('monthly-repayment').innerText = '--';
        document.getElementById('total-repayment').innerText = '--';

        // Hide the result section
        const resultSection = document.querySelector('.completed-result');
            if (resultSection) {
                resultSection.style.display = 'none';
            }
        // Optional: Show empty result section (if you have one)
        const emptyResult = document.querySelector('.empty-result');
            if (emptyResult) {
                emptyResult.style.display = 'block';
            }
    });
});

// Function to calculate the monthly repayment for a repayment mortgage
function calculateRepaymentMortgage(principal, annualRate, years) {
    const monthlyRate = annualRate / 100 / 12; // Convert annual rate to monthly rate
    const totalPayments = years * 12; // Total number of monthly payments

    // Mortgage formula
    const monthlyPayment = principal *
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return monthlyPayment;
}

// Function to calculate the monthly repayment for an interest-only mortgage
function calculateInterestOnlyMortgage(principal, annualRate) {
    const monthlyRate = annualRate / 100 / 12; // Convert annual rate to monthly rate
    return principal * monthlyRate; // Only interest is paid monthly
}