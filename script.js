const songs = [
    { name: "On My Way", src: "Songs/1.mp3", image: "Img/1.jpg" },
    { name: "Alan Walker-Fade", src: "Songs/2.mp3", image: "img/2.jpg" },
    { name: "Cartoon - On & On", src: "Songs/3.mp3", image: "img/3.jpg" },
    { name: "Warriyo - Mortals", src: "Songs/4.mp3", image: "img/4.jpg" },
    { name: "Ertugrul Gazi", src: "Songs/5.mp3", image: "img/5.jpg" },
    { name: "Electronic Music", src: "Songs/6.mp3", image: "img/6.jpg" },
    { name: "Agar Tum Sath Ho", src: "Songs/7.mp3", image: "img/7.jpg" },
    { name: "Suna Hai", src: "Songs/8.mp3", image: "img/8.jpg" },
    { name: "Dilber", src: "Songs/9.mp3", image: "img/9.jpg" },
    { name: "Duniya", src: "Songs/10.mp3", image: "img/10.jpg" },
    { name: "Lagdi Lahore Di", src: "Songs/11.mp3", image: "img/11.jpg" },
    { name: "Putt Jatt Da", src: "Songs/12.mp3", image: "img/12.jpg" },
    { name: "Baarishein", src: "Songs/13.mp3", image: "img/13.jpg" },
    { name: "Vaaste", src: "Songs/14.mp3", image: "img/14.jpg" },
    { name: "Lut Gaye", src: "Songs/15.mp3", image: "img/15.jpg" },
    { name: "Khairiyat", src: "Songs/16.mp3", image: "img/16.jpg" },
    { name: "Jug Jug Jeeve", src: "Songs/17.mp3", image: "img/17.jpg" },
    { name: "Aashiqui Aa Gayi", src: "Songs/18.mp3", image: "img/18.jpg" },
    { name: "Mehabooba", src: "Songs/19.mp3", image: "img/19.jpg" },
    { name: "Thoda Thoda Pyaar", src: "Songs/20.mp3", image: "img/20.jpg" },
    // Add more songs here
];

let currentSongIndex = 0;

const music = document.getElementById("music");
const songName = document.getElementById("song-name");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const songImage = document.querySelector(".song-image img");

function loadSong() {
    const currentSong = songs[currentSongIndex];
    music.src = currentSong.src;
    songName.textContent = currentSong.name;
    songImage.src = currentSong.image;
}

loadSong();

prevButton.addEventListener("click", () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong();
    music.play();
});

nextButton.addEventListener("click", () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong();
    music.play();
});
