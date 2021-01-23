const songs = document.querySelectorAll('.list');
const thumb = document.querySelector('.thumb-player');
const judul = document.querySelector('.judul');
const artis = document.querySelector('.artis');
const sound = document.querySelector('.sound');
const btnPlayPause = document.querySelector('.btn-play-pause');
const btnClose = document.querySelector('.close-btn');
const range = document.querySelector('.range');
const time = document.querySelector('.time');
let count = 0;

// Kumpulan Fungsi
// Play / Pause Lagu
function playPause() {
  if(count == 0) {
    sound.play();
    count = 1;
    btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
    thumb.style.animation = 'thumbPlay 15s linear infinite';
  } else {
    sound.pause();
    count = 0;
    btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
    thumb.style.animation = "thumbPlay 15s linear infinite paused";
  }
}

// Keluar Lagu
function close() {
  sound.pause();
  count = 0;
  sound.currentTime = 0;
  btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
  thumb.style.animation = "";
}

// Tanda Lagu Udah Sampe Mana
function timeupdate() {
  range.value = sound.currentTime;
  range.setAttribute('max', parseInt(sound.duration));
  convertTime(Math.round(sound.currentTime));
}

// Cepetin Lagu
function change() {
  sound.currentTime = range.value;
}

// Waktu Berjalan
function convertTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  time.textContent = min + ":" + sec;
}


// Kumpulan Lagu
function laguSatu() {
  thumb.setAttribute("src", "img/feelsomething.jpg");
  judul.innerHTML = "Feel Something";
  artis.innerHTML = "Galantis ft. flyckt";
  sound.setAttribute("src", "song/FeelSomething.mp3");

  btnPlayPause.addEventListener('click', playPause);
  btnClose.addEventListener('click', close);
  sound.addEventListener('ended', close);
  sound.addEventListener('timeupdate', timeupdate);
  range.addEventListener('change', change);
}

function laguDua() {
  thumb.setAttribute("src", "img/TheseHeights.jpg");
  judul.innerHTML = "These Heights";
  artis.innerHTML = "Lucas & Steve, Bassjackers Feat.Caroline Pennell";
  sound.setAttribute("src", "song/TheseHeights.mp3");

  btnPlayPause.addEventListener('click', playPause);
  btnClose.addEventListener('click', close);
  sound.addEventListener('ended', close);
  sound.addEventListener('timeupdate', timeupdate);
  range.addEventListener('change', change);
}

function laguTiga() {
  thumb.setAttribute("src", "img/heykids.jpg");
  judul.innerHTML = "Hey Kids";
  artis.innerHTML = "THE ORAL CIGARETTES";
  sound.setAttribute("src", "song/heykids.mp3");

  btnPlayPause.addEventListener('click', playPause);
  btnClose.addEventListener('click', close);
  sound.addEventListener('ended', close);
  sound.addEventListener('timeupdate', timeupdate);
  range.addEventListener('change', change);
}

function laguEmpat() {
  thumb.setAttribute("src", "img/vacation.jpg");
  judul.innerHTML = "vacation";
  artis.innerHTML = "GFRIEND";
  sound.setAttribute("src", "song/vacation.mp3");

  btnPlayPause.addEventListener('click', playPause);
  btnClose.addEventListener('click', close);
  sound.addEventListener('ended', close);
  sound.addEventListener('timeupdate', timeupdate);
  range.addEventListener('change', change);
}


// Program Utama
songs.forEach(function(song) {
  song.addEventListener('click', function() {
    if(song.className == 'list song-1') {
      laguSatu();
    } else if(song.className == 'list song-2') {
      laguDua();
    } else if(song.className == 'list song-3') {
      laguTiga();
    } else if(song.className == 'list song-4') {
      laguEmpat();
    }
  });
});
