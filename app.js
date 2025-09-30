// Function to generate a random 6-character alphanumeric code
function generateRandomCode(length = 6) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to handle the form submission
function handleShorten(event) {
    // Stop the form from submitting traditionally (reloading the page)
    event.preventDefault(); 

    const longLinkInput = document.getElementById('long-link');
    const aliasInput = document.getElementById('alias');
    const resultBox = document.getElementById('result-box');

    // 1. Basic Validation
    if (!longLinkInput.value.trim()) {
        alert('Please enter a long link to shorten.');
        longLinkInput.focus();
        return; 
    }

    // 2. Determine the short code
    let shortCode;
    if (aliasInput.value.trim()) {
        // Use the user's custom alias and clean it up (replace spaces with hyphens)
        shortCode = aliasInput.value.trim().replace(/\s/g, '-'); 
    } else {
        // Generate a random code
        shortCode = generateRandomCode();
    }

    // 3. Construct the simulated shortened URL
    const simulatedShortUrl = `tinyurl.com/${shortCode}`;

    // 4. Update and display the result box
    resultBox.innerHTML = `Your shortened URL is: <a href="http://${simulatedShortUrl}" target="_blank">${simulatedShortUrl}</a>`;
    resultBox.style.display = 'block';

    // 5. Clear the inputs after success
    longLinkInput.value = '';
    aliasInput.value = '';
}

// Wait for the entire HTML document to load before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    // Find the form element by its ID
    const form = document.getElementById('shorten-form');

    // Attach the handleShorten function to the form's 'submit' event
    if (form) {
        form.addEventListener('submit', handleShorten);
    }
});