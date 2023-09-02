document.addEventListener("keydown", function (e) {
    const keyPress = document.querySelector(`.main-keys[data-key="${e.key}"]`);
    const audioSource = document.querySelector(`audio[data-key="${e.key}"]`);

    if (!audioSource) return;
    audioSource.currentTime = 0;
    audioSource.play();

    keyPress.classList.add("pressed");

});

document.addEventListener("keyup", function (e) {
    const keyPress = document.querySelector(`.main-keys[data-key="${e.key}"]`);
    if (!keyPress) return;
    keyPress.classList.remove("pressed");
});


// ------------============for MOUSE Click============------------
// const keys = document.querySelectorAll('.main-keys');
// keys.forEach(key => {
//     key.addEventListener('click', function () {
//         const keyPress = this;
//         const audioSource = document.querySelector(`audio[data-key="${keyPress.getAttribute('data-key')}"]`);

//         if (!audioSource) return;
//         audioSource.currentTime = 0;
//         audioSource.play();

//         keyPress.classList.add("pressed");
//     });

// });