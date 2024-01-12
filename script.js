let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration; // Corrected property name
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


// if(song.play()){
//     setInterval(()=>{
//         progress.value=song.currentTime;

//     },500);
// }


song.addEventListener('timeupdate', function(){
    progress.value = song.currentTime;
});






progress.oninput = function(){ // Changed onchange to oninput
    song.currentTime = progress.value;
    if(song.paused){
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
};


// progress.onchange=function(){
//     song.play();
//     song.currentTime=progress.value;
//     ctrlIcon.classList.remove("fa-pause");
//     ctrlIcon.classList.add("fa-play");
// }