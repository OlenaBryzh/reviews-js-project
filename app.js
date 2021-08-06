// set local reviews data
const reviews = [
  {
    id: 1,
    name: "jane anderson",
    job: "web developer",
    img:
      "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "peter johnson",
    job: "grapfic designer",
    img:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "paul jones",
    job: "intern",
    img:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. Kinfolk thundercats lumbersexual.",
  },
  {
    id: 4,
    name: "kate duti",
    job: "softwere developer",
    img:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// get access to all required html elements
const image = document.getElementById("authors-img");
const authName = document.getElementById("author");
const occupation = document.getElementById("occupation");
const review = document.getElementById("review");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

// define current & last items
let currentItem = 0;
let lastItem = reviews.length - 1;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  displayReview(currentItem);
});

// display author based on its item
function displayReview(author) {
  const item = reviews[author];
  image.src = item.img;
  authName.textContent = item.name;
  occupation.textContent = item.job;
  review.textContent = item.text;
}
// show next review on click
nextBtn.addEventListener("click", function(){
  currentItem ++;
  if(currentItem > lastItem){
    currentItem = 0;
  }
  displayReview(currentItem);
})
// show previous review on click
previousBtn.addEventListener("click", function(){
  currentItem --;
  if(currentItem < 0){
    currentItem = lastItem;
  }
  displayReview(currentItem);
})