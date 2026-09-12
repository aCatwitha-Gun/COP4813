const letterSprite = document.getElementById('letter-sprite');
const paperForm = document.getElementById('paper-form');

// Listen for click to start sprite animation
letterSprite.addEventListener('click', function() {
    
    // Prevent re-triggering animation if already clicked
    if (!this.classList.contains('is-opening')) {
        this.classList.add('is-opening');
        // Remove pointer cursor so it doesn't appear clickable anymore
        this.style.cursor = 'default';
    }
});

// Listen for animation to finish
letterSprite.addEventListener('animationend', function() {
    // Fade form in over frozen final frame of animation
    if (this.classList.contains('is-opening')) {
        paperForm.classList.add('is-visible');
    }
});