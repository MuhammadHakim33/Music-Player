import { songs } from './listsongs.js';
import { Song } from './Song.js';

let classSong;
let isPlaying = true;

// Display List Songs
document.addEventListener('DOMContentLoaded', () => {
    songs.forEach((song) => {

        const row = document.createElement('tr');
        row.className = 'song-item position-relative';
        row.setAttribute("role", "button");
        row.setAttribute("data-bs-toggle", "modal");
        row.setAttribute("data-bs-target", "#modal-music-player");

        row.innerHTML = `
            <td><img src="${song.thumbnail}" class="img-thumbnail border-0 rounded-0 p-0" width="60"></td>
            <td><h6>${song.title}</h6></td>
            <td><h6>${song.artist}</h6></td>
            <div class="item-overlay"></div>
        `;

        document.querySelector('.song-list').appendChild(row);
    })
})


// Event : Open Player
document.querySelector('.song-list')
        .addEventListener('click', (e) => {

            const result = songs.filter((item) => 
                item.title == e.target.previousElementSibling.previousElementSibling.textContent
            )[0];

            document.querySelector('.song-title').textContent = result.title;
            document.querySelector('.song-artist').textContent = result.artist;

            classSong = new Song(result.title, result.artist, result.thumbnail, result.mp3);

            classSong.play();
})


// Event : Pause - Play Audio
document.querySelector('.play-pause-btn')
        .addEventListener('click', () => {

            switch (isPlaying) {
                case true:
                    classSong.pause();
                    isPlaying = false;
                    break;
                case false:
                    classSong.play();
                    isPlaying = true;
                    break;
            }
})


// Event : Close Player
document.querySelector('.close-player-btn')
        .addEventListener('click', () => classSong.pause());

        
// Event : Change Duration
document.querySelector('.song-duration-bar')
        .addEventListener('change', () => classSong.changeDuration());
