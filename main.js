document.addEventListener("keydown", function(e) {
    const audioSource = document.querySelector(`audio[data-key="${e.key}"]`);
    if(!audioSource) return;
    console.log(e);
    audioSource.currentTime = 0;
    audioSource.play();
});