document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form-v1');
    const formMessage = document.getElementById('form-message-v1');
    const submitButton = document.getElementById('submit-button'); // Get the button

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default form submission

            // Disable button and show loading state (optional)
            submitButton.disabled = true;
            submitButton.textContent = 'ENVIANDO...';
            formMessage.textContent = ''; // Clear previous messages
            formMessage.className = 'form-message'; // Reset class

            // Get form data
            const formData = {
                name: document.getElementById('name-v1').value.trim(),
                email: document.getElementById('email-v1').value.trim(),
                company: document.getElementById('company-v1').value.trim(),
                message: document.getElementById('message-v1').value.trim()
            };

            // Basic Frontend Validation (optional, server validation is key)
            if (!formData.name || !formData.email) {
                formMessage.textContent = 'Por favor, completa Nombre y Correo Electrónico.';
                formMessage.classList.add('error');
                submitButton.disabled = false; // Re-enable button
                submitButton.textContent = 'CONTACTAR AHORA';
                return; // Stop submission
            }
             if (!formData.email.includes('@')) {
                formMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
                formMessage.classList.add('error');
                submitButton.disabled = false; // Re-enable button
                submitButton.textContent = 'CONTACTAR AHORA';
                return; // Stop submission
            }


            try {
                // Send data to the backend API endpoint
                const response = await fetch('/api/contact', { // Relative URL works on Vercel
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                // Get response data (message from backend)
                const result = await response.json();

                if (response.ok) { // Status 200-299
                    formMessage.textContent = result.message || '¡Enviado con éxito!'; // Use backend message
                    formMessage.classList.add('success');
                    form.reset(); // Clear the form
                } else {
                    // Show error message from backend or a generic one
                    formMessage.textContent = result.message || `Error: ${response.statusText}`;
                    formMessage.classList.add('error');
                }

            } catch (error) {
                // Handle network errors or other issues
                console.error('Error submitting form:', error);
                formMessage.textContent = 'Hubo un problema al enviar el formulario. Inténtalo de nuevo.';
                formMessage.classList.add('error');
            } finally {
                 // Re-enable button regardless of success or error
                 submitButton.disabled = false;
                 submitButton.textContent = 'CONTACTAR AHORA';
            }
        });
    }

    // Smooth scrolling (sin cambios)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                 e.preventDefault();
                 document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                 });
            }
        });
    });
});
