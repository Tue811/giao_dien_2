$(document).ready(function(){
    $(".plus").click(function(){
      var val= $(".number").val();
      val++;
      if(val >= 0){
        $(".number").attr("value", val);
      }
    });
    $(".minus").click(function(){
      var val= $(".number").val();
      val--;
      if(val >= 0){
        $(".number").attr("value", val);
      }
    });
  });

  var slideImgProduct=document.getElementsByClassName("slide-product")
  var getSlideImg=document.getElementsByClassName("carousel-item active")
var arr = Array.from(slideImgProduct).map(item => {
    item.addEventListener("click", function(){
        if(item.src!==getSlideImg[0].children[0].currentSrc){
                $('#carouselExample').carousel('next');
        }
        
    })})

var productDesContent=document.getElementById("product-des-content")
var productReviewsContent=document.getElementById("product-reviews-content")
function onDesProduct(){
    productDesContent.style="display:block";
    productReviewsContent.style="display:none";
}

function onReviewsProduct(){
    productDesContent.style="display:none";
    productReviewsContent.style="display:block";
}