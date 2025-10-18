// Service worker registration for PWA
if('serviceWorker' in navigator){
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then(() => {
			console.log('Service Worker registrado');
		}).catch(err => console.warn('SW registration failed:', err));
	});
}

// Placeholder for future features
