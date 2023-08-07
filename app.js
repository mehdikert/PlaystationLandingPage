let btnPrice = document.querySelectorAll('.btn-price');
btnPrice.item(0).classList.add('bg-dark');


function activePlan(i){
  let price = document.querySelectorAll('.price > span:first-child') ; 
  let time = document.querySelectorAll('.price > span:last-child');
  let btnPrice = document.querySelectorAll('.btn-price');
  for(let y = 0 ; y < 3 ; y++){
    btnPrice.item(y).classList.remove('bg-dark');
  }
 btnPrice.item(i).classList.add('bg-dark') ;
 if(i === 0){
    for(let y = 0 ; y < 3 ; y++){
        time.item(y).textContent = 'Month'
      }
    price.item(0).textContent = '8.99€'
    price.item(1).textContent = '13.99€'
    price.item(2).textContent = '16.99€'
 }else if(i === 1){
    for(let y = 0 ; y < 3 ; y++){
        time.item(y).textContent = '3 Months'
      }
      
    price.item(0).textContent = '13.99€'
    price.item(1).textContent = '39.99€'
    price.item(2).textContent = '99.99€'
 }else if(i === 2){
    for(let y = 0 ; y < 3 ; y++){
        time.item(y).textContent = 'Year'
      }
      
    price.item(0).textContent = '16.99€'
    price.item(1).textContent = '49.99€'
    price.item(2).textContent = '119.99€'
 }
}


let comment = [
    "Being premium I enjoy many streaming games then I install so convinced by the gameplay and the choice is huge even if it can be improved",
    "As a premium subscriber, I can stream a lot of games and then install them if I'm convinced by the gameplay. The choice is huge, even if it could be improved.",
    'There are constant promotions, which have enabled me to build up a small library without having to pay full price for games.It\'s very easy to navigate, with games listed in order of price or % off. ',
    'More functions...and above all, more fluid On purchases....the duration of the good acquired....the positive point is the discounts that I take advantage of....',
    'j\'ai acheté rainbow 6 siege a 20euro seulement et battlefield 4 a 5euro . comme on peut avoir des réductions sur les précommandes avec des \"exclusive contenent\"',
]

let profilePic = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrIzSQ2ZsLbaedfqpgP2oENJoJlU-gA3A19b87pTwjM_V6NTQ0ycqdVrbvDaTIRfajO0&usqp=CAU",
 'https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/99/EP5823-CUSA16329_00-AV00000000000023/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720',
 'https://wallpapercave.com/wp/wp7759752.jpg',
 'https://e0.pxfuel.com/wallpapers/222/407/desktop-wallpaper-my-top-5-favorite-gaming-w-noah-youtube-profile.jpg',
 'https://wallpapercave.com/wp/mTRuTkp.jpg',
]

let ID = [
    'Dreadlight',
 'CrosStorm_@68443',
 '_____.Alphastrike3000',
 'xXSerpentXx_exe',
 'NorthPacificHake',
]

var i = 0 ;
let pdp = document.querySelector('.profil-pic-user') ; 
pdp.style.background = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrIzSQ2ZsLbaedfqpgP2oENJoJlU-gA3A19b87pTwjM_V6NTQ0ycqdVrbvDaTIRfajO0&usqp=CAU) no-repeat center`
pdp.style.backgroundSize = 'cover'
function ChangeUser(){
    let id = document.querySelector('.idUser') ; 
    let pdp = document.querySelector('.profil-pic-user') ; 
    let commenter = document.querySelector('.user-comment') ;
    if(i < 0){
     i = 4;   
     id.textContent = `ID : ${ID[i]}` ;
     pdp.style.background = `url(${profilePic[i]}) no-repeat center`
     pdp.style.backgroundSize = 'cover'
     commenter.innerHTML = `<p>"${comment[i]}"</p>` ;
    }else if(i == 4){ 
     i = 0 ;  
     id.textContent = `ID : ${ID[i]}` ; 
     pdp.style.background = `url(${profilePic[i]}) no-repeat center`
     pdp.style.backgroundSize = 'cover'
     commenter.innerHTML = `<p>"${comment[i]}"</p>` ;
    }else{
    id.textContent = `ID : ${ID[i]}` ; 
    pdp.style.background = `url(${profilePic[i]}) no-repeat center`
    pdp.style.backgroundSize = 'cover'
    commenter.innerHTML = `<p>"${comment[i]}"</p>` ;
    }
}

function next(){
    i++ ; 
    ChangeUser() ;
}
function previous(){
    i-- ; 
    ChangeUser() ;
}







function games(){
  

}

let index = 0 ;
setInterval(()=>{
  index++ ; 
  if(index == 6){
    index = 0
  }
} , 6000)
setInterval( ()=>{
  let pcGame=[
    'https://images6.alphacoders.com/130/1309409.jpg',
    'https://images6.alphacoders.com/130/1300935.jpg',
    'https://gmedia.playstation.com/is/image/SIEPDC/final-fantasy-xvi-screenshot-02-en-31may23?$1600px$',
    'https://images6.alphacoders.com/131/1315145.jpg',
    'https://images3.alphacoders.com/131/1313511.jpg',
    'https://images8.alphacoders.com/130/1309958.png'
  ]
  
  
  let linkYtb = [
    'https://www.youtube.com/embed/1O6Qstncpnc',
    'https://www.youtube.com/embed/hfJ4Km46A-0',
    'https://www.youtube.com/embed/wvunu2e29tc',
    'https://www.youtube.com/embed/WA989Zz6oSU',
    'https://www.youtube.com/embed/CnGnNCRW5jY',
    'https://www.youtube.com/embed/qDNq9f_UpRw'
  ]
    let pic = document.querySelector('.game') ;
    let trailer = document.querySelector('.trailer iframe') ;
    pic.style.background = `url(${pcGame[index]}) no-repeat center` ;
    pic.style.backgroundSize = 'cover';
    trailer.removeAttribute('src');
    trailer.setAttribute('src' , linkYtb[index]) ;
  }
   , 6000)



   function animeSocialMed(med){
     let divMed = document.querySelector('.socialmedia') ; 
    switch(med){
      case 'fb' : 
      animeRemove()
       divMed.classList.add('fbShadow');
       break ;
      case 'twitter' :
        animeRemove()
        divMed.classList.add('twitterShadow');
        break ;
      case 'insta' :
        animeRemove()
        divMed.classList.add('instaShadow');
         break ;
      case 'ytb' :
        animeRemove() ;
      divMed.classList.add('ytbShadow'); 
       break ;
         
     }
   }

   function animeRemove(){
    let divMed = document.querySelector('.socialmedia') ; 0
      divMed.classList.remove('fbShadow');
      divMed.classList.remove('twitterShadow');
      divMed.classList.remove('instaShadow');
      divMed.classList.remove('ytbShadow');    
    }
  