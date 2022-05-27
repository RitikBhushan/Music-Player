const music =document.querySelector('audio');
const play = document.getElementById('play');
const img =document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let isplay=false;
const songs=[
    {
        nane: "song-1",
        title:"Baby ",
        artist:"Justin Bieber ",
        image: "img-1"
    },
    {
        nane: "song-2",
        title:"Faded",
        artist:"Alan Walke",
        image: "img-2"
    },
    {
        nane: "song-3",
        title:"Attention",
        artist:"Charlie Puth",
        image: "img-3"
    },
    {
        nane: "song-4",
        title:"We Don't Talk Anymore",
        artist:"Charlie Puth",
        image: "img-4"
    },
    {
        nane: "song-5",
        title:"Closer",
        artist:"The Chainsmokers",
        image: "img-5"
    },
    {
        nane: "song-6",
        title:"Perfect",
        artist:"Ed Sheeran",
        image: "img-6"
    },
    {
        nane: "song-7",
        title:"Shape of You",
        artist:"Ed Sheeran",
        image: "img-7"
    },
    {
        nane: "song-8",
        title:"Let Me Down Slowly",
        artist:"Alec Benjamin",
        image: "img-8"
    },


]
const playMusic= () =>{
    isplay=true;
    music.play(); 
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
}
const pauseMusic= () =>{
    isplay=false;
    music.pause(); 
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}
play.addEventListener('click',() =>{

    if(isplay){
        pauseMusic();
        
    }
    else{
        playMusic();
        
    }

})
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="Audio/"+songs.nane+".mp3";
    img.src="Img/"+songs.image+".jpg"
};
let songIndex=0;

const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong=()=>{
    songIndex=(songIndex-1 +songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);



