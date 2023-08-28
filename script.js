const accesskey = "svEsIJ6ruAhudzzQVY0IMRiB_ndhgjahpLb1GL7Zk08";
const formE1 = document.querySelector("form");
const inputE1= document.getElementById("search-input") ;
const searchResults =document.querySelector(".search-results");
const showmore=document.getElementById("Showmorebutton");

let inputData = "";
let page = 1 ;

async function searchImages() {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const results = data.results;
  
    if (page == 1) {
      searchResults.innerHTML = "";
    }
  
    results.map((result) => {
      const imageWrapper = document.createElement('div');
      const image = document.createElement('img');
      image.src = result.urls.regular;
      image.alt = result.alt_description; 
  
      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
  
      imageWrapper.appendChild(image);
      imageLink.appendChild(imageWrapper); 
  
      imageWrapper.classList.add('imagewrapper');
      searchResults.appendChild(imageLink);
    });
  
    page++;
    if (page > 1) {
      showmore.style.display = "block";
    }
  }

  formE1.addEventListener("submit", (Event) =>{
    Event.preventDefault();
    page = 1;
    searchImages()
  })

  
  showmore.addEventListener("click", (Event) =>{
    searchImages()
  })

  
  