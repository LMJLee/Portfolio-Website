function CopyEmail(TextToCopy) {
    var Temp = document.createElement("input");
    var messageSuccess = 'copied to clipboard!';
    Temp.value = TextToCopy;
    document.body.appendChild(Temp);
    Temp.select();

    document.execCommand("copy");
    document.body.removeChild(Temp);

    var hoverTextElement = document.querySelector('.hovertext');
    hoverTextElement.textContent = messageSuccess;

    // Reset hover text after a short delay (e.g., 2 seconds)
    setTimeout(function() {
        hoverTextElement.textContent = 'my email address!';
    }, 2000);
}


//  SCROLL NAVBAR


const targetSection = document.getElementById('portfolio');
const navLinks = document.querySelectorAll('.nav-links ul li a');

window.addEventListener('scroll', () => {

    // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    // Calculate the relative position from next section
    const sectionRect = targetSection.getBoundingClientRect();

    const threshold = 100;

    if (sectionRect.top > threshold) {
        navLinks.forEach((link) => {
            link.style.color = "#2F2E2A";
        });
    }
    else {
        navLinks.forEach((link) => {
            link.style.color = "#e3e3e3";
        });
    }
});