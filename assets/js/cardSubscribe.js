// Open card subcribe
const cardToggle = document.querySelectorAll('.btn__card');
const card = document.getElementById('subscribe');
const cardClose = document.querySelector('.close__card');

cardToggle.forEach(n => n.addEventListener('click', () =>{
    card.classList.add('open');
}));

if(cardClose) {
    cardClose.addEventListener('click', () => {
        card.classList.remove('open');
    })
}

//  Open comment
document.getElementById('myBtn').click();
function openComment(id) {
    let x = document.getElementById(id);
    if(x.className.indexOf('show') == -1) {
        x.classList.add('show');
    } else {
        x.classList.remove('show');
    }
}

function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "&#10003; Liked";
}