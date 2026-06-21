// Interactive Reveal logic for page5.html
document.addEventListener("DOMContentLoaded", function() {
    // Select all images with the class 'secret-pic'
    const pictures = document.querySelectorAll('.secret-pic');
    const messageBox = document.getElementById('secret-message-box');
    const messageText = document.getElementById('message-text');

    // Attach click events to each individual photo safely
    pictures.forEach(function(pic) {
        pic.addEventListener('click', function() {
            // Grab the message unique to the clicked picture
            const customMessage = pic.getAttribute('data-message');
            
            // Inject the text and make the container appear smoothly
            messageText.innerText = customMessage;
            messageBox.style.display = 'block';
        });
    });
});