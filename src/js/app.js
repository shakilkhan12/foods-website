const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

open.addEventListener('click', () => {
    nav.classList.add('right-0');
})
close.addEventListener('click', () => {
    nav.classList.remove('right-0');
})
nav.addEventListener('click', e => {
    if(e.target.id === 'nav') {
        nav.classList.remove('right-0');
    }
})


// lightbox
const image = document.querySelectorAll('#lightbox');
const lightbox = document.querySelector('.lightbox');
const block = document.querySelector('.lightbox-block');
image.forEach(function(item) {
   item.addEventListener('click', function() {
       lightbox.classList.add('scale-100');
       const element = document.createElement('img');
       element.src = item.src;
       element.classList.add('w-full');
       element.classList.add('h-full');
       element.classList.add('object-cover');
       if (block.children[0]) {
        block.removeChild(block.children[0]);
        console.log('Yes has')
        console.log(block.children)
      }
       block.appendChild(element)
    
   })
})
lightbox.addEventListener('click', function() {
    lightbox.classList.remove('scale-100')
})

// get current year
const year = document.getElementById('year');
const getYear = new Date().getFullYear();
console.log(getYear);
year.innerText = getYear;