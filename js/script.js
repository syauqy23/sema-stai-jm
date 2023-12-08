// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = (e) => {
	navbarNav.classList.toggle('active');
	e.preventDefault();

};

//Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
	searchForm.classList.toggle('active');
	searchBox.focus();
	e.preventDefault();
}

// click di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
	if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
	if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}
});

// send message to whatsapp
function sendToWhatsapp() {
	let number = "+628991615556";

	let name = document.getElementById('name').value;
	let jurusan = document.getElementById('jurusan').value;
	let pesan = document.getElementById('pesan').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Nama : " +name+ "%0a"
	+ "Jurusan : " +jurusan+ "%0a"
	+ "Pesan : " +pesan+ "%0a%0a";

	window.open(url, '_blank').focus();
}

function Refresh() {
	location.reload();
}