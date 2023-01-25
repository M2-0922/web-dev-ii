// alart show up with load event
// window.addEventListener('load', () => {
//     Swal.fire({
//         title: `Let's challenge my pet quiz!`,
//         imageUrl: './futa.JPG',
//         imageWitdth: 400,
//         imageHeight: 200
//     });
// })

// section1 with mouseover and out event
const birdImg = document.getElementById('hiding');
const birdMsg = document.getElementById('hiding-message');

birdImg.addEventListener('mouseover', () => {
    birdImg.src = './appearing.PNG';
    birdMsg.style.visibility = 'visible';
});

birdImg.addEventListener('mouseout', () => {
    birdImg.src = './hiding.PNG';
    birdMsg.style.visibility = 'hidden';
});

// section2 with keydown event
const myInput = document.getElementById('my-input');
const correctMsg = document.getElementById('correct-message');

myInput.addEventListener('keydown', (e) => {
    if (`${e.key}` === 'j' && 'J') {
        correctMsg.style.visibility = 'visible';
    }
})

// section3 with submit event
const myForm = document.getElementById('my-form');
const replay1 = document.getElementById('replay-love');
const replay2 = document.getElementById('replay-ok');
const replay3 = document.getElementById('replay-nothing');

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let checkedMsg = myForm.msg.value.toLowerCase();
    console.log(checkedMsg);
    if (checkedMsg.indexOf('love') != -1) {
        replay1.style.visibility = 'visible';
    } else if (checkedMsg === '') {
        replay3.style.visibility = 'visible';
        setTimeout(hiddenMsg, 1500, replay3);
    } else {
        replay2.style.visibility = 'visible';
        setTimeout(hiddenMsg, 1500, replay2);
    }
})

function hiddenMsg(msg) {
    msg.style.visibility = 'hidden';
}

// section4 with scroll event
const feed = document.getElementById('feed');
let scrollY = 0;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    console.log(scrollY);
    // feed.style.transform = `scale(${1 + scrollY / 100})`
    // feed.style.left = `${30 + scrollY}`
})