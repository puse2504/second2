// Simple interactivity
const btn = document.getElementById('clickBtn');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount++;
    btn.textContent = `Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
});

console.log('🎉 Website loaded successfully!');
