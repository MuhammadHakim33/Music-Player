export class Song 
{
    constructor(title, artist, thumbnail, mp3)
    {
        this.title = title
        this.artist = artist
        this.thumbnail = thumbnail
        this.mp3 = mp3

        this.audio = document.createElement('audio')
        this.playPauseBtn = document.querySelector('.play-pause-btn')
        this.durationBarElement = document.querySelector('.song-duration-bar')
        this.currentTimeNote = 0
    }

    play()
    {
        this.audio.setAttribute('src', this.mp3);
        this.audio.currentTime = this.currentTimeNote;
        this.audio.play();
        this.playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';

        this.updateTime();
    }

    pause()
    {
        this.audio.pause();
        this.playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
    }
    
    // Update Current Time Audio
    updateTime()
    {
        // Set Duration
        this.audio.addEventListener('timeupdate', () => {
            this.currentTimeNote = Math.round(this.audio.currentTime);
            this.duration();
            this.durationBar();
        })

        // Mengisi value pada attribute max pada input range
        this.audio.addEventListener('loadeddata', () => {
            this.durationBarElement.setAttribute('max', this.audio.duration)
        })
    }

    // Mengatur Second & Minute Current Time Audio
    duration()
    {
        let min = Math.floor(this.currentTimeNote / 60);
        let sec = this.currentTimeNote % 60;

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        document.querySelector('.song-duration').textContent = `${min}:${sec}`;
    }

    // Mengatur bar durasi
    durationBar()
    {
        this.durationBarElement.value = this.audio.currentTime;
    }

    // Mengatur current time dengan bar durasi
    changeDuration()
    {
        this.audio.currentTime = this.durationBarElement.value;
    }
}
