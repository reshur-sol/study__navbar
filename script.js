const ToggleBtn = document.querySelector('.navbar__toggleBtn');
const Menu = document.querySelector('.navbar__menu');
const Icons = document.querySelector('.navbar__social-icons');

ToggleBtn.addEventListener('click', () => {
	Menu.classList.toggle('active');
	Icons.classList.toggle('active');
});
