// this is local storage for the donation page .

let mondaydonation =document.querySelector(".monday-don");
let tuesdaydonation = document.querySelector(".tuesday-don");
let wednesdaydonation=document.querySelector(".wednesday-don");
let doneelements = document.querySelector(".done");

// function for localstorage 
function init()
{
    let alldonation = JSON.parse(localStorage.getItem("alldonation"));
    let allcompleted = JSON.parse(localStorage.getItem("allcompleted"));

    if(!alldonation)
    {
        localStorage.setItem("alldonation" , JSON.stringify([]));
        return ;
    }

    if(!allcompleted)
    {
        localStorage.setItem("allcompleted" , JSON.stringify([]));
        return ;
    }

    for(let i=0 ; i<allcompleted.length ; i++)
    {
        let completedobject= allcompleted[i];
        appendtocompleted(completedobject);
    }

    for(let i =0 ; i<alldonation.length ; i++)
    {
        let donationobject= alldonation[i];
        appendtoui(donationobject);
    }

}

//init();

// function to append the donation object.
function appendtoui(donationobject)
{
    let {donnationId, donationday , donationtype , donationusername} = donationobject;
    let list = document.createElement("div");
    list.classList.add("don");
    list.setAttribute("id" , "list-id");
    list.innerHTML=`
    <div id =${donnationId}class="listid">#${donnationId}</div>
    <div class="list-day">${donationday}</div>
    <div class="list-type">${donationtype}</div>
    <div class ="list-username">${donationusername}</div>
    `
    list.setAttribute("draggable","true");
    list.setAttribute("ondragstart", "return dragStart(event)");

    if(donationday == "monday")
    mondaydonation.append(list);
    else if(donationday=="tuesday")
    tuesdaydonation.append(list);
    else if(donationday=="wednesday")
    wednesdaydonation.append(list); 

    // if the user presses enter and the day is blank then it should  not be entered in the local storage.
    let alldonation = JSON.parse(localStorage.getItem("alldonation"));
    let filtereddonation = alldonation.filter(function(donationobject)
    {
        return donationobject.donationday !="";
    })
    localStorage.setItem("alldonation", JSON.stringify(filtereddonation));
}

// function to append the completed object in the completed local storage .
function appendtocompleted(completedobject)
{   
    let{ completedId ,completedday ,completedtype,completedusername} = completedobject;

    let list = document.createElement("div");
    list.classList.add("don");
    list.setAttribute("id" , "list-id");
    list.innerHTML=`
    <div id =${completedId}class="listid">${completedId}</div>
    <div class="list-day">${completedday}</div>
    <div class="list-type">${completedtype}</div>
    <div class ="list-username">${completedusername}</div>
    `
    doneelements.append(list);

}


