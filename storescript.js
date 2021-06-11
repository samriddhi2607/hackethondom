// this is the local storage file for the bill elements .
function init()
{
    let allelements = JSON.parse(localStorage.getItem("allelements"));
    if(!allelements)
    {
        localStorage.setItem("allelements" , JSON.stringify([]));
        return ;
    }

}
init();