function change() {
    let box = document.getElementsByClassName("box")[0];
    let h1 = document.getElementById("hello");
    let pera =document.getElementById("pera");

   box.className ="nice";
    pera.innerHTML="the man with that golden hand";
    h1.innerHTML = "tralala";
}

let image = document.getElementsByClassName("image")[0];

function myfunction() {
    image.addEventListener("mouseover", () => {
    image.classList.add("newImage");
});

image.addEventListener("mouseout", () => {
    image.classList.remove("newImage");
});


}
myfunction();






































































