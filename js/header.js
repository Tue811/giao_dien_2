class HeaderComponent{
    tagName = "HeaderComponent";
    constructor(){
        this.render();
    }
    render(){
        let html = `<section>
        <div class="header-top">
            <div class="container ">
                <div class="col-lg-4 col-sm-12 col-md-12 header-top-text">
                    <b>DO ANYTHING HERE OR JUST REMOVE MOMENT IT ...</b>
                </div>
                <div class="col-lg-8 col-sm-0 col-md-0 header-top-menu">
                    <div class="text">About</div>
                    <div class="text">Our Stores</div>
                    <div class="text">Blog</div>
                    <div class="text">Contact</div>
                    <div class="text">FAQ</div>
                    <div class="text"><i class="fa-sharp fa-regular fa-envelope"></i> Newsletter</div>
                    <div class="dropdown ">
                        <button class="btn btn-secondary dropdown-toggle text" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Languages
                        </button>
                        <ul class="dropdown-menu">
                            <li>You need Polylang or WPML plugin for this to work.
                                You can remove it from Theme Options.</li>

                        </ul>
                    </div>
                    <div>Wishlist <i class="fa-solid fa-heart"></i></div>
                    <div><i class="fa-brands fa-facebook-f"></i></div>
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-twitter"></i></div>
                    <div><i class="fa-sharp fa-regular fa-envelope"></i></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="header-nav" id="myHeader">
            <div class="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <button class="navbar-toggler" onclick="onNavMobile()" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <img src="/img/logo.png" alt="">
                        </a>
                        <div class="collapse navbar-collapse header-nav-menu " id="">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="dropbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
                                        <div class="dropdown-content">
                                            <div class="input-group mb-3 header-nav-search">
                                                <input type="text" class="form-control" placeholder="Search..."
                                                    aria-label="Recipient's username" aria-describedby="button-addon2">
                                                <button class="btn btn-outline-secondary" type="button"
                                                    id="button-addon2"><i
                                                        class="fa-solid fa-magnifying-glass"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="dropbtn">DEMOS <i class="fa-regular fa-angle-down"></i></button>
                                        <div class="dropdown-content">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">SHOP DEMOS</a>
                                                        <a href="#">Classic Shop</a>
                                                        <a href="#">Simple Slider</a>
                                                        <a href="">Fullscreen Fashion</a>
                                                        <a href="#">Video Cover</a>
                                                        <a href="#">Slider Cover</a>
                                                        <a href="">Grid Style 1</a>
                                                        <a href="">Grid Style 2</a>
                                                        <a href="">Grid Style 3</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">MORE SHOP DEMOS</a>
                                                        <a href="#">Mega Shop</a>
                                                        <a href="#">Cute Shop</a>
                                                        <a href="">Sport Shop</a>
                                                        <a href="">Vendor Shop</a>
                                                        <a href="">Parallax Shop</a>
                                                        <a href="">Big Sale</a>
                                                        <a href="">Sale Countdown</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">BUSINESS DEMOS</a>
                                                        <a href="#">Agency</a>
                                                        <a href="#">Corporate</a>
                                                        <a href="">Freelancer</a>
                                                        <a href="">Explore</a>
                                                        <a href="">Lifestyle</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="dropbtn">FEATURES <i
                                                class="fa-regular fa-angle-down"></i></button>
                                        <div class="dropdown-content">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">FEATURES</a>
                                                        <a href="#">Core Features</a>
                                                        <a href="#">What's New</a>
                                                        <a href="">UX Builder</a>
                                                        <a href="#">Header Designer</a>
                                                        <a href="#">Flatsome Studio</a>
                                                        <a href="">Fast Performance</a>
                                                        <a href="">Parallax Scrolling</a>
                                                        <a href="">Single Page Navigation</a>
                                                        <a href="">Sticky Sections</a>
                                                        <a href="">Getting Started</a>
                                                        <a href="">Footer Features</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">MORE</a>
                                                        <a href="#">Blog Features</a>
                                                        <a href="#">Portfolio Features</a>
                                                        <a href="">Block element</a>
                                                        <a href="">Videos & Docs</a>
                                                        <a href="">Customer Reviews</a>
                                                        <a href="">Element Overview</a>
                                                        <a class="text-title" href="#">WOOCOMMERCE</a>
                                                        <a href="">Category Features</a>
                                                        <a href="">Product Features</a>
                                                        <a href="">Catalogue Mode</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a href="#"><img src="../img/img-menu.jpg" alt=""></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="dropbtn">SHOP <i class="fa-regular fa-angle-down"></i></button>
                                        <div class="dropdown-content">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">SHOP DEMOS</a>
                                                        <a href="#">Classic Shop</a>
                                                        <a href="#">Simple Slider</a>
                                                        <a href="">Fullscreen Fashion</a>
                                                        <a href="#">Video Cover</a>
                                                        <a href="#">Slider Cover</a>
                                                        <a href="">Grid Style 1</a>
                                                        <a href="">Grid Style 2</a>
                                                        <a href="">Grid Style 3</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">MORE SHOP DEMOS</a>
                                                        <a href="#">Mega Shop</a>
                                                        <a href="#">Cute Shop</a>
                                                        <a href="">Sport Shop</a>
                                                        <a href="">Vendor Shop</a>
                                                        <a href="">Parallax Shop</a>
                                                        <a href="">Big Sale</a>
                                                        <a href="">Sale Countdown</a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-title" href="#">BUSINESS DEMOS</a>
                                                        <a href="#">Agency</a>
                                                        <a href="#">Corporate</a>
                                                        <a href="">Freelancer</a>
                                                        <a href="">Explore</a>
                                                        <a href="">Lifestyle</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="dropbtn">PAGES <i class="fa-regular fa-angle-down"></i></button>
                                        <div class="dropdown-content menu-pages">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <a href="#">Portfolio</a>
                                                        <a href="#">About</a>
                                                        <a href="#">Contact</a>
                                                        <a href="">Our Stores</a>
                                                        <a href="">Maintenance</a>
                                                        <a href="">Page Layouts</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">BLOG</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">ELEMENTS</a>
                                </li>
                            </ul>
                           
                        </div>
                        <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link btn-login" href="#">LOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link cart-number" href="#"><span>CART / $0,00 </span>
                                <i class="fa-regular fa-basket-shopping-simple"></i></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                
            </div>
            <div class="modal-nav-header" id="modal-nav-header">
                <div class="nav-mobile" id="nav-mobile">
                        <div class="container">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                              
                                    <div class="input-group mb-3 header-nav-search ">
                                        <input type="text" class="form-control" placeholder="Search..."
                                            aria-label="Recipient's username" aria-describedby="button-addon2">
                                        <button class="btn btn-outline-secondary btn-search" type="button"
                                            id="button-addon2"><i
                                                class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                           
                        </li>
                        <li class="nav-item">
                            
                                <a class="dropbtn">DEMOS <i class="fa-regular fa-angle-down" onclick="onDemos()"></i></a>
                                <div class="content-demos" id="content-demos">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <a class="text-title" href="#">SHOP DEMOS</a><br>
                                                <a href="#">Classic Shop</a><br>
                                                <a href="#">Simple Slider</a><br>
                                                <a href="">Fullscreen Fashion</a><br>
                                                <a href="#">Video Cover</a><br>
                                                <a href="#">Slider Cover</a><br>
                                                <a href="">Grid Style 1</a><br>
                                                <a href="">Grid Style 2</a><br>
                                                <a href="">Grid Style 3</a>
                                            </div>
                                            <div class="col-12">
                                                <a class="text-title" href="#">MORE SHOP DEMOS</a><br>
                                                <a href="#">Mega Shop</a><br>
                                                <a href="#">Cute Shop</a><br>
                                                <a href="">Sport Shop</a><br>
                                                <a href="">Vendor Shop</a><br>
                                                <a href="">Parallax Shop</a><br>
                                                <a href="">Big Sale</a><br>
                                                <a href="">Sale Countdown</a><br>
                                            </div>
                                            <div class="col-12">
                                                <a class="text-title" href="#">BUSINESS DEMOS</a>
                                                <a href="#">Agency</a>
                                                <a href="#">Corporate</a>
                                                <a href="">Freelancer</a>
                                                <a href="">Explore</a>
                                                <a href="">Lifestyle</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </li>
                        <li class="nav-item">
                            
                                <a class="dropbtn">FEATURES <i
                                        class="fa-regular fa-angle-down" onclick="onFeatures()"></i></a>
                                <div class="content-features" id="content-features">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <a class="text-title" href="#">FEATURES</a><br>
                                                <a href="#">Core Features</a><br>
                                                <a href="#">What's New</a><br>
                                                <a href="">UX Builder</a><br>
                                                <a href="#">Header Designer</a><br>
                                                <a href="#">Flatsome Studio</a><br>
                                                <a href="">Fast Performance</a><br>
                                                <a href="">Parallax Scrolling</a><br>
                                                <a href="">Single Page Navigation</a><br>
                                                <a href="">Sticky Sections</a><br>
                                                <a href="">Getting Started</a><br>
                                                <a href="">Footer Features</a><br>
                                            </div>
                                            <div class="col-12">
                                                <a class="text-title" href="#">MORE</a><br>
                                                <a href="#">Blog Features</a><br>
                                                <a href="#">Portfolio Features</a><br>
                                                <a href="">Block element</a><br>
                                                <a href="">Videos & Docs</a><br>
                                                <a href="">Customer Reviews</a><br>
                                                <a href="">Element Overview</a><br>
                                                <a class="text-title" href="#">WOOCOMMERCE</a><br>
                                                <a href="">Category Features</a><br>
                                                <a href="">Product Features</a><br>
                                                <a href="">Catalogue Mode</a><br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                        </li>
                        <li class="nav-item">
                          
                                <a class="dropbtn">SHOP <i class="fa-regular fa-angle-down" onclick="onShop()"></i></a>
                                <div class="content-shop" id="content-shop">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <a class="text-title" href="#">SHOP DEMOS</a><br>
                                                <a href="#">Classic Shop</a><br>
                                                <a href="#">Simple Slider</a><br>
                                                <a href="">Fullscreen Fashion</a><br>
                                                <a href="#">Video Cover</a><br>
                                                <a href="#">Slider Cover</a><br>
                                                <a href="">Grid Style 1</a><br>
                                                <a href="">Grid Style 2</a><br>
                                                <a href="">Grid Style 3</a><br>
                                            </div>
                                            <div class="col-12">
                                                <a class="text-title" href="#">MORE SHOP DEMOS</a><br>
                                                <a href="#">Mega Shop</a><br>
                                                <a href="#">Cute Shop</a><br>
                                                <a href="">Sport Shop</a><br>
                                                <a href="">Vendor Shop</a><br>
                                                <a href="">Parallax Shop</a><br>
                                                <a href="">Big Sale</a><br>
                                                <a href="">Sale Countdown</a><br>
                                            </div>
                                            <div class="col-12">
                                                <a class="text-title" href="#">BUSINESS DEMOS</a><br>
                                                <a href="#">Agency</a><br>
                                                <a href="#">Corporate</a><br>
                                                <a href="">Freelancer</a><br>
                                                <a href="">Explore</a><br>
                                                <a href="">Lifestyle</a><br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </li>
                        <li class="nav-item">
                            
                                <a class="dropbtn">PAGES <i class="fa-regular fa-angle-down" onclick="onPages()"></i></a>
                                <div class="content-pages menu-pages" id="content-pages">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <a href="#">Portfolio</a>
                                                <a href="#">About</a>
                                                <a href="#">Contact</a>
                                                <a href="">Our Stores</a>
                                                <a href="">Maintenance</a>
                                                <a href="">Page Layouts</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-blog ">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-element">ELEMENTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-element">LOGIN</a>
                        </li>
                        <li class="nav-item">
                        <div class="link-element"><i class="fa-sharp fa-regular fa-envelope"></i> Newsletter</div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link link-element">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-sharp fa-regular fa-envelope"></i>
                        </a>
                        </li>
                    
                   
                    </ul>
                        
                </div>
                </div>
                        <div class="backdrop" id="backdrop"></div>
                        </div>  
        </div>`;
        let headercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<headercomponents.length;i++){
            headercomponents[i].innerHTML = html;
        };   
    }
}
new HeaderComponent()

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var navMobile=document.getElementById("nav-mobile")

function onNavMobile(){
    console.log(true)
    document.getElementById("modal-nav-header").style.display = "block"
    navMobile.style.display="block";
    document.body.style.overflow = "hidden"
}

document.getElementById("backdrop").addEventListener("click" , function () {
    document.getElementById("modal-nav-header").style.display = "none"
    document.body.style.overflow = "auto"

})

var count=0;

function onDemos(){
   count++;
   if(count%2==1){
    document.getElementById("content-demos").style.display="block"
   }
   else{
    document.getElementById("content-demos").style.display="none"
   }
}

function onFeatures(){
    count++;
    if(count%2==1){
     document.getElementById("content-features").style.display="block"
    }
    else{
     document.getElementById("content-features").style.display="none"
    }
 }

 function onShop(){
    count++;
    if(count%2==1){
     document.getElementById("content-shop").style.display="block"
    }
    else{
     document.getElementById("content-shop").style.display="none"
    }
 }

 function onPages(){
    count++;
    if(count%2==1){
     document.getElementById("content-pages").style.display="block"
    }
    else{
     document.getElementById("content-pages").style.display="none"
    }
 }