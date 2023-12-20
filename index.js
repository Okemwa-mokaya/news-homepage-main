const contentEl = document.querySelector(".content");

const toggleBtn = document.querySelector(".toggle");

const dropDownMenu = document.querySelector(".dropdown-menu");

const closeBtn = document.querySelector(".close");

toggleBtn.addEventListener("click", ()=>{
    /*contentEl.classList.add("active")*/
    dropDownMenu.classList.add("open")
});
    
closeBtn.addEventListener("click", ()=>{
    /*contentEl.classList.remove("active")*/
    dropDownMenu.classList.remove("open")
});