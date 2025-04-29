let dayLinksContainer = document.getElementById('day_links');
let total_number_of_days = 17;

for (let i = 0; i < total_number_of_days; i++){
    let j = i + 1;
    let dayLink = document.createElement('a');
    dayLink.href = `day0${j}.html`;
    dayLink.textContent = `Day ${j}`;
    dayLink.style.display = 'block';
    dayLinksContainer.appendChild(dayLink)
};
