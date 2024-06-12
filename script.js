const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(contactForm);

    // Send form data using Fetch API
    try {
        const response = await fetch('https://formspree.io/f/xayrrjpe', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset(); // Reset the form after successful submission
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    }
});