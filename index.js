function give() {
    alert("Thank you for choosing to support God's work. You are going to be redirected to the payment page soon. May God bless you " )
}


let pic = document.getElementById('pic');
let images = new Array(
    "images/lhands.jpg",
    "images/worship.jpg",
    "images/hand.jpg",
    "images/jesus.jpg",
    "images/pray.jpg",
    "images/study.jpg",
    "images/bib.jpg"
)

let len = images.length;
let i = 0;
function slider() {
    if (i > len - 1) {
        i = 0;
    }
    pic.src = images[i];
    i++;
    setTimeout('slider()', 3000);
    
}