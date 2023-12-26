 let song = document.getElementById("song");
 let progress = document.getElementById("progress");
 let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}

if(song.play()){
    setInterval(function(){
        progress.value = song.currentTime;
    },1000)
}

progress.onchange = function(){
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
}