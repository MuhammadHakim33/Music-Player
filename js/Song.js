export class Song 
{
    constructor(title, artist, thumbnail, mp3)
    {
        this.title = title
        this.artist = artist
        this.thumbnail = thumbnail
        this.mp3 = mp3

        this.playPauseBtn = document.querySelector('.play-pause-btn')
        this.audio = document.querySelector('.song-mp3')
        this.currentTimeNote = 0
    }

    play()
    {
        this.audio.setAttribute('src', this.mp3);
        this.audio.currentTime = this.currentTimeNote;
        this.audio.play();
        this.playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    }

    pause()
    {
        this.audio.pause();
        this.playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
    }
    
    // Update Current Time Audio
    updateTime()
    {
        this.audio.addEventListener('timeupdate', () => {
            this.currentTimeNote = Math.round(this.audio.currentTime);
        })
    }
}
