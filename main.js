var container = document.getElementById('container');

for(i = 0; i<32; i++){
    for(j = 0; j<16; j++){
        var element = document.createElement('div');
        element.style.left = i*50+"px";
        element.style.top = j*50+"px";
        container.appendChild(element);
    }
}