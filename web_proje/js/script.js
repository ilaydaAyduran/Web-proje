const searchForm = document.querySelector (".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


const searchBtn= document.querySelector("#search-btn");
const cartBtn= document.querySelector("#cart-btn");
const menuBtn= document.querySelector("#menu-btn");


searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath ().includes(searchForm)
            
        )  {
            searchForm.classList.remove("active");
           
        }
    });
});

cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath ().includes(cartItem)
            
        )  {
            cartItem.classList.remove("active");
           
        }
    });
});

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath ().includes(navbar)
            
        )  {
            navbar.classList.remove("active");
           
        }
    });
});

const postTexts = [
    " Kahvenin keşfi Etiyopya'da başladıktan sonra zamanla farklı bölgelere yayılarak kültürel ve ticari anlamda önemli bir ürün haline geldi. Özellikle Orta Doğu'da kahve, sosyal etkileşimlerin ve toplumsal buluşmaların önemli bir parçası haline geldi. Kahvehaneler, insanların bir araya gelip sohbet ettiği, tartışmalar yürüttüğü ve hatta bazen politik meseleleri konuştuğu mekanlar olarak önemli bir rol oynadı.Avrupa'ya kahve ticareti Arap tüccarlar sayesinde ulaştı ve özellikle Venedik gibi liman şehirlerinde ticari faaliyetlerin canlanmasına katkıda bulundu. Kahve, Avrupa'da hızla popülerlik kazandı ve kısa sürede kahvehaneler Avrupa şehirlerinin vazgeçilmez bir parçası haline geldi.Kahve ticareti zamanla kolonyalizmin bir parçası haline geldi ve bu da kahve üretim bölgelerinin belirlenmesinde ve kahve ticaretinin şekillenmesinde önemli bir rol oynadı. Bugün, kahve dünya genelinde tüketilen en popüler içeceklerden biri olarak kabul edilir ve birçok farklı kültürde özel hazırlanma yöntemleri ve ritüelleriyle tüketilir.",
    "Kahve dünyada çeşitli yöntemlerle hazırlanır; espresso, filtre kahve, French press gibi. Her yöntemin kendine özgü bir aroması ve lezzeti vardır. Kahve çeşitleri, damak tadına ve tercihe göre geniş bir yelpazede sunulur.",
    "Kahve, yüzyıllar önce Etiyopya'da keşfedildi ve sonrasında dünya geneline yayıldı. Tarihte kültürel ve ticari bir ürün olarak öne çıkan kahve, zamanla farklı toplumlar ve kültürler için önemli bir içecek haline geldi."
  ];
  
  const postImages = [
    "imagess/k2.jpeg",
    "imagess/k1.jpeg",
    "imagess/k3.jpeg"
  ];
  
  function showPopup(postId) {
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `
      <img src="${postImages[postId - 1]}" alt="Kahve">
      <p>${postTexts[postId - 1]}</p>
      <span class="close-btn" onclick="closePopup()">×</span>
    `;
    
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  }



  
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  

  $(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px', /* Kenar boşlukları */
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});  