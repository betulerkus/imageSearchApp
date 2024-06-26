const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const inputKeyword = document.querySelector("#inputKeyword");
const imgWrapper = document.querySelector("#imgWrapper");
const form = document.querySelector("#form");


form.addEventListener("submit", getImagesFunc);
// form.addEventListener("submit", go);
clearButton.addEventListener("click", removeResultsFunc)





function getImagesFunc(){
    let keyWord=inputKeyword.value.trim();
    // imgWrapper.innerHTML="";
        fetch(`https://api.unsplash.com/search/photos?query=${keyWord}`,{
        method: "GET",
        headers: {
            Authorization : "Client-ID 0Kxx7Tsrl5L_6fQ6jhdQxm1Uqvtdt09aBkIox6rJ9Jg",
        }
    }).then((request)=>request.json())
    .then((data)=>{
        Array.from(data.results).forEach((eachValue)=>{
            const url = eachValue.urls.small;
            addImageToUI(url);
        })
     })
    .catch((err)=>console.log(err))
}

function checkResultsFunc(){
    if (imgWrapper.hasChildNodes){
        console.log("hello!!!")
        // while (imgWrapper.firstChild) {
        //     imgWrapper.removeChild(imgWrapper.firstChild);
        //   }
    }
}

function addImageToUI(url){
    const imgCard = document.createElement("div");
    imgCard.className ="col";
    const imgDiv = document.createElement("div");
    imgDiv.style.boxShadow = "0px 0px 20px black"
    const img =document.createElement("img");
    img.setAttribute("src", url);
    img.style.objectFit="cover";
    img.height = "275";
    img.style.width = "100%";

    imgWrapper.appendChild(imgCard);
    imgCard.appendChild(imgDiv).appendChild(img);

    //IMAGE's HTML CODEs
    /* <div class="col">
          <div class="shadow-sm">
            <img src="https://r.resimlink.com/afpmR61DG9AK.png" class=" " style="object-fit: cover" width="100%" height="275" alt="">
          </div>
        </div>*/
}

function removeResultsFunc(){
    inputKeyword.value="";
    inputKeyword.focus();
    while (imgWrapper.firstChild) {
        imgWrapper.removeChild(imgWrapper.firstChild);
      }
      
}