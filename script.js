
let block = document.querySelector('.button-block');

block.onclick = (event) => {
    let element = event.target.parentElement;
    let progress = document.querySelectorAll('.progressbar');
    let fullBar = document.querySelectorAll('.side');

    fullBar.forEach(item => {
        widthFull = parseFloat(window.getComputedStyle(item).getPropertyValue('width'));
        progress = item.childNodes[1];
        progress.style.transition = '.1s linear';

        widthProgress = parseFloat(window.getComputedStyle(progress).getPropertyValue('width'));
        console.log(widthFull, widthProgress);
            if (element.id == 'minus'){
                progress.style.width = `${widthProgress - widthFull * 0.05}px`;
            } else if (element.id == 'plus'){
                if (widthProgress < widthFull){
                    progress.style.width = `${widthProgress + widthFull * 0.05}px`;     
                }
            }
    })
}
