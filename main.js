const tablinks = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")
const container = document.querySelector(".container")
const ulContainer = document.querySelector(".ulContainer")
const toggle = document.querySelector(".toggle")
const image = document.querySelectorAll(".img img");
const close = document.querySelector(".close")

function openTab(tabName){
    for(links of tablinks){
        links.classList.remove("active-link")
    }

    for(tab of tabContent){
        tab.classList.remove("active-content")
    }
    document.getElementById(tabName).classList.add("active-content")
    event.currentTarget.classList.add("active-link")
}

window.onscroll = function() {myscroll()}

function myscroll() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        container.classList.add("active-container");
    }else{
        container.classList.remove("active-container");
    }
}

toggle.addEventListener("click", function() {
    ulContainer.classList.toggle("active-ul")
})


image.forEach(img => {
    img.addEventListener("click", () =>{
        document.querySelector(".model").style.display = "block";
        document.querySelector(".model .img img").src = img.getAttribute("src");
    })
});

close.addEventListener("click", () =>{
    document.querySelector(".model").style.display = "none"
})
