let dayLinksContainer = document.getElementById('day_links');
let total_number_of_days = 1;

for (let i = 0; i < total_number_of_days; i++){
    let j = i + 1;
    let dayLink = document.createElement('a');
    dayLink.href = `${j}.html`;
    dayLink.textContent = 'Day ${i}';

};
