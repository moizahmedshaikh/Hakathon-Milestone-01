"use strict";
const toggleSkillsButton = document.getElementById('toggle-skills-btn');
const skillsList = document.getElementById('skills-list');
toggleSkillsButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none' || !skillsList.style.display) {
        skillsList.style.display = 'block';
    }
    else {
        skillsList.style.display = 'none';
    }
});
