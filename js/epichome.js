// const baseurl = "https://students.codex.today/createAccount";
// const token = localStorage.getItem("token");

window.onload = () => {

    const token = localStorage.getItem("token");
    if (!token) {


        window.location.assign(window.location.origin + "/html/epic.html");
    }
}

const logout = () => {
    localStorage.clear();
    window.location.reload();
}





var carou1 = document.getElementById("carou1");

var gggg = document.querySelectorAll(".carousal-item");

var chintu = document.querySelectorAll(".chintu");

var carou2 = document.querySelector(".carou2")

var carou3 = document.querySelector(".carou3")

var display1 = document.getElementById("dispaly1");

var never = document.getElementById("never");
var now = document.getElementById("now");

var carou4 = document.getElementById("carou4");

var prevbtn = document.getElementById("prevbtn");
var nextbtn = document.getElementById("nextbtn");


var gamelist = document.getElementById("gamelist");
var gl1 = document.getElementById("gl1");
var gl2 = document.getElementById("gl2");
var gl3 = document.getElementById("gl3");
var gl4 = document.getElementById("gl4");

var bhavana=document.getElementById("bhavana");
var chaitu=document.getElementById("chaitu");
var manu=document.getElementById("manu");



const baseurl = "https://res.cloudinary.com/cliqtick/raw/upload/v1685015832/data_sryibh.js";
fetch(baseurl)
   .then(res => res.json())
   .then(gamer => {
      console.log(gamer);

      // const finalResult = gamer.imgUrl;
      // // console.log(finalResult);
      // var streamimg = []

      gamer.forEach((e, index) => {
         if (index < 5) {

            chintu[index].setAttribute("src", e.imgUrl);
            chintu[index].setAttribute("href", e.url);

         }

      });

      gamer.forEach((e, index) => {
         if (index > 5 && index < 9) {


            var html1 = `
                     <div style="">
                     <div><a href="${e.url}"><img  style="height: 15rem; width: 25rem;" src="${e.imgUrl}" alt=""></a></div>
                      <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>
                     <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: #434385;"> ${e.price}</div>
                     <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.reviewSummary}</div>
                     </div>`

            carou2.innerHTML += html1;


         }

      });



      gamer.forEach((e, i) => {

         if (i > 10 && i < 13) {

            var html2 = `
         <div style="width: 100%;">
         <div><a href="${e.url}"><img  style="height: 15rem; width: 40rem;" src="${e.imgUrl}" alt=""></a></div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.released}</div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: #434385;"> ${e.price}</div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.reviewSummary}</div>
         </div>`

            carou3.innerHTML += html2;

         }

      });




      gamer.forEach((e, i) => {

         if (i > 15 && i < 45) {

            var html3 = `<div class="imgdiv">
<div><a href="${e.url}"><img style="height: 10rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></div>
<div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: white;"> ${e.price}</div>
</div>`

            never.innerHTML += html3
         }
      });




      gamer.forEach((e, i) => {

         if (i > 35 && i < 65) {

            var html4 = `<div class="imgdiv2">
   <div><a href="${e.url}"><img style="height: 10rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></div>
   <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: white;"> ${e.price}</div>
   </div>`

            now.innerHTML += html4
         }
      });



      gamer.forEach((e, i) => {

         if (i > 125 && i < 129) {

            var html5 = `
        <div>
        <div><a href="${e.url}"><img  style="height: 12rem; width: 25rem;" src="${e.imgUrl}" alt=""></a></div>
        <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.released}</div>
        <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>
        <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: red;"> ${e.price}</div>
        <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.reviewSummary}</div>
        </div>`

            carou4.innerHTML += html5;

         }

      });



      var html6 = "";
      var html7 = "";
      var html8 = "";
      var html9 = "";


      gamer.forEach((e, i) => {
         if (i > 200 && i < 208) {

            html6 += `
        <div style="height: 5rem; width: 50%; display: flex; gap:1rem;border: 2px solid white; background-color: aliceblue;">
        <span><a href="${e.url}"><img  style="height: 5rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></span>
        <span style="font-family: 'Times New Roman', Times, serif; font-size: large; color: black; height: 5rem; width: 50%;"> ${e.reviewSummary}</span>
        </div>`
         }
         if (i > 220 && i < 228) {

            html7 += `
     <div style="height: 5rem; width: 50%; display: flex; gap:1rem;border: 2px solid white; background-color: aliceblue;">
     <span><a href="${e.url}"><img  style="height: 5rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></span>
     <span style="font-family: 'Times New Roman', Times, serif; font-size: large; color: black; height: 5rem; width: 50%;"> ${e.reviewSummary}</span>
     </div>`
         }
         if (i > 100 && i < 108) {

            html8 += `
  <div style="height: 5rem; width: 50%; display: flex; gap:1rem;border: 2px solid white; background-color: aliceblue;">
  <span><a href="${e.url}"><img  style="height: 5rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></span>
  <span style="font-family: 'Times New Roman', Times, serif; font-size: large; color: black; height: 5rem; width: 50%;"> ${e.reviewSummary}</span>
  </div>`
         }
         if (i > 140 && i < 148) {

            html9 += `
<div style="height: 5rem; width: 50%; display: flex; gap:1rem;border: 2px solid white; background-color: aliceblue;">
<span><a href="${e.url}"><img  style="height: 5rem; width: 20rem;" src="${e.imgUrl}" alt=""></a></span>
<span style="font-family: 'Times New Roman', Times, serif; font-size: large; color: black; height: 5rem; width: 50%;"> ${e.reviewSummary}</span>
</div>`
         }
      });
      gl1.addEventListener("click", () => {
         if (gamelist.innerHTML !== "") {
            gamelist.innerHTML = "";
         } else {
            gamelist.innerHTML = html6;
         }

      })

      gl2.addEventListener("click", () => {
         if (gamelist.innerHTML !== "") {
            gamelist.innerHTML = "";
         } else {
            gamelist.innerHTML = html7;
         }

      })

      gl3.addEventListener("click", () => {
         if (gamelist.innerHTML !== "") {
            gamelist.innerHTML = "";
         } else {
            gamelist.innerHTML = html8;
         }

      })

      gl4.addEventListener("click", () => {
         if (gamelist.innerHTML !== "") {
            console.log(gamelist.innerHTML );
            gamelist.innerHTML = "";
         } else {
            gamelist.innerHTML = html9;
         }

      })


      gamer.forEach((e, i) => {

         if (i > 101 && i < 107) {

            var htmlb = `<div >
         <div><a href="${e.url}"><img style="height: 8rem; width: 15rem;" src="${e.imgUrl}" alt=""></a></div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>

         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: white;"> ${e.price}</div>
      </div>`

            bhavana.innerHTML += htmlb;
         }
      });


      gamer.forEach((e, i) => {

         if (i > 121 && i < 127) {

            var htmlc = `<div >
         <div><a href="${e.url}"><img style="height: 7rem; width: 15rem;" src="${e.imgUrl}" alt=""></a></div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>

         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: white;"> ${e.price}</div>
      </div>`

            chaitu.innerHTML += htmlc;
         }
      });


      gamer.forEach((e, i) => {

         if (i > 151 && i < 157) {

            var htmlm = `<div >
         <div><a href="${e.url}"><img style="height: 7rem; width: 15rem;" src="${e.imgUrl}" alt=""></a></div>
         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: aliceblue;"> ${e.title}</div>

         <div style="font-family: 'Times New Roman', Times, serif; font-size: large; color: white;"> ${e.price}</div>
      </div>`

            manu.innerHTML += htmlm;
         }
      });

   });









var count = 0;
carousel(count);
function previousbutton() {
   count = count - 1;
   if (count < 0) count = 0;
   carousel(count, event.target.getAttribute("data-car"));
}
// previousbutton

function nextbutton() {
   count = count + 1;
   if (count > 5) count = 5;
   carousel(count, event.target.getAttribute("data-car"));
}
// nextbutton

function carousel(a, carouselNo) {
   var finaloutput = document.getElementsByClassName("imgdiv");
   if (carouselNo == 2) finaloutput = document.getElementsByClassName("imgdiv2")
   var start = 0;
   var end = 5;

   start = start + a * 5;
   end = end + a * 5;


   if (end >= finaloutput.length || start < 0) {
      start = start - a * 5;
      end = end - a * 5;
      return;
   }
   if (a >= finaloutput.length) {
      a = 0;
      count = 0;
   }
   if (a < 0 && a <= 10) {
      a = finaloutput.length - 1;
      count = finaloutput.length - 1;
   }
   for (let i = 0; i < finaloutput.length; i++) {
      finaloutput[i].style.display = "none";
   }

   for (i = start; i < end; i++) {
      finaloutput[i].style.display = "block";


   }


}


