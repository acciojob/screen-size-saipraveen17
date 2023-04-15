//your JS code here. If required.
const sizeInfo = document.getElementById('sizeInfo');
const h1 = sizeInfo.querySelector('h1');

// Get initial window size
h1.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;

// Update size on window resize
window.addEventListener('resize', () => {
	h1.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});