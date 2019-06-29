let player1 = document.getElementById("monPlayer");

let videos = [
    "video1",
    "video2",
    "video3",
    "video4",
    "video5",
    "video6",
];

function setMp4Source01() {
    var currentVideoIndex = Math.floor(Math.random() * videos.length);
    var currentVideo = "../video/" + videos[currentVideoIndex] + ".mp4";
    player1.src = currentVideo;
    player1.load();
    player1.play();
}
player1.addEventListener('ended', nextVideo, false);

function nextVideo() {
    setMp4Source01();
}