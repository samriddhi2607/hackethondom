// this is the file for the main page (store page).

let reviews = document.querySelector("#reviews");
let donation = document.querySelector("#donation");
let mybill = document.querySelector("#mybill");
let faq = document.querySelector("#faq");
let searchinput = document.querySelector(".input-box");
let dummycontent=document.querySelector(".dummy");

let content = document.querySelector(".mycontent");
let totalamount=0;


// the list of all items in the store.
let allitems=[
    {
        itemclass:"image cake",
        itemname:"Blackforest Chocolate cake",
        itemprice:"RS.750",
        itemimg:"./cakes/cake1.jfif",
    },
    {
        itemclass:"image cake",
        itemname:"Unicorn Cake",
        itemprice:"RS.1050",
        itemimg:"./cakes/cake2.jpg",
    },
    {
    itemclass:"image cake",
    itemname:"Vanilla Chocolate Cake",
    itemprice:"RS.950",
    itemimg:"./cakes/cake3.png",
    }
    ,
   {
    itemclass:"image cake",
    itemname:"Gem Cake",
    itemprice:"RS.1050",
    itemimg:"./cakes/cake4.jpg",
   }
   ,
   {
    itemclass:"image cake",
    itemname:" ButterChoco Cake",
    itemprice:"RS.350",
    itemimg:"./cakes/cake5.jpg",
   }
   ,
   {
    itemclass:"image cake",
    itemname:"Rose Chocolate cake",
    itemprice:"RS.700",
    itemimg:"./cakes/cake6.jpg",
   },
   {
    itemclass:"image cake",
    itemname:"Makeup Cake",
    itemprice:"RS.2000",
    itemimg:"./cakes/cake7.jpg",
   },
   {
    itemclass:"image cake",
    itemname:"Bunny cake",
    itemprice:"RS.2000",
    itemimg:"./cakes/cake8.jpg",
   },
   {
    itemclass:"image cake",
    itemname:"Rainbow Cake",
    itemprice:"RS.2000",
    itemimg:"./cakes/cake9.jpg",
   },
   {
    itemclass:"image cake",
    itemname:"Fancy cake",
    itemprice:"RS.2000",
    itemimg:"./cakes/cake10.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Unicorn",
    itemprice:"RS.2500",
    itemimg:"./cakes/cupcake1.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Chocolate",
    itemprice:"RS.700",
    itemimg:"./cakes/cupcake2.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Floral Cupcakes",
    itemprice:"RS.2500",
    itemimg:"./cakes/cupcake3.jfif",
   },
   {
    itemclass:"image cupcake",
    itemname:"BlackForest",
    itemprice:"RS.700",
    itemimg:"./cakes/cupcake4.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Animated Cupcake",
    itemprice:"RS.2500",
    itemimg:"./cakes/cupcake5.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Minion Cupcake",
    itemprice:"RS.2560",
    itemimg:"./cakes/cupcake6.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Smile the best",
    itemprice:"RS.950",
    itemimg:"./cakes/cupcake7.jfif",
   },
   {
    itemclass:"image cupcake",
    itemname:"Popcorn",
    itemprice:"RS.1000",
    itemimg:"./cakes/cupcake8.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Bunny Rice",
    itemprice:"RS.2500",
    itemimg:"./cakes/cupcake9.jpg",
   },
   {
    itemclass:"image cupcake",
    itemname:"Easter Rabit",
    itemprice:"RS.1050",
    itemimg:"./cakes/cupcake10.jfif",
   },
   {
    itemclass:"image candy",
    itemname:"Gummy Bear",
    itemprice:"RS.250",
    itemimg:"./cakes/candy1.jfif",
   },
   {
    itemclass:"image candy",
    itemname:"Heart Gems",
    itemprice:"RS.350",
    itemimg:"./cakes/candy2.jpg",
   },
   {
    itemclass:"image candy",
    itemname:"Strawberry",
    itemprice:"RS.450",
    itemimg:"./cakes/candy3.jpg",
   },
   {
    itemclass:"image candy",
    itemname:"Rock And Roll",
    itemprice:"RS.550",
    itemimg:"./cakes/candy4.jpg",
   },
   {
    itemclass:"image candy",
    itemname:"Stars",
    itemprice:"RS.650",
    itemimg:"./cakes/candy5.jpg",
   },
   {
    itemclass:"image candy",
    itemname:"Animated",
    itemprice:"RS.1050",
    itemimg:"./cakes/candy6.jpg",
   },
   {
    itemclass:"image candy",
    itemname:"Chocolava",
    itemprice:"RS.750",
    itemimg:"./cakes/candy7.jfif",
   },
   {
    itemclass:"image candy",
    itemname:"Multicoloured",
    itemprice:"RS.850",
    itemimg:"./cakes/candy8.jfif",
   },
   {
    itemclass:"image sandwich",
    itemname:"Hotdog",
    itemprice:"RS.650",
    itemimg:"./cakes/s1.jfif",
   },
   {
    itemclass:"image sandwich",
    itemname:"Double Chesse",
    itemprice:"RS.550",
    itemimg:"./cakes/s2.jpg",
   },
   {
    itemclass:"image sandwich",
    itemname:"Four sliced",
    itemprice:"RS.150",
    itemimg:"./cakes/s3.jfif",
   },
   {
    itemclass:"image sandwich",
    itemname:"White Bread",
    itemprice:"RS.150",
    itemimg:"./cakes/s4.jpg",
   },
   {
    itemclass:"image sandwich",
    itemname:"Chesse Dipping",
    itemprice:"RS.250",
    itemimg:"./cakes/s5.png",
   },
   {
    itemclass:"image sandwich",
    itemname:"Burger",
    itemprice:"RS.150",
    itemimg:"./cakes/s8.jpg",
   },
   {
    itemclass:"image sandwich",
    itemname:"Burger Fries",
    itemprice:"RS.200",
    itemimg:"./cakes/s9.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"Combo 4",
    itemprice:"RS.1000",
    itemimg:"./cakes/m1.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"Combo 3 Chocolate",
    itemprice:"RS.950",
    itemimg:"./cakes/m2.jfif",
   },
   {
    itemclass:"image milkshake",
    itemname:"All Flavours",
    itemprice:"RS.250 /- each",
    itemimg:"./cakes/m3jpg.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"IceCream Milkshake",
    itemprice:"RS.650",
    itemimg:"./cakes/m4.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"Single Chocolate",
    itemprice:"RS.250",
    itemimg:"./cakes/m5.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"Blueberry Smoothie",
    itemprice:"RS.750",
    itemimg:"./cakes/m7.jfif",
   },
   {
    itemclass:"image milkshake",
    itemname:"Cucumber Smoothie",
    itemprice:"RS.650",
    itemimg:"./cakes/m8.jfif",
   },
   {
    itemclass:"image milkshake",
    itemname:"Chocolate Icecream",
    itemprice:"RS.100",
    itemimg:"./cakes/i1.jpg",
   },
   {
    itemclass:"image milkshake",
    itemname:"Purple Icecream",
    itemprice:"RS.950",
    itemimg:"./cakes/i2.jpg",
   },
   
]

creatediv(allitems);

// a function to dynamically append them on the html page.
function creatediv(arr)
{
    console.log("inside create");
    for(let i =0 ; i<arr.length ; i++)
    {
        let obj1 = arr[i];
        let classname=obj1.itemclass;
        classname = classname.split(" ");
        let class1=classname[0];
        let class2 = classname[1];
        let card = document.createElement("div");
        card.classList.add(class1);
        card.classList.add(class2);

        card.innerHTML=` 
        <div class="name">${obj1.itemname}</div>
        <div class="price">${obj1.itemprice}</div>
             <div class="add">
            <i class="fas fa-cart-plus"></i>
             </div>
         <div class="close">
            <i class="fas fa-trash-alt"></i>
         </div>
         <a href="${obj1.itemimg}">
        <img src="${obj1.itemimg}" alt=""> 
       </a>
        `
      content.append(card);
    }
}

// to add the selected items in bill
let billadd = document.querySelectorAll(".add");
console.log(billadd);

for(let i =0 ; i<billadd.length ; i++)
{
    billadd[i].addEventListener("click", function(e)
    {
        addbillme(e);
        
    })
}

// this function is for adding in the local storage the name and the price of the selected product. 
function addbillme(e)
{
        console.log(e);

        let billcontent = e.path[2].innerText; // we get the inner text.
        billcontent= billcontent.split("\n");
        console.log(billcontent);
        let nameitem = billcontent[0];
        let price = billcontent[1];
        price = price.substring(3);
        console.log(price);
        console.log(nameitem); // finding the name and the price from the innerText

        let addamount = parseInt(price);
        console.log(addamount);
        totalamount= totalamount+addamount; // the total amount of the bill till now.
        console.log(totalamount);

        let billelement=
        {
            itemname: nameitem,
            itemprice:addamount,
        }

        console.log(billelement);

       
        // pushing inisde the local storage.
    let allelements = JSON.parse(localStorage.getItem("allelements"));
    allelements.push(billelement);
    localStorage.setItem("allelements" , JSON.stringify(allelements));

    }


// for deleting if someone doesnt want from the bill
let billdelete = document.querySelectorAll(".close");
console.log(billdelete);

for(let i =0 ; i<billdelete.length; i++)
{
    billdelete[i].addEventListener("click",function(e)
    {
        billdeleteme(e);
     }) 
}

// for deleting the items from the bill.
function billdeleteme(e)
{
console.log(e);
        let billcontent = e.path[2].innerText;
        billcontent= billcontent.split("\n");
        console.log(billcontent);
        let nameitem = billcontent[0];
        let price = billcontent[1];
        price = price.substring(3);
        console.log(price);
        console.log(nameitem);

        let addamount = parseInt(price);
        console.log(addamount);
    
        let findelement = JSON.parse(localStorage.getItem("allelements"));
            let exist = false ;
            if(findelement)
            {
                exist = findelement.find(function(t)
                {
                    return t.itemname == nameitem;
                })
         
                if(exist)
                {
                    totalamount = totalamount- addamount;
                    console.log(totalamount);
                    let allelements = JSON.parse(localStorage.getItem("allelements"));
                    let filteredelements = allelements.filter(function(billobject)
                    {
                        return billobject.itemname != nameitem;
                    })
                    console.log(filteredelements);
                    localStorage.setItem("allelements", JSON.stringify(filteredelements));
                    alert("YOUR PRODUCT HAS BEEN SUCCESSFULLY DELETED FROM YOUR CART!!");
                }
     
                else 
                alert("OOPS YOU DIDNT ADD IT IN YOUR CART!!");
               
             }

}

// now when  some one clicks bill then the bill will come(display of bill)
mybill.addEventListener("click", function()
{
    // pop the bill element 
document.querySelector(".heading").style.zIndex='-1';
document.querySelector(".dummy").style.backgroundColor="rgba(0, 0, 0, 0.61)";
document.querySelector(".buttons").style.zIndex='-1';
document.querySelector(".navbar").style.zIndex='-1';
document.querySelector(".image").style.zIndex='-1';

    let amount =0 ;
    if(document.querySelector(".bill"))
    return ; 

    let billdiv = document.createElement("div");
    billdiv.classList.add("bill");
    billdiv.innerHTML =``

    let allelements = JSON.parse(localStorage.getItem("allelements"));
    console.log(allelements);

      for(let i=0 ; i<allelements.length ; i++)
      {
          billdiv.innerHTML= billdiv.innerHTML+
          `
          <div class="item-name">Item Name : ${allelements[i].itemname}</div>
          <div class="item-price">Item Price: ${allelements[i].itemprice}</div>

          `
          amount = amount+allelements[i].itemprice;

      }
      billdiv.innerHTML= billdiv.innerHTML+`<div class="total-amount">TOTAL AMOUNT: ${amount}</div>
      <div class="submit">SUBMIT</div>`

      console.log(amount);
      console.log(billdiv);
      dummycontent.append(billdiv);

      let submit = billdiv.querySelector(".submit")
      submit.addEventListener("click", function(e)
      {
          billdiv.remove();
          window.location.reload();
      });
  
});


// search the given input at enter .
searchinput.addEventListener("keypress", function(e)
{
    if(e.key=="Enter")
    {
        let tofind= e.target.value;
        console.log(tofind);
        
        let filteredarray= allitems.filter(function(obj)
        {
            return obj.itemname.toLocaleLowerCase()==tofind;
        });

       console.log(filteredarray);
       if(filteredarray.length!=0)
       {
           content.innerHTML="";
           creatediv(filteredarray);
           let card = document.querySelector(".image ");
           //console.log(card);
           let addme = card.querySelector(".add");
           //console.log(addme);
           addme.addEventListener("click", function(e)
           {
               addbillme(e);
           });
           let deleteme = card.querySelector(".close");
           deleteme.addEventListener("click",function(e)
           {
               billdeleteme(e);
           });
       }
       else
       alert("OOPS WE DONT HAVE THIS PRODUCT!!");
    }
})


// when clicked on the donation , review or faq page.
donation.addEventListener("click",function()
{
    popup("donation");
    //window.location.assign("index.html");
});

reviews.addEventListener("click",function()
{
    popup("reviews");
    //window.location.assign("reveiws.html");
});

faq.addEventListener("click", function()
{
    popup("faq");
    //window.location.assign("faq.html");
});


// a popup comes and then navigates to the other page .
function popup(pagename)
{
   
document.querySelector(".heading").style.zIndex='-1';
document.querySelector(".dummy").style.backgroundColor="rgba(0, 0, 0, 0.61)";
document.querySelector(".buttons").style.zIndex='-1';
document.querySelector(".navbar").style.zIndex='-1';
document.querySelector(".image").style.zIndex='-1';

    if(document.querySelector(".popup"))
    return ; 
    
    let paragraph="";

    if(pagename=="donation")
    {
    paragraph = 
    "Welcome to the donation page . Here you will see three days monday , tuesday and wednesday . We trust our customers that they wouldnt drag and drop someone else donation in completed box.";
     paragraph=paragraph+ "Once it draged in completed it is considered as completed . And once monday donations are completed , then only tuesday and wednesday donations can be dragged.";
    }
    else if(pagename=="reviews")
    {
        paragraph="Welcome to our reviews and receipies page . Here our customers can share there reviews and receipies on what they like and what they bake . Dont like your review , nevermind you can always delete . But make sure you have your review id .";
    }

    else if(pagename=="faq")
    {
        paragraph="Want to Know more about our policies , Click here and go to our FAQ page.";
    }

    let pagediv = document.createElement("div");
    pagediv.classList.add("popup");
    pagediv.innerHTML =`<p> ${paragraph}</p>
    <div class=submit>LETS GO!!</div>`
     dummycontent.append(pagediv);

      let submit = pagediv.querySelector(".submit")
      submit.addEventListener("click", function(e)
      {
          pagediv.remove();

          if(pagename=="donation")
          window.location.assign("index.html");
          else if(pagename=="reviews")
          window.location.assign("reveiws.html");
          else if(pagename=="faq")
          window.location.assign("faq.html");

          

      });
}
