const weddingYear = 2024
const weddingMonth = 7
const weddingDay = 7
const weddingHour = 16

const daysLabel = document.getElementById('daysLabel')
const hoursLabel = document.getElementById('hoursLabel')
const minutesLabel = document.getElementById('minutesLabel')
const secondsLabel = document.getElementById('secondsLabel')
const weddingDate = new Date(weddingYear, weddingMonth - 1, weddingDay, weddingHour);
const currentTime = new Date().getTime();
const weddingTime = weddingDate.getTime();
const timeDiff = weddingTime - currentTime;
const timeInSeconds = Math.floor(timeDiff / 1000);

const announceLeaf = document.getElementById("announceLeaf")

const planLeaf = document.getElementById("planLeaf")
const planLeafTrigger = document.getElementById("planLeafTrigger")
const heart = document.getElementById("heart")

const placeLeaf = document.getElementById("placeLeaf")
const placeLeafTrigger = document.getElementById("placeLeafTrigger")

const dressLeaf = document.getElementById("dressLeaf")
const dressLeafTrigger = document.getElementById("dressLeafTrigger")

const detailssLeaf = document.getElementById("detailsLeaf")
const detailssLeafTrigger = document.getElementById("detailsLeafTrigger")

window.scroll(0, 150)

setTimeout(() => {
    document.getElementById('flash').remove()
}, 2500);

window.addEventListener("scroll", function () {
    if (window.scrollY > (minutesLabel.offsetTop + minutesLabel.offsetHeight)) {
        announceLeaf.style = 'animation: leafIn 2s forwards;'
    }
    if (window.scrollY > (planLeafTrigger.offsetTop + planLeafTrigger.offsetHeight)) {
        planLeaf.style = 'animation: leafStoryIn 2s forwards;'
        heart.style = 'animation: heartIn 2s forwards linear;'
    }
    if (window.scrollY > (placeLeafTrigger.offsetTop + placeLeafTrigger.offsetHeight)) {
        placeLeaf.style = 'animation: leafIn 2s forwards;'
    }
    if (window.scrollY > (dressLeafTrigger.offsetTop + dressLeafTrigger.offsetHeight)) {
        dressLeaf.style = 'animation: leafStoryIn 2s forwards;'
    }
    if (window.scrollY > (detailsLeafTrigger.offsetTop + detailsLeafTrigger.offsetHeight)) {
        detailsLeaf.style = 'animation: leafIn 2s forwards;'
    }
});

// var docWidth = document.documentElement.offsetWidth;[].forEach.call(document.querySelectorAll('*'), function (el) { if (el.offsetWidth > docWidth) { console.log(el); } });

var seconds = timeInSeconds;
function timer() {
    var days = Math.floor(seconds / 24 / 60 / 60);
    var hoursLeft = Math.floor((seconds) - (days * 86400));
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    var minutes = Math.floor(minutesLeft / 60);
    var remainingSeconds = seconds % 60;
    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }
    daysLabel.innerHTML = pad(days)
    hoursLabel.innerHTML = pad(hours)
    minutesLabel.innerHTML = pad(minutes)
    secondsLabel.innerHTML = pad(remainingSeconds)
    if (seconds == 0) {
        clearInterval(countdownTimer);
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);