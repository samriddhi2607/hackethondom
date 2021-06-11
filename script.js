// this is the main js file for the donation page
let addbutton = document.querySelector(".add");
let donationpage = document.querySelector(".donation-holder");
var classlistarr=["input-day" , "donation-type", "input-name"];
let day="";
let type ="";
let username="";

let mondayday = document.querySelector(".monday");
let tuesdayday = document.querySelector(".tuesday");
let wednesdayday = document.querySelector(".wednesday");
let backbutton = document.querySelector(".back");
let refeshbutton = document.querySelector(".refresh");

// for back and refresh button

backbutton.addEventListener("click", function()
{
    window.location.assign("index.html");
});

refeshbutton.addEventListener("click", function()
{
    window.location.reload();
})


// for the buttons

mondayday.addEventListener("click", function(e)
{
    console.log(e.target.classList);
    sortdays(e.target.classList[0]);
});

tuesdayday.addEventListener("click", function(e)
{
    console.log(e.target.classList);
    sortdays(e.target.classList[0]); 
});

wednesdayday.addEventListener("click",function(e)
{
    console.log(e.target.classList);
    sortdays(e.target.classList[0]);
});


// for the module
addbutton.addEventListener("click", function(e)
{

     if(document.querySelector(".options"))
     {
         return ;
     }

    console.log("inside add");

    let datadiv = document.createElement("div");
    datadiv.classList.add("options");

    datadiv.innerHTML=`
    <input type="text" placeholder="SELECT THE DAY" class="input-day" >
    <input type="text" placeholder="ENTER THE TYPE OF DONATION" class="donation-type"  >
    <input type="text" placeholder="ENTER YOUR NAME" class="input-name" >
    <div class="button">
    <div class="submit">SUBMIT</div>
    <div class ="close">CLOSE</div>
    </div>
    `
    
    let inputday = datadiv.querySelector(".input-day");
    inputday.addEventListener("keypress" , function(e)
    {
        console.log(e);
        if(e.key=="Enter")
        {
            day=e.target.value;
            console.log(day);
            if(day=="monday" || day=="tuesday"|| day=="wednesday")
            document.querySelector(`.${classlistarr[1]}`).focus(); // so that enters moves to next line
            else
            alert("ENTER A VALID DAY");
        }   
})

    let donationtype = datadiv.querySelector(".donation-type")
    donationtype.addEventListener("keypress", function(e)
    {
        if(e.key=="Enter")
        {
            type=e.target.value;
            console.log(type);
            if(type=="cloth"|| type=="food")
            document.querySelector(`.${classlistarr[2]}`).focus();
            else
            alert("ENTER A VALID DONATION TYPE");
        }
    })

    let inputname = datadiv.querySelector(".input-name")
    inputname.addEventListener("keypress", function(e)
    {
        if(e.key=="Enter")
        {
            username=e.target.value;
            console.log(username);
        }
    })

    let submit = datadiv.querySelector(".submit")
    submit.addEventListener("click", function(e)
    {
        datadiv.remove();

        appendtolist(day , type , username);

    });

    let close = datadiv.querySelector(".close")
    close.addEventListener("click", function(e)
    {
        datadiv.remove();
    })

    donationpage.append(datadiv); // to show this module on the page .


});       

// for appending in the lists
function appendtolist(day , type , username)
{
    console.log(day);
    console.log(type);
    console.log(username);

    let list = document.createElement("div");
    list.classList.add("don");
    list.setAttribute("id" , "list-id");

    let donnationId = uid();
    
    list.innerHTML=`
    <div id =${donnationId}class="listid">#${donnationId}</div>
    <div class="list-day">${day}</div>
    <div class="list-type">${type}</div>
    <div class ="list-username">${username}</div>
    `

    list.setAttribute("draggable","true");
    list.setAttribute("ondragstart", "return dragStart(event)");

    if(day == "monday")
    mondaydonation.append(list);
    else if(day=="tuesday")
    tuesdaydonation.append(list);
    else if(day=="wednesday")
    wednesdaydonation.append(list);
    else 
    alert("ENTER THE CORRECT FIELDS");

    let donationobject =
    {
        donnationId:donnationId,
        donationday : day, 
        donationtype: type,
        donationusername:username,
    };

    console.log(donationobject);
    
    let alldonation = JSON.parse(localStorage.getItem("alldonation"));
    alldonation.push(donationobject);
    localStorage.setItem("alldonation" , JSON.stringify(alldonation));

    // for the empty submit after enter , it shouldnt be added.
    alldonation = JSON.parse(localStorage.getItem("alldonation"));
    let filtereddonation = alldonation.filter(function(donationobject)
    {
        return donationobject.donationday!="";
    })
    localStorage.setItem("alldonation", JSON.stringify(filtereddonation));
}

// for dragging and dropping 
function dragStart(event)
{
   // console.log(event);
    event.dataTransfer.effectAllowed ="move";
    event.dataTransfer.setData("Text", event.target.getAttribute('id'));
    event.dataTransfer.setDragImage(event.target,0,0);
    return true ;
}
function dragEnter(event)
{
   // console.log(event);
    event.preventDefault();
    return true ;

}
function dragOver(event)
{
    //console.log(event);
    return false ;
}
function dragDrop(event)
{
   // console.log(event);
   var src = event.dataTransfer.getData("Text");
   event.target.append(document.getElementById(src));
   console.log(event);
   let completedobject={};
   for(let i=0 ; i<event.target.children.length ; i++)
   {
   let str =event.target.children[i].outerText;
   let str1=str.split("\n");
    
   // console.log(str1);

   completedobject =
   {
       completedId :str1[0],
       completedday : str1[1],
       completedtype:str1[2],
       completedusername:str1[3],
   }
}
   console.log(completedobject);
    
    let allcompleted = JSON.parse(localStorage.getItem("allcompleted"));
    allcompleted.push(completedobject);
    localStorage.setItem("allcompleted" , JSON.stringify(allcompleted));

   let str = completedobject.completedId;
   str = str.substring(1);
   console.log(str);

    let alldonation = JSON.parse(localStorage.getItem("alldonation"));
    let filtereddonation = alldonation.filter(function(donationobject)
    {
        return donationobject.donnationId != str;
    })
    localStorage.setItem("alldonation", JSON.stringify(filtereddonation));


    event.stopPropagation();
    return false;
}

// for sorting days and appending them.
function sortdays(dayselected)
{
    let alldonation = JSON.parse(localStorage.getItem("alldonation"));
    let filterday = alldonation.filter(function(donationobject)
    {
        return donationobject.donationday == dayselected;
    });

    // empty the ui 
     //donationpage.innerHTML="";
     mondaydonation.innerHTML="";
     tuesdaydonation.innerHTML="";
     wednesdaydonation.innerHTML="";

    for(let i =0 ; i<filterday.length ; i++)
    {
        appendtoui(filterday[i]);
    }

}






