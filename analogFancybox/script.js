//Pop up functional
document.querySelectorAll('.cars-photos img').forEach(image =>{
  image.onclick = () => {
    document.querySelector('.pop-up-img').src = image.src;
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('.pop-up-block').style.display = 'block';
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car')
    }
    const CAR_NUMBER = image.id;
    document.querySelector(`.mini-car-${CAR_NUMBER}`).classList.add('chosen-mini-car');
  };
})

//Functional of image under pop up
document.querySelectorAll('.pop-up-other-img img').forEach(miniImage => {
  miniImage.addEventListener('click', () => {
    document.querySelector('.pop-up-img').src =miniImage.src;
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car');
    }
    miniImage.classList.add('chosen-mini-car');
  })
})

//Functional of "Back" button
document.querySelector('.pop-up-block span').addEventListener("click", () => {
  document.querySelector('.pop-up-block').style.display = 'none';
  document.querySelector('body').style.overflowY = 'visible'
})
