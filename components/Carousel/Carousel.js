/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = "mountains.jpeg computer.jpeg trees.jpeg turntable.jpeg".split(" ");
let imgIndex = 0;

function createCarousel(images) {

  let parent = document.querySelector(".carousel-container");
  let carousel = createAndAppend("div", parent, {class: "carousel"});
    createAndAppend("div", carousel, {class: "left-button", textContent: " < "});
    
    for (imgId in images)
      {
          let img = images[imgId];
          let imgClass = "img";

          if (imgId === "0")
            { imgClass = "img displayed"; }

          createAndAppend("img", carousel, {class: imgClass, id: "img" + imgId, src: "./assets/carousel/" + img});
      }

    createAndAppend("div", carousel, {class: "right-button", textContent: " > "});
}

createCarousel(images);

// create left button and right button functionality

let leftButton = document.querySelector(".left-button");
leftButton.addEventListener("click", () => {
  setImage(getImgIdToTheLeft());
})

let rightButton = document.querySelector(".right-button");
rightButton.addEventListener("click", () => {
  setImage(getImgIdToTheRight());
})

function getImgIdToTheLeft()
{
  let leftIndex = undefined;

  if (imgIndex === 0)
    { leftIndex = images.length - 1; }
  else
    { leftIndex = imgIndex - 1; }

  return leftIndex;
}

function getImgIdToTheRight()
{
  let rightIndex = undefined;

  if (imgIndex === images.length - 1)
    { rightIndex = 0; }
  else
    { rightIndex = imgIndex + 1; }

  return rightIndex;
}


// set the currently displayed image to the image with the specified ID
function setImage(newId)
{
  imgIndex = newId;

  let allImages = document.querySelectorAll(".carousel img");
  allImages.forEach(img => {img.classList.remove("displayed");});

  let img = document.getElementById("img" + newId);
  img.classList.add("displayed");

}

