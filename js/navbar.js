class NavbarComponent{
    tagName = "NavbarComponent";
    constructor(){
        this.render();
    }
    render(){
        let html = `<div class="nav-bar" id="navbar-filter">

        <div class="nav-browse">
            <div class="category-title">
                BROWSE
                <div class="is-divider">
                </div>
            </div>
            <div class="browse-category">
                <ul>
                    <li>
                        <a href="">Bags</a>
                    </li>
                    <li>
                        <a href="">Booking</a>
                    </li>
                    <li>
                        <a href="">Clothing </a> <i class="fa-sharp fa-regular fa-chevron-down"
                            onclick="onClothing()"></i>
                        <ul class="category-option" id="menuClothing">
                            <li><a href="">Hoodies</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Men</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onMen()"></i>
                        <ul class="category-option" id="menuMen">
                            <li><a href="">T-Shirts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Music</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onMusic()"></i>
                        <ul class="category-option" id="menuMusic">
                            <li><a href="">Albums</a></li>
                            <li><a href="">Single</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Posters</a>
                    </li>
                    <li>
                        <a href="">Shoes</a>
                    </li>
                    <li>
                        <a href="">Uncategorized</a>
                    </li>
                    <li>
                        <a href="">Women</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onWomen()"></i>
                        <ul class="category-option" id="menuWomen">
                            <li><a href="">Jeans</a></li>
                            <li><a href="">Sweaters</a></li>
                            <li><a href="">Tops</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-filter-color">
            <div class="category-title">
                FILTER BY
                <div class="is-divider">
                </div>
            </div>
            <div class="filter-color-category">
                <ul>
                    <li>
                        <a href="">Black </a><span>(3)</span>
                    </li>
                    <li>
                        <a href="">Blue</a><span>(1)</span>
                    </li>
                    <li>
                        <a href="">Green</a><span>(2)</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-filter-price">
            <div class="category-title">
                FILTER BY PRICE
                <div class="is-divider">
                </div>
            </div>
            <div class="filter-price-category">
                <div class="range">
                    <div class="range-slider">
                        <span class="range-selected"></span>
                    </div>
                    <div class="range-input">
                        <input type="range" class="min" min="0" max="3000" value="0" step="10">
                        <input type="range" class="max" min="0" max="3000" value="3000" step="10">
                    </div>
                    <div class="range-price">
                        <button type="button" class="btn btn-secondary btn-sm">Filter</button>
                        <div class="range-number">
                            <label for="min">Price: </label>
                            <span>$</span><input type="number" name="min" value="0"><span class="middle">-</span>
                            <span>$</span><input type="number" name="max" value="3000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-bar" id="navbar-filter-mobile">
        <div class="filter-mobile-content">
        <div class="nav-browse">
            <div class="category-title">
                BROWSE
                <div class="is-divider">
                </div>
            </div>
            <div class="browse-category">
                <ul>
                    <li>
                        <a href="">Bags</a>
                    </li>
                    <li>
                        <a href="">Booking</a>
                    </li>
                    <li>
                        <a href="">Clothing </a> <i class="fa-sharp fa-regular fa-chevron-down"
                            onclick="onClothing()"></i>
                        <ul class="category-option" id="menuClothing">
                            <li><a href="">Hoodies</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Men</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onMen()"></i>
                        <ul class="category-option" id="menuMen">
                            <li><a href="">T-Shirts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Music</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onMusic()"></i>
                        <ul class="category-option" id="menuMusic">
                            <li><a href="">Albums</a></li>
                            <li><a href="">Single</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Posters</a>
                    </li>
                    <li>
                        <a href="">Shoes</a>
                    </li>
                    <li>
                        <a href="">Uncategorized</a>
                    </li>
                    <li>
                        <a href="">Women</a><i class="fa-sharp fa-regular fa-chevron-down" onclick="onWomen()"></i>
                        <ul class="category-option" id="menuWomen">
                            <li><a href="">Jeans</a></li>
                            <li><a href="">Sweaters</a></li>
                            <li><a href="">Tops</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-filter-color">
            <div class="category-title">
                FILTER BY
                <div class="is-divider">
                </div>
            </div>
            <div class="filter-color-category">
                <ul>
                    <li>
                        <a href="">Black </a><span>(3)</span>
                    </li>
                    <li>
                        <a href="">Blue</a><span>(1)</span>
                    </li>
                    <li>
                        <a href="">Green</a><span>(2)</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-filter-price">
            <div class="category-title">
                FILTER BY PRICE
                <div class="is-divider">
                </div>
            </div>
            <div class="filter-price-category">
                <div class="range">
                    <div class="range-slider">
                        <span class="range-selected"></span>
                    </div>
                    <div class="range-input">
                        <input type="range" class="min" min="0" max="3000" value="0" step="10">
                        <input type="range" class="max" min="0" max="3000" value="3000" step="10">
                    </div>
                    <div class="range-price">
                        <button type="button" class="btn btn-secondary btn-sm">Filter</button>
                        <div class="range-number">
                            <label for="min">Price: </label>
                            <span>$</span><input type="number" name="min" value="0"><span class="middle">-</span>
                            <span>$</span><input type="number" name="max" value="3000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="backdrop" id="backdrop-filter"></div>
        
    </div>`;
        let navbarcomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<navbarcomponents.length;i++){
            navbarcomponents[i].innerHTML = html;
        };   
    }
}
new NavbarComponent()
var menuClothing=document.getElementById("menuClothing")
var menuMen=document.getElementById("menuMen")
var menuMusic=document.getElementById("menuMusic")
var menuWomen=document.getElementById("menuWomen")
var count=0
function onClothing(){
    count = count+1;
    console.log("menuClothing ",menuClothing)
    if(count%2==1){
        menuClothing.style.display="block";
    }
    else{
        menuClothing.style.display="none";
    }
}

function onMen(){
    count = count+1;
    if(count%2==1){
        menuMen.style="display:block";
    }
    else{
        menuMen.style="display:none";
    }
}

function onMusic(){
    count = count+1;
    if(count%2==1){
        menuMusic.style="display:block";
    }
    else{
        menuMusic.style="display:none";
    }
}

function onWomen(){
    count = count+1;
    if(count%2==1){
        menuWomen.style="display:block";
    }
    else{
        menuWomen.style="display:none";
    }
}

let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(rangeInput[0].value);
      let maxRange = parseInt(rangeInput[1].value);
      if (maxRange - minRange < rangeMin) {     
        if (e.target.className === "min") {
          rangeInput[0].value = maxRange - rangeMin;        
        } else {
          rangeInput[1].value = minRange + rangeMin;        
        }
      } else {
        rangePrice[0].value = minRange;
        rangePrice[1].value = maxRange;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = rangePrice[0].value;
      let maxPrice = rangePrice[1].value;
      if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  document.getElementById("backdrop-filter").addEventListener("click" , function () {
    document.getElementById("navbar-filter-mobile").style.display = "none"
    document.body.style.overflow = "auto"

})
  