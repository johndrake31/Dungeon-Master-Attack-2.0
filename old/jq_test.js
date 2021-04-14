"use strict"

// let links = $('a');

// links.on("click", function (e) {
//     e.preventDefault();
//     $(this).html('I was clicked');
// })

// let footerA = $(".footer__link");

// footerA.on('click', function (event) {
//     event.preventDefault();
//     $(this).html("Ce lien a été cliqué");
// });



// //let p = $('p');
// $('p').hover(
//     function () {
//         $(this).addClass("paragraph--hovered");
//     }, //seprator ,
//     function () {
//         $(this).toggleClass("paragraph--hovered");
//     }
// );

let article = $('article');

console.log(article);

article.hover(
    function () {
        let number = $(this).attr('data-id');
        $(this).attr('id', `article-${number}`);
    }
)


// let anchor = $('a')

// anchor.on('click', (e) => {
//     e.preventDefault();
//     console.log('I stopped it');
// })

// let para2nd = $('.article__content>p:last-of-type');
// para2nd.hover(() => {
//     console.log("You are entering an article")
// }, () => {
//     console.log("You are leaving an article")
// })
// /*
const body = $("body");


// //C'est une note
// //créer du HTML avec JQuery
// let elementHeader = document.createElement('header'); //valise
// let elementH1 = document.createElement('h1'); //h2, h3... 
// elementH1.innerHTML = "HELLO WORLD"; //ajoute script

// //ajoute les styles
// let h1Style = elementH1.style;

// h1Style.color = 'red';
// h1Style.fontSize = "2rem" //32px

// //les mettre sur la page
// body.append(elementHeader);
// elementHeader.append(elementH1); //js appendChild(elementH1)
// */