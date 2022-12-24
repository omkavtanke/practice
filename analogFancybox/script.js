//Pop up functional
document.querySelectorAll('.cars-photos img').forEach(image =>{
  image.onclick = () => {
    document.querySelector('.pop-up-img').src = image.src;
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('.pop-up-block').style.display = 'block';
    document.querySelector('.pop-up-img').setAttribute('data-number', image.id);
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car')
    }
    //Mini image under pop up functional
    const CAR_NUMBER = image.id;
    document.querySelector(`.mini-car-${CAR_NUMBER}`).classList.add('chosen-mini-car');

    //Arrows functional
    const CURRENT_IMAGE_ID = document.querySelector('.pop-up-img').getAttribute('data-number');
    if(CURRENT_IMAGE_ID === '10'){
      document.querySelector('.arrow-right-icon').removeEventListener('click', moveRight);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
      document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
    }else if (CURRENT_IMAGE_ID === '1'){
      document.querySelector('.arrow-left-icon').removeEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:first-child').style.color = "#4d4d4d";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "auto";
      document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
    }else{
      document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
      document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
      document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
    }
  };
})

//Functional of image under pop up
document.querySelectorAll('.pop-up-other-img img').forEach(miniImage => {
  miniImage.addEventListener('click', () => {
    document.querySelector('.pop-up-img').src = miniImage.src;
    const MINICAR_NUMBER = miniImage.getAttribute('data-minicar-number');
    document.querySelector('.pop-up-img').setAttribute('data-number', MINICAR_NUMBER);
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
    }
    miniImage.classList.add('chosen-mini-car');

  //  check for zoomed image
    if(document.querySelector('.pop-up-img').style.width === '80%'){
      document.querySelector('.pop-up-img').style.width = '60%';
    }
  //  arrow functional
    const CURRENT_IMAGE_ID = document.querySelector('.pop-up-img').getAttribute('data-number');
    if(CURRENT_IMAGE_ID === '10'){
      document.querySelector('.arrow-right-icon').removeEventListener('click', moveRight);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
      document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
    }else if (CURRENT_IMAGE_ID === '1'){
      document.querySelector('.arrow-left-icon').removeEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:first-child').style.color = "#4d4d4d";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "auto";
      document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
    }else{
      document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
      document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
      document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
      document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
      document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
    }
  })
})

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
document.querySelector('.fullscreen-icon').addEventListener('click',   () => {
  if (document.fullscreenElement) {
    setTimeout(() => document.exitFullscreen(), 100);
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen';
  }else{
    setTimeout(() => document.documentElement.requestFullscreen(), 100);
    document.querySelector('.fullscreen-icon').textContent = 'fullscreen_exit';
  }
})

//Functional for right arrow
function moveRight () {
  const NEXT_IMAGE_ID = +document.querySelector('.pop-up-img').getAttribute('data-number') + 1;
  document.querySelector('.pop-up-img').src = document.getElementById('' + NEXT_IMAGE_ID).src;
  document.querySelector('.pop-up-img').setAttribute('data-number', '' + NEXT_IMAGE_ID)
  if(document.querySelector('.pop-up-img').getAttribute('data-number') === '10'){
    document.querySelector('.arrow-right-icon').removeEventListener('click', moveRight)
    document.querySelector('.pop-up-img-block span:last-child').style.color = "#4d4d4d";
    document.querySelector('.pop-up-img-block span:last-child').style.cursor = "auto";
  }else{
    document.querySelector('.arrow-left-icon').addEventListener('click', moveLeft);
    document.querySelector('.pop-up-img-block span:first-child').style.color = "white";
    document.querySelector('.pop-up-img-block span:first-child').style.cursor = "pointer";
  }
  if(document.querySelector('.chosen-mini-car')){
    document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
  }
  document.querySelector(`.mini-car-${NEXT_IMAGE_ID}`).classList.add('chosen-mini-car');
}

// Functional for left arrow
function moveLeft () {
  const PREV_IMAGE_ID = +document.querySelector('.pop-up-img').getAttribute('data-number') - 1;
  document.querySelector('.pop-up-img').src = document.getElementById('' + PREV_IMAGE_ID).src;
  document.querySelector('.pop-up-img').setAttribute('data-number', '' + PREV_IMAGE_ID);
  if(document.querySelector('.pop-up-img').getAttribute('data-number') === '1'){
    document.querySelector('.arrow-left-icon').removeEventListener('click', moveLeft);
    document.querySelector('.pop-up-img-block span:first-child').style.color = "#4d4d4d";
    document.querySelector('.pop-up-img-block span:first-child').style.cursor = "auto";
  }else{
    document.querySelector('.arrow-right-icon').addEventListener('click', moveRight);
    document.querySelector('.pop-up-img-block span:last-child').style.color = "white";
    document.querySelector('.pop-up-img-block span:last-child').style.cursor = "pointer";
  }
  if(document.querySelector('.chosen-mini-car')){
    document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
  }

  document.querySelector(`.mini-car-${PREV_IMAGE_ID}`).classList.add('chosen-mini-car');
}
