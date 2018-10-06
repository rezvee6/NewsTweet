
console.log('hellow 1')
// Client side handling
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(form);

	const name = formData.get('name');
	const content = formData.get('content');

	const newsTweetData = {
		name,
		content
	};
	console.log(newsTweetData)
	form.style.display = 'none';
	loadingElement.style.display = '';

});