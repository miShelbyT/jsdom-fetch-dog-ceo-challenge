console.log('%c HI', 'color: firebrick')


function fetchPics() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(dogObjs => {
      renderDogs(dogObjs)
    });
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dogBreeds => {
      renderBreeds(dogBreeds)
    });
}



const dogContainer = document.querySelector("#dog-image-container")

const dogBreedsUl = document.querySelector("ul#dog-breeds")


function renderDogs(dogObjs) {
  dogObjs.message.forEach(function(dogObj) {
    renderDog(dogObj)
  })
}

function renderDog(dog) {
  const image = document.createElement("img")
  image.src = dog
  dogContainer.append(image)
}

function renderBreeds(dogBreeds) {
  for (let breed in dogBreeds.message) {
  let li = document.createElement("li")
  li.textContent = breed
  dogBreedsUl.append(li)

  if (dogBreeds.message[breed] != "") {
    const innerUL = document.createElement("ul")
    const innerLi = document.createElement("li")
    innerLi.textContent = dogBreeds.message[breed]
    li.append(innerUL)
    innerUL.append(innerLi)
  }}
  // console.log(dogBreeds.message[breed])
  // console.log(breed)
  // forEach(function(breed) {
  //   renderBreed(breed)
  // })
  // console.log(dogBreeds.message)
}

function renderBreed(breedObj) {
  console.log(breedObj)
  // const image = document.createElement("img")
  // image.src = dog
  // dogContainer.append(image)
}


fetchPics()
fetchBreeds()
