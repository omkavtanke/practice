// arrows and  scroll functional
let scrollWidth = 0;
let firstimgWidth = 0;
let currentCarName = '';

//Pop up functional
document.querySelectorAll('.cars-photos img').forEach(image =>{
  image.addEventListener('click', () => {
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('.pop-up-block').style.display = 'block';
    if(document.querySelector('.chosen-mini-car')) {
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car')
    }

    //return scrol to start
    document.querySelector('.pop-up-img-carousel').scrollLeft = 0;
    setTimeout(showHideIcons, 800);

    //Pop-up images carousel
    currentCarName = image.getAttribute('data-car-name');
    document.querySelector('.pop-up-img-carousel').innerHTML = document.querySelector(`.${currentCarName}-other`).innerHTML;

    //zoom
    document.querySelector('.pop-up-img-wrapper').style.width = document.body.clientWidth > 730 ? '60%' : '90%';

    //Mini image under pop up functional
    document.querySelector('.mini-images').innerHTML = document.querySelector(`.${currentCarName}-other`).innerHTML;
    document.querySelector(`.pop-up-other .mini-car-${currentCarName}-1`).classList.add('chosen-mini-car');

    //Car info functional
    const CAR_INFO = document.querySelector(`.${currentCarName}-info-text`).innerHTML
    document.querySelector('.icons-block .car-info-text').innerHTML = CAR_INFO;

    //miniImage functional
    if(document.querySelector('.pop-up-other').style.display === 'none') {
      document.querySelector('.pop-up-other').style.display = 'flex';
    }

    //arrows and scrolling functional
    const carousel = document.querySelector('.pop-up-img-carousel');
    scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    const firstImg = carousel.querySelectorAll('img')[0];
    let marginBetweenImg = 4.800024414062477;
    firstimgWidth = firstImg.clientWidth + marginBetweenImg;

    //Functional of image under pop up
    document.querySelectorAll('.pop-up-other img').forEach(miniImage => {
      miniImage.addEventListener('click', () => {

        //change popup img by clicking mini image
        const clickedMiniCarNumber = miniImage.getAttribute('data-minicar-number');
        const carousel = document.querySelector('.pop-up-img-carousel');
        carousel.scrollLeft = firstimgWidth * (clickedMiniCarNumber - 1);

        if(document.querySelector('.chosen-mini-car')) {
          document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
        }
        miniImage.classList.add('chosen-mini-car');

        setTimeout(showHideIcons, 800)
      });
    })
  });
});

//Functional of "Back" button
document.querySelector('.back-icon').addEventListener('click', () => {
  document.querySelector('.pop-up-block').style.display = 'none';
  document.querySelector('body').style.overflowY = 'visible'
})

//Functional for "minicars" button
document.querySelector('.minicars-icon').addEventListener('click', () => {
  if(document.querySelector('.pop-up-other').style.display === 'none') {
    document.querySelector('.pop-up-other').style.display = 'flex';
    document.querySelector('.pop-up-img').style.width = '60%';
  }else{
    document.querySelector('.pop-up-other').style.display = 'none';
    document.querySelector('.pop-up-img').style.width = '70%';
  }
})

//Functional for fullscreen icon
document.querySelector('.fullscreen-icon').addEventListener('click',   () => {
  if (document.fullscreenElement) {
    setTimeout(() => document.exitFullscreen(), 100);
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen';
  }else{
    setTimeout(() => document.documentElement.requestFullscreen(), 100);
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen_exit';
  }
})

document.querySelector('.pop-up-img').addEventListener('click', () => {
  if(document.querySelector('.pop-up-img').style.width === '80%') {
    document.querySelector('.pop-up-img').style.width = '60%';
    document.querySelector('.pop-up-img').style.cursor = 'zoom-in';
  }else{
    document.querySelector('.pop-up-img').style.width = '80%';
    document.querySelector('.pop-up-img').style.cursor = 'zoom-out';
  }
})

// Scrolling functional
const carousel = document.querySelector('.pop-up-img-carousel');
const showHideIcons = () => {
  if(carousel.scrollLeft === 0){
    firstPage()
  }else if(Math.floor(carousel.scrollLeft) ===  scrollWidth) {
    lastPage()
  }else{
    otherPages()
  }
}
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const autoSlide = () => {
  if(Math.trunc(carousel.scrollLeft) === (carousel.scrollWidth - carousel.clientWidth)) return;
  else if(carousel.scrollLeft === 0) return;
  positionDiff = Math.abs(positionDiff);
  let valDifference = firstimgWidth - positionDiff;
  if(carousel.scrollLeft > prevScrollLeft){
    return carousel.scrollLeft += positionDiff > firstimgWidth / 3 ? valDifference : -positionDiff;
  }else{
    carousel.scrollLeft -= positionDiff > firstimgWidth / 3 ? valDifference : -positionDiff;
  }
}
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  if(!isDragStart)return;
  setTimeout(showHideIcons, 100);
  isDragging = true;
  carousel.classList.add('dragging')
  carousel.scrollLeft = e.pageX;
  e.preventDefault();
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
  carousel.classList.remove('dragging')
  isDragStart = false;

  if(!isDragging)return;
  isDragging = false;
  autoSlide();
  setTimeout(showHideIcons, 500);
  setTimeout(updateMiniImages, 500);
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);

//under pop-up functional
function updateMiniImages(){
  if(carousel.scrollLeft === 0){
    document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
    document.querySelector(`.pop-up-other .mini-car-${currentCarName}-1`).classList.add('chosen-mini-car');
  }else{
    let currentCarNumber = (carousel.scrollLeft / firstimgWidth + 1 );
    document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
    document.querySelector(`.pop-up-other .mini-car-${currentCarName}-${Math.ceil(currentCarNumber)}`).classList.add('chosen-mini-car');
  }
}


// arrows functional
const arrows = document.querySelectorAll('.pop-up-img-block span')


function moveRight (){
  carousel.scrollLeft += firstimgWidth
  setTimeout(() => {
    if(Math.ceil(carousel.scrollLeft) === scrollWidth){
      lastPage()
    }else{
      otherPages()
    }
  }, 500)
  setTimeout(updateMiniImages, 500);
}
function moveLeft () {
  carousel.scrollLeft -= firstimgWidth
  setTimeout(() => {
    if(carousel.scrollLeft === 0){
      firstPage()
    }else{
      otherPages()
    }
  }, 500)
  setTimeout(updateMiniImages, 500);
}

arrows.forEach( arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.id === 'left'){
      carousel.scrollLeft -= firstimgWidth;
      setTimeout(showHideIcons, 800)
      setTimeout(updateMiniImages, 500);
    }else{
      setTimeout(showHideIcons, 800)
      setTimeout(updateMiniImages, 500);
      carousel.scrollLeft += firstimgWidth;
      otherPages()
    }
  });
})
const arrowRight = document.querySelector('.arrow-right-icon');
const arrowLeft = document.querySelector('.arrow-left-icon');
function lastPage () {
  arrowRight.replaceWith(arrowRight.cloneNode(true));
  document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
  document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
  document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
  document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
  document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
}
function firstPage() {
  arrowLeft.replaceWith(arrowLeft.cloneNode(true));
  document.querySelector('.pop-up-img-block span:first-child').style.color = "#4d4d4d";
  document.querySelector('.pop-up-img-block span:first-child').style.cursor = "auto";
  document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
  document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
  document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
}
function otherPages() {
  document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
  document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
  document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
  document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
  document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
  document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
}

