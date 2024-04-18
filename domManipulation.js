// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.


// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML="My name is Arshia!";
myHobby.innerHTML="I like to dance and do programming."
myLocation.innerHTML="I live in Queens."


  

});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function() {
  image.src = "https://i.redd.it/d6b2mqpfviz71.png"
});






// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function() {
  image.src = "https://www.olivergal.com/dw/image/v2/BDTD_PRD/on/demandware.static/-/Sites-master-olivergal/default/dw9ada6294/images/data/products/22522/22522_CANV_BFL_a_2x.jpg?"
  alert ("Heyy!")
});

image1Button.addEventListener('mouseover', function() {
  alert ("Hi there! Formal cat here.")
});


// BONUS
// 7. Try using different event types for your buttons.
