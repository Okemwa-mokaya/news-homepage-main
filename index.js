const contentEl = document.querySelector(".content");

const toggleBtn = document.querySelector(".toggle");

const dropDownMenu = document.querySelector(".dropdown-menu");

const closeBtn = document.querySelector(".close");

toggleBtn.addEventListener("click", ()=>{
    dropDownMenu.classList.add("open")
});
    
closeBtn.addEventListener("click", ()=>{
    dropDownMenu.classList.remove("open")
});