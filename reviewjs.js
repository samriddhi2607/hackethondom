// this is the main js file for the review and the receipe page.
let addbutton = document.querySelector("#add-review");
let editbutton = document.querySelector("#edit-review");
let receipebutton= document.querySelector("#add-receipe");

// for focus using.
var classreveiew =["input-name","input-item","input-img","content"];

// for the review 
let un="";
let item="";
let text="";
let reviewurl="";

// for receipe
let reviewusername="";
let reviewitem="";
let reviewtext="";
let reviewimg="";

let backbutton = document.querySelector(".back");
let refeshbutton = document.querySelector(".refresh");
let deleteicon = document.querySelector(".delete-icon");


// when clicked on receipe is modal is opened .
receipebutton.addEventListener("click" , function(e)
{   
    if(document.querySelector(".receipe-open"))
    {
      return ;
    }

    console.log("inside add");

    let datadiv = document.createElement("div");
    datadiv.classList.add("receipe-open");

    datadiv.innerHTML=` 
    <input type="text" placeholder="Enter Your Name" class="input-name">
    <input type="text" placeholder="Enter The Item" class="input-item">
    <input type="url" placeholder="Enter the url of the image" class="input-img">
    <div class="content" contenteditable="true" spellcheck="false" data-typed="false">ENTER YOUR TEXT!</div>
    `
   let inputname= datadiv.querySelector(".input-name");
    inputname.addEventListener("keypress", function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            reviewusername=e.target.value;
            console.log(reviewusername);
            document.querySelector(`.${classreveiew[1]}`).focus();
        }   
    });

    let itemname = datadiv.querySelector(".input-item");
    itemname.addEventListener("keypress" , function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            reviewitem=e.target.value;
            console.log(reviewitem);
            document.querySelector(`.${classreveiew[2]}`).focus();
        }   
    });

    let url = datadiv.querySelector(".input-img");
    url.addEventListener("keypress", function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            reviewimg=e.target.value;
            console.log(reviewimg);
            document.querySelector(`.${classreveiew[3]}`).focus();
        }   
    });

datadiv.querySelector(".content").addEventListener("keypress" , function(e)
{
   console.log(e); 
 if(e.key =="Enter" && e.target.getAttribute("data-typed")=="true")
 {
     console.log(e);
     reviewtext=e.target.textContent;
     appendtoreview(reviewusername,reviewitem,reviewtext,reviewimg);
     return ;

 }
    if(e.target.getAttribute("data-typed")=="true")
    {
    return ;
    }
    e.target.textContent="";
    e.target.setAttribute("data-typed" , "true");
});

reviewcontent.append(datadiv);

});


// when clicked on review modal is opened.
addbutton.addEventListener("click", function(e)
{
    if(document.querySelector(".review-open"))
    {
      return ;
    }

    console.log("inside add");

    let datadiv = document.createElement("div");
    datadiv.classList.add("review-open");

    datadiv.innerHTML=`<input type="text" placeholder="Enter Your Name" class="input-name">
    <input type="text" placeholder="Enter The Item" class="input-item">
    <input type="url" placeholder="Enter the url of the image" class="input-img">
    <div class="content" contenteditable="true" spellcheck="false" data-typed="false">ENTER YOUR TEXT!</div>
    `
   let inputname= datadiv.querySelector(".input-name");
    inputname.addEventListener("keypress", function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            un=e.target.value;
            console.log(un);
            document.querySelector(`.${classreveiew[1]}`).focus();
        }   
    });

    let itemname = datadiv.querySelector(".input-item");
    itemname.addEventListener("keypress" , function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            item=e.target.value;
            console.log(item);
            document.querySelector(`.${classreveiew[2]}`).focus();
        }   
    });

    let url = datadiv.querySelector(".input-img");
    url.addEventListener("keypress", function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            reviewurl=e.target.value;
            console.log(reviewurl);
            document.querySelector(`.${classreveiew[3]}`).focus();
        }   
    });

datadiv.querySelector(".content").addEventListener("keypress" , function(e)
{
   console.log(e); 
 if(e.key =="Enter" && e.target.getAttribute("data-typed")=="true")
 {
     console.log(e);
     text=e.target.textContent;
     appendtoreview(un, item,text , reviewurl);
     return ;

 }
    if(e.target.getAttribute("data-typed")=="true")
    {
    return ;
    }
    e.target.textContent="";
    e.target.setAttribute("data-typed" , "true");
});

reviewcontent.append(datadiv);


});

// to close the modal
function closemodal(e)
{
    if(document.querySelector(".review-open"))
    {
        document.querySelector(".review-open").remove();
    }

    if(document.querySelector(".receipe-open"))
    {
        document.querySelector(".receipe-open").remove();
    }
}

// the edit function.
editbutton.addEventListener("click", function(e)
{
    //console.log(e);
    if(document.querySelector(".openmodal"))
    return ; 

    let editdiv = document.createElement("div");
    editdiv.classList.add("openmodal");

    editdiv.innerHTML=` <input type="password" placeholder="Enter the id" class="to-check">
    `
    let p = editdiv.querySelector(".to-check");
    p.addEventListener("keypress", function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
           let customerid=e.target.value;
            console.log(customerid);

            let findreview = JSON.parse(localStorage.getItem("allreviews"));
            let exist = false ;
            if(findreview)
            {
                exist = findreview.find(function(t)
                {
                    return t.reviewId == customerid;
                })
         
                if(exist)
                {
                  let reviewfind = findreview.filter(function(reviewobject)
                  {
                      return reviewobject.reviewId==customerid;
                  });
                  //console.log(ticketfind);
                  reviewcontent.innerHTML="";
                   // to only show that ticket.

                   reviewcontent.innerHTML=`
                   <div class=delete>
                   <i class="fas fa-trash-alt"></i>
                   </div>`

                  appendtoreviewui(reviewfind[0]);

                  document.querySelector(".delete").addEventListener("click" , function(e)
                  {
                    let allreviews = JSON.parse(localStorage.getItem("allreviews"));
                    let filteredreview = allreviews.filter(function(reviewobject)
                    {
                        return reviewobject.reviewId != customerid;
                    })
                    console.log(filteredreview);
                    localStorage.setItem("allreviews", JSON.stringify(filteredreview));
                    reviewcontent.innerHTML="";
                    alert("YOUR REVIEW HAS BEEN DELETED SUCCESFULLY. KINDLY REFRESH YOUR PAGE");

                  });


                }
     
                else 
                alert("Not found in the database");
               
             }

        }

    })

    reviewcontent.innerHTML="";
    reviewcontent.append(editdiv);


});

// for appending it 
function appendtoreview(un , item , text , reviewurl)
{
    console.log(un);
    console.log(item);
    console.log(text);
    console.log(reviewurl);

    if(!text.length)
    return ;

    let reviewdiv = document.createElement("div");
    reviewdiv.classList.add("review");

    let reviewid = uid();
    reviewdiv.innerHTML =`
    <div id = ${reviewid} class="review-id">ID: ${reviewid} </div>
           <div class="review-img"><img src="${reviewurl}"></div>
            <div class="review-name"> USERNAME: ${un}</div>
            <div class="review-item">ITEMNAME:${item}</div>
            <div class="review-text">REVIEW:${text}</div> 
    `
    reviewcontent.append(reviewdiv);
    closemodal(); // to close it  // at enter it is pasted .


    let reviewobject =
    {
        reviewId: reviewid,
        reviewName: un,
        reviewItem: item ,
        reviewText:text,
        reviewImage:reviewurl,
    }

    console.log(reviewobject);

    let allreviews = JSON.parse(localStorage.getItem("allreviews"));
    allreviews.push(reviewobject);
    localStorage.setItem("allreviews" , JSON.stringify(allreviews));

}



// for back , refresh and delete.
backbutton.addEventListener("click", function()
{
    window.location.assign("index.html");
});

refeshbutton.addEventListener("click", function()
{
    window.location.reload();
});

deleteicon.addEventListener("click", function()
{
    window.location.reload();
});

