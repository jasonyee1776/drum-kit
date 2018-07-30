function playSound(e) {
    console.log(e.keyCode);
    // Look for element on page with 'data-key' attribute
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; // stops the function from running if no audio
    if (!key) return; 
    audio.currentTime = 0; // rewinds audio to beginning
    audio.play(); // play audio 
    key.classList.add('playing');// Add CSS transition class when keyCode is used

}

// function to remove CSS transition-class
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this);
}

// remove class from element when transition ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)