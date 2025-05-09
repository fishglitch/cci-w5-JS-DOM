
let description = document.getElementById("GLOBALDESCRIPTION");
function ClickedShoe() {
    //description.innerHTML = "this is my old shoe.";
    HideDescriptions();
    document.getElementById("shoeDesc").style.display = "block";
}
function ClickedPencil() {
    HideDescriptions();
    description.innerHTML = "this is my old pencil.";
}
function ClickedStar() {
    HideDescriptions();
    description.innerHTML = "this is my old star.";
}
function HideDescriptions() {
    description.innerHTML = "";
    let descriptions = document.querySelectorAll(".ware-desc");
    descriptions.forEach((desc) => {
        desc.style.display = "none";
    })
}
