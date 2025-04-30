const room_elements = ['nook', 'bedroom', 'closet', 'den', 'entrance_hall', 'lavatory', 'pantry',
    'parlor', 'spare_room', 'boiler_room', 'security_room', 'boudoir', 'chapel', 'corridor',
    'west_wing_hall', 'dining_room', 'kitchen', 'bunk_room', 'grounds', 'private_drive'
].sort();

window.addEventListener('load', function() {
    const room_linksContainer = document.getElementById('rooms');
    room_elements.forEach(room_element => {
        room_linksContainer.appendChild(this.document.createElement('p'));
        const room_link = document.createElement('a');
        room_link.href = `${room_element}.html`;
        room_link.textContent = `${room_element.charAt(0).toUpperCase() + room_element.slice(1)}`;
        room_link.style.display = 'block'; // Display each link on a new line
        room_linksContainer.appendChild(room_link);
        
    });
}
);

/*
Make a list of links to rooms
*/