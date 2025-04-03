document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form-v1');
    const formMessage = document.getElementById('form-message-v1');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Basic Validation (Example)
            const nameInput = document.getElementById('name-v1');
            const emailInput = document.getElementById('email-v1');
            let isValid = true;
            formMessage.textContent = ''; // Clear previous messages
            formMessage.className = 'form-message'; // Reset class

            if (!nameInput.value.trim()) {
                isValid = false;
                // You could add specific field error messages here
            }
            if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                 isValid = false;
                 // You could add specific field error messages here
            }

            if (isValid) {
                // Simulate form submission success
                console.log('Form data:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    company: document.getElementById('company-v1').value,
                    message: document.getElementById('message-v1').value
                });

                formMessage.textContent = '¡Gracias por contactarnos! Nos pondremos en contacto pronto.';
                formMessage.classList.add('success');
                form.reset(); // Clear the form

                // --- IMPORTANT ---
                // In a real application, you would send the data to a server here using:
                // fetch('/your-backend-endpoint', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formDataObject)
                // })
                // .then(response => response.json())
                // .then(data => { /* Handle success */ })
                // .catch(error => { /* Handle error */ });
                // --- /IMPORTANT ---

            } else {
                formMessage.textContent = 'Por favor, completa los campos requeridos correctamente.';
                formMessage.classList.add('error');
            }
        });
    }

    // Optional: Smooth scrolling for internal links (if any added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only process if it's a valid internal link (not just "#")
            if (href.length > 1 && document.querySelector(href)) {
                 e.preventDefault();
                 document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                 });
            }
        });
    });

});
