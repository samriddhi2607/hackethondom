// this is for the local storage for reviews and receipies.
let reviewcontent = document.querySelector(".review-content");

function init()
{
    let allreviews = JSON.parse(localStorage.getItem("allreviews"));
    
    if(!allreviews)
    {
        localStorage.setItem("allreviews" , JSON.stringify([]));
        return ;
    }

    for(let i =0 ; i<allreviews.length ; i++)
    {
        let reviewobject= allreviews[i];
        appendtoreviewui(reviewobject);
    }

}

init();

function appendtoreviewui(reviewobject)
{
    let {reviewId , reviewName , reviewItem,reviewText,reviewImage} = reviewobject;
    let reviewdiv = document.createElement("div");
    reviewdiv.classList.add("review");
    reviewdiv.innerHTML =`
    <div id = ${reviewId} class="review-id">ID: ${reviewId} </div>
        <div class="review-img"><img src="${reviewImage}"></div>
            <div class="review-name"> USERNAME: ${reviewName}</div>
            <div class="review-item">ITEMNAME:${reviewItem}</div>
            <div class="review-text">REVIEW:${reviewText}</div> 
    ` 
    reviewcontent.append(reviewdiv);
}
