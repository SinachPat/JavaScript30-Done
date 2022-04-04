window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.add('playing');
    // console.log(audio);
    // console.log(key);
    if(!audio) return; //This would stop the function from running altogether
    audio.currentTime = 0;
    audio.play();
  });

  window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
  })