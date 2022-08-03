import { songs } from './listsongs.js';
import { Song } from './Song.js';

// Display List Songs
document.addEventListener('DOMContentLoaded', () => {
    songs.forEach((song) => {

        const row = document.createElement('tr');
        row.id = "liveToastBtn";
        row.setAttribute("role", "button");

        row.innerHTML = `
            <td><img src="${song.thumbnail}" class="img-thumbnail border-0 rounded-0 p-0" width="60"></td>
            <td><h6>${song.title}</h6></td>
            <td><h6>${song.artist}</h6></td>
        `;

        document.querySelector('.song-list').appendChild(row);
    })
})

