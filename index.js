const giftButton = document.querySelector('#gift');
const greeting = document.querySelector('#greeting');

giftButton.addEventListener('click', () => {
	giftButton.disabled = true;
	giftButton.classList.add('open');
	document.body.classList.add('celebrating');

	const revealDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 260;

	window.setTimeout(() => {
		greeting.classList.add('visible');
		greeting.setAttribute('aria-hidden', 'false');
	}, revealDelay);
}, { once: true });
