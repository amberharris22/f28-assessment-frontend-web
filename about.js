console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('#contact');
let img = document.querySelector('#rubber-duck')

form.addEventListener('submit', handleSubmit);

const imgComp = (event) => {
	event.preventDefault()
	alert('We Can Do It!')
}
img.addEventListener('mouseover', imgComp)