const container = document.getElementById('container');

//events listener

document.addEventListener('click', (e) => {

 const circleElem = document.createElement('div');

 circleElem.style.top = e.clientY+'px';
 circleElem.style.left = e.clientX+'px';
 circleElem.classList.add('circle');
 container.append(circleElem)

 if (container.childElementCount > 7) {
     container.firstElementChild.remove()
 }

});