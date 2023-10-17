function validateForm() {
            // Add your validation logic here
            // You can check the values of input fields and show validation messages

            // For now, we'll just display a popup with the entered values
            const form = document.getElementById("surveyForm");
            const formData = new FormData(form);
            let popupContent = "Survey Form Submitted:\n\n";

            for (const [key, value] of formData.entries()) {
                popupContent += `${key}: ${value}\n`;
            }

            alert(popupContent);
            form.reset(); // Reset the form

            return false; // Prevent actual form submission

        }