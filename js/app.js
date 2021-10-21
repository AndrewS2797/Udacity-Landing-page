/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const secs = Array.from(document.querySelectorAll('section'));
const navMenu = document.getElementById('navbar__list');
let itemsLiNo = secs.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// I made a function to loop through each section in the html page and make a li element for each one dynamically//
function createNavbar(){
for (section of secs) {
    /*Making New List element for each section in the page*/
    liItem = document.createElement('li'); 
    /*Adding data to the li item such as Links,name,Id and i used data-nav to access it easily later*/
    liItem.innerHTML = `<a class='menu__link' href='#${section.id}'data-nav='${section.id}'>${section.dataset.nav}</a>`;
    /* Adding the item to the menu */
    navMenu.appendChild(liItem); 

}};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
//calling the function of the nav bar//
createNavbar(); 

// Add class 'active' to section when near top of viewport
// I 've added the onscroll fuction to determine the 2 position if true to add the active class to the section in view and it will remove it from the other sections// 
window.onscroll = function() {
  document.querySelectorAll("section").forEach(function (activated){
    if (
      activated.getBoundingClientRect().top >= -200 &&
      activated.getBoundingClientRect().top <= 250)
      {activated.classList.add('your-active-class');}
    else { activated.classList.remove('your-active-class');
  }  
  });
};

// Scroll to section on link click
// I've added an event listener to the click in the nav bar menu//

navMenu.addEventListener("click", (ClickE) => { 
    ClickE.preventDefault();
    // I targetted the code to run only if the click was on the li item of the navigation bar//
    if (ClickE.target.dataset.nav) { 
        document
        .getElementById(`${ClickE.target.dataset.nav}`)
        // I 've changed the behavior of the scroll to be smooth rather than jumping to the section//
        // This option can aslo be done with CSS by adding scroll-behavior: smooth to html//
        .scrollIntoView({ behavior: "smooth" }); 
    // I 've set a time out to refresh the url on the browser when a section link is clicked and i gave it a 500 ms time to run smoothly//
        setTimeout(() => {
        location.hash = `${ClickE.target.dataset.nav}`;
      }, 500);
    }
  });

// Set sections as active

// To top button
// I've saved the element in a constant to use it later//
const btnTop = document.getElementById("top_button");
// I've created a button to scroll to the top of the page in a smooth behavior //
btnTop.addEventListener('click', () => {document.body.scrollTo({top:0, behavior: 'smooth'});});
// I 've saved the page header in a constant to let it dissapear later if the user is not scrolling //
const header = document.querySelector(".page__header");
let Scrolling;
// I've made a function to display the nav bar if the user is scrolling//
document.onscroll = () => {
  header.style.display = "block"
  // I've set a time out for it to dissapear in 6 seconds//
  clearTimeout(Scrolling)
   Scrolling = setTimeout(() => {
    header.style.display = "none";
  }, 6000);
  // if the user is scrolling more than 1200 the button will apear (block)//
  // if it is less than 1200 the button will not appear (none)//
  window.scrollY > 1200
? (btnTop.style.display = "block")
: (btnTop.style.display = "none");

};