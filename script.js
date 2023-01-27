const bt2 = document.getElementById('bt2');
let left = 0;


bt2.addEventListener('mouseover', function() {
    //let left = Math.floor(Math.random()*70);
    if (left == 0){
        left = 70
    } else {
        left = 0
    }
    
    this.style.left = left + '%';
    this.style.position = 'relative';
});

document.getElementById('bt1').addEventListener('click', function() {
    alert('YAYY THANK U LOVE U');
});