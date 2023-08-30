const pianoKeys = document.querySelectorAll('.key');
// we have taken the adress of all elements associated with class '.key' then store it as array in pianoKeys
const volume_slider = document.querySelector('.volume-slider');
const speaker_status = document.querySelector('.album-play');

// to control the piano keys
let volume_value = 0.5;
function playSound(newUrl) {
    console.log(newUrl);
    music = new Audio(newUrl);
    music.volume = volume_value;
    music.play();
}

pianoKeys.forEach((pianoKey, i) => {
    const newUrl = 'assests/sounds-piano/' + (i + 1) + '.mp3';
    pianoKey.addEventListener('click', () => playSound(newUrl));
})


const handleVolume = (e) => {
    let num2 = e.target.value;
    console.log(num2);
    volume_value = num2 / 100;
    album_music.volume = volume_value;

    console.log(volume_value);
    var slider_color = 'linear-gradient(90deg ,rgba(119, 76, 185,1)' + num2 + '% ,rgba(54, 54, 54,1)' + num2 + '% )';
    volume_slider.style.background = slider_color;

}
volume_slider.addEventListener("input", handleVolume);

// to control the album-song
album_music = new Audio("assests/album/dynamite-bts.mp3");
let speaker_logic = 0;
function speaker() {
    speaker_logic = speaker_logic + 1;
    let speakerReminder = speaker_logic % 2;

    console.log(speakerReminder);
    if (speakerReminder == 1) {
        speaker_status.src = "icons/speaker-pause.svg";
        album_music.play();
        console.log("music is palying!");
    }
    else {
        speaker_status.src = "icons/speaker-play.svg";
        album_music.pause();
        console.log("music is paused!");
    }

}
speaker_status.addEventListener('click', () => speaker());


