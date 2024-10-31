let mainImage=document.getElementById("mainImage");
let thumbnail=document.getElementsByClassName("thumbnail");

thumbnail[0].addEventListener("click",() =>{
      mainImage.setAttribute("src", "/assets/image/event-01.jpg")
})
thumbnail[1].addEventListener("click",() =>{
      mainImage.setAttribute("src", "/assets/image/event-02.jpg")
})
thumbnail[2].addEventListener("click",() =>{
      mainImage.setAttribute("src", "/assets/image/event-03.jpg")
})


