const tablinks = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")

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