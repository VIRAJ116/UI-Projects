const mainList = document.querySelectorAll(".main-list");

let currentOpenMainList = null;

function toggleClass(event) {
  const clickedMainList = event.currentTarget;

  if (currentOpenMainList && currentOpenMainList !== clickedMainList) {
    const prevSubList = currentOpenMainList.querySelector(".sub-lists");
    prevSubList.classList.remove('show');

    const prevSideNum = currentOpenMainList.querySelector(".side-num");
    prevSideNum.classList.remove('active-number');
    
    currentOpenMainList.classList.remove('list-show');
  }

  const subList = event.currentTarget.querySelector(".sub-lists");
  subList.classList.toggle('show');
  const sideNum = event.currentTarget.querySelector(".side-num");
  sideNum.classList.toggle('active-number');

  event.currentTarget.classList.toggle('list-show');
  currentOpenMainList = clickedMainList;
}

mainList.forEach((item) => {
  item.addEventListener('click', toggleClass);
});

const subMenuListItems = document.querySelectorAll(".sub-lists li");
subMenuListItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

const subLists = document.querySelectorAll(".sub-lists");
subLists.forEach((subList) => {
  subList.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});


const sidebarMenu = document.querySelector("#sidebar");
const mainContainer = document.querySelector(".container");
const headerLeft = document.querySelector(".header");

let menuOpen = false;
document.querySelector("#sidebar-btn").addEventListener("click",function(){
    if(!menuOpen) {
        sidebarMenu.classList.add("sidebar-show");
        mainContainer.classList.toggle("sidebar-open");
	    headerLeft.classList.toggle("toggle-left");
        menuOpen = true;
    } else {
        mainContainer.classList.remove("sidebar-open");
	    headerLeft.classList.remove("toggle-left");
        sidebarMenu.classList.remove("sidebar-show");
        menuOpen = false;
    }
});

document.getElementsByClassName("main")[0].addEventListener('click',function(){
    if(menuOpen && screen.width <= 992){
        console.log("close menu");
        sidebarMenu.classList.remove("sidebar-show");
        menuOpen = false;
    }
});

document.getElementsByClassName("header")[0].addEventListener('click',function(e){

    if(menuOpen && e.target.id != "nav-icon-image" && screen.width <= 992){
        console.log("close menu");
        sidebarMenu.classList.remove("sidebar-show");
        menuOpen = false;
    }
});

const dropDown = document.querySelectorAll('.dropdown-par');
const dropdownContent = document.querySelectorAll('.dropdown-content');

function dropdownShow(e) {
    e.preventDefault();
    const dropdown = e.currentTarget.querySelector('.dropdown-content');
    dropdown.classList.toggle("show");
}

dropDown.forEach((item) => {
    item.addEventListener('click', dropdownShow);
});

