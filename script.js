const bt2 = document.getElementById('bt2');
const numberOfPositions = 3;
let previousPosition = 0;


function moveLeft(button){
    button.style.left = '50%';
}

function moveRight(button){
    button.style.left = '-100%';
}

function center(button){
    button.style.left = '0%';
}

function sortPosition(range){
    return Math.floor(Math.random()*range);
}

bt2.addEventListener('mouseover', function() {
    this.style.position = 'relative';
    let positionBtn = sortPosition(numberOfPositions);
    
    //Avoids repeated positions
    while (previousPosition === positionBtn){
        positionBtn = sortPosition(numberOfPositions);
    }

    previousPosition = positionBtn;

    switch(positionBtn) {
        case 0:
            center(this);
            break;
        case 1:
            moveLeft(this);
            break;
        case 2:
            moveRight(this);
            break;
    }
   
    
});

document.getElementById('bt1').addEventListener('click', function() {
    alert('YAYY THANK U LOVE U');
});