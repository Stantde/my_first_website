const elements = ['index', 'people', 'days'];

window.onload = function() {
    const linksContainer = document.getElementById('links');
    elements.forEach(element => {
        const link = document.createElement('a');
        link.href = `${element}.html`;
        link.textContent = `Go to ${element.charAt(0).toUpperCase() + element.slice(1)}`;
        link.style.display = 'block'; // Display each link on a new line
        linksContainer.appendChild(link);
    });
};
