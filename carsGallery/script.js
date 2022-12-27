//Pop up functional
document.querySelectorAll('.cars-photos img').forEach(image =>{
  image.addEventListener('click', () => {
    document.querySelector('.pop-up-img').src = image.src;
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('.pop-up-block').style.display = 'block';
    document.querySelector('.pop-up-img').setAttribute('data-number', image.id);
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car')
    }
    //Mini image under pop up functional
    const CAR_NAME = image.getAttribute('data-car-name');
    document.querySelector('.mini-images').innerHTML = document.querySelector(`.${CAR_NAME}-other`).innerHTML;
    document.querySelector(`.pop-up-other .mini-car-${CAR_NAME}-1`).classList.add('chosen-mini-car');

    //Arrows functional
    firstPage()

    //Functional of image under pop up
    document.querySelectorAll('.pop-up-other img').forEach(miniImage => {
      miniImage.addEventListener('click', () => {
        document.querySelector('.pop-up-img').src = miniImage.src;
        const MINICAR_NUMBER = miniImage.getAttribute('data-minicar-number');
        document.querySelector('.pop-up-img').setAttribute('data-number', MINICAR_NUMBER);
        if(document.querySelector('.chosen-mini-car')) {
          document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
        }
        miniImage.classList.add('chosen-mini-car');

        //  check for zoomed image
        if(document.querySelector('.pop-up-img').style.width === '80%'){
          document.querySelector('.pop-up-img').style.width = '60%';
        }
        //  arrow functional
        const CURRENT_IMAGE_NUMBER = +document.querySelector('.chosen-mini-car').getAttribute('data-minicar-number');
        const IMAGES_COUNT = document.querySelectorAll('.pop-up-other img').length;
        if(CURRENT_IMAGE_NUMBER === IMAGES_COUNT){
          lastPage();
        }else if (CURRENT_IMAGE_NUMBER === 1){
          firstPage();
        }else{
          otherPages()
        }
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
  if(document.querySelector('.pop-up-other-img').style.display === 'none') {
    document.querySelector('.pop-up-other-img').style.display = 'flex';
    document.querySelector('.pop-up-img').style.width = '60%';
  }else{
    document.querySelector('.pop-up-other-img').style.display = 'none';
    document.querySelector('.pop-up-img').style.width = '70%';
  }
})

//Functional for search/zoom icon
document.querySelector('.zoom-icon').addEventListener('click', () => {
  if(document.querySelector('.pop-up-img').style.width === '80%') {
    document.querySelector('.pop-up-img').style.width = '60%';
  }else{
    document.querySelector('.pop-up-img').style.width = '80%';
  }
})

//Functional for fullscreen icon
document.querySelector('.fullscreen-icon').addEventListener('click',  async() => {
  if (!window.screenTop && !window.screenY) {
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen_exit'
    await document.documentElement.requestFullscreen();
  }else{
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen'
    await document.exitFullscreen();
  }
})

//Functional for right arrow
function moveRight () {
  const NEXT_IMG = +document.querySelector('.chosen-mini-car').getAttribute('data-minicar-number') + 1;
  document.querySelector('.pop-up-img').src = document.querySelector(`.pop-up-other [data-minicar-number = "${NEXT_IMG}"]`).src;
  document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
  document.querySelector(`.pop-up-other [data-minicar-number = "${NEXT_IMG}"]`).classList.add('chosen-mini-car');
  const IMAGES_COUNT = document.querySelectorAll('.pop-up-other img').length;
  if(NEXT_IMG === IMAGES_COUNT){
    document.querySelector('.arrow-right-icon').removeEventListener('click', moveRight)
    document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
    document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
  }else{
    document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
    document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
    document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
  }
  // if(document.querySelector('.chosen-mini-car')){
  //   document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
  // }
  // document.querySelector(`.mini-car-${NEXT_IMAGE_ID}`).classList.add('chosen-mini-car');
}
function lastPage () {
  document.querySelector('.arrow-right-icon').removeEventListener('click', moveRight);
  document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
  document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
  document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
  document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
  document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
}
function firstPage() {
  document.querySelector('.arrow-left-icon').removeEventListener('click', moveLeft);
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

// Functional for left arrow
function moveLeft () {
  const PREV_IMG = +document.querySelector('.chosen-mini-car').getAttribute('data-minicar-number') - 1;
  document.querySelector('.pop-up-img').src = document.querySelector(`.pop-up-other [data-minicar-number = "${PREV_IMG}"]`).src;
  document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
  document.querySelector(`.pop-up-other [data-minicar-number = "${PREV_IMG}"]`).classList.add('chosen-mini-car');
  if(PREV_IMG === 1){
    document.querySelector('.arrow-left-icon').removeEventListener('click', moveLeft);
    document.querySelector('.pop-up-img-block span:first-child').style.color = "#4d4d4d";
    document.querySelector('.pop-up-img-block span:first-child').style.cursor = "auto";
  }else{
    document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
    document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
    document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
  }
}

document.querySelector('.pop-up-img').addEventListener('click', () => {
  if(document.querySelector('.pop-up-img').style.width === '80%') {
    document.querySelector('.pop-up-img').style.width = '60%';
    document.querySelector('.pop-up-img').style.cursor = 'zoom-in';
  }else{
    document.querySelector('.pop-up-img').style.width = '80%';
    document.querySelector('.pop-up-img').style.cursor = 'zoom-out';
  }
})
