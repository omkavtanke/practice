const CARS_SRC = ["./images/car-bugatti.jpeg", "./images/car-tuatara.jpeg", "./images/car-rimac.jpeg", "./images/carspeedtail.jpeg","./images/car-valkyrie.jpeg", "./images/car-gemera.jpeg", "./images/car-regera.jpeg", "./images/car-aspark.jpeg", "./images/car-jeska.jpeg", "./images/car-venomf5.jpg"]
document.querySelectorAll('.cars-photos img').forEach(image =>{
  image.onclick = () => {
    document.querySelector('.chosen-img').src = image.src;
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('.chosen-img-block').style.display = 'block';
    if(document.querySelector('.chosen-mini-car')){
      document.querySelector('.chosen-mini-car').classList.remove('chosen-mini-car')
    }
    const CAR_NUMBER = image.id;
    document.querySelector(`.mini-car-${CAR_NUMBER}`).classList.add('chosen-mini-car');
  };
})
document.querySelector('.chosen-img-block span').addEventListener("click", () => {
  document.querySelector('.chosen-img-block').style.display = 'none';
  document.querySelector('body').style.overflowY = 'visible'
})
// document.querySelector('.chosen-img-block').addEventListener("click", () => {
//   document.querySelector('.chosen-img-block').style.display = 'none';
// })
