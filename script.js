/*-------------------------Portfolio Item Details Popup---------------------------------*/
document.addEventListener("click",(e) =>{
    if(e.target.classlist.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classlist.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
} 
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }

})

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").scr =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").scr;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}