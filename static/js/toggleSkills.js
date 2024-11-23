function toggleSkills(header) {
    const skillsList = header.nextElementSibling;
    const toggleIcon = header.querySelector('.toggle-icon');

    skillsList.classList.toggle('active');
    toggleIcon.style.transform = skillsList.classList.contains('active')
        ? 'rotate(180deg)' : 'rotate(0deg)';
}