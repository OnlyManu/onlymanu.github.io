const burgerMenuIcons={
    close: "images/icon-hamburger.svg",
    open: "images/icon-close.svg"
}
const burgerMenu=document.getElementById("burger-menu");
const navigation=document.getElementById("navigation");
const links=document.querySelectorAll(".link");

const openCloseNav=()=>{
    if(navigation.classList.contains("opened")){
        navigation.classList.remove("opened");
    }else{
        navigation.classList.add("opened");
    }
}

function onClickBurgerMenu(){
    if(burgerMenu.classList.contains("opened")){
        burgerMenu.setAttribute("src", burgerMenuIcons.close)
    }else{
        burgerMenu.setAttribute("src", burgerMenuIcons.open)
    }
    burgerMenu.classList.toggle("opened")
    openCloseNav()
}
function onClickLinks(e){
    if(getComputedStyle(burgerMenu, null).display!="none"){
        let parentLink=e.target.parentNode;
        if(parentLink.classList.contains("opened")){
            parentLink.classList.remove("opened");
        }else{
            links.forEach((el)=>{
                el.parentNode.classList.remove("opened");
            })
            parentLink.classList.add("opened")
        };
    }
}

burgerMenu.addEventListener("click", onClickBurgerMenu, false)
links.forEach((el)=>{
    el.addEventListener("click", function(e){onClickLinks(e)}, false);
})