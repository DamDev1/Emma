const tablinks = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")
const container = document.querySelector(".container")
const ulContainer = document.querySelector(".ulContainer")
const toggle = document.querySelector(".toggle")

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