import message from "./sorting.js";

const sayiUret = ()=>{
    var sayilar=[];
    for(let i=0;i<5;i++){
        var sayi=Math.floor(Math.random() * 100)+1;
        sayilar.push(sayi);
    }
    //nmbrSortAsc(sayilar);
    console.log(sayilar);
    message();
}
const fonksiyon = ()=>{
  if(localStorage.sayac){
    localStorage.sayac++;
  }
  else{
    localStorage.sayac = 1;
  }
  document.querySelector("#mesaj3").innerText = "Bu, sitemizi " + localStorage.sayac + ". ziyaretiniz.";

  localStorage.setItem("isim","Selim");
  //localStorage.bgImage = "kart-bg3.jpg";

  document.querySelector("#mesaj").innerText = "İsim: " + localStorage.getItem("isim");
  document.querySelector("#mesaj").innerText += " bgImage: " + localStorage.bgImage;

  //document.querySelector("body").style.backgroundImage = "url('images/" + localStorage.bgImage + "')";

  sessionStorage.setItem("sepetUrunSayisi",3);
  document.querySelector("#mesaj2").innerText += " sepetUrunSayisi: " + sessionStorage.getItem("sepetUrunSayisi");
  sessionStorage.removeItem("sepetUrunSayisi");
}
