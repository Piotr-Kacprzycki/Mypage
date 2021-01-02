const name = "Piotrek";
let age = 32;
const city = "Katowicach";
 
console.log(`Czesć nazywam się ${name} mam ${age}lata i mieszkam w ${city}`);

let heading = document.querySelector('.heading-js');


function auto (){

   setTimeout(() => {
        heading.innerHTML=('Razem budujemy lepszą przyszłość dzięki której otaczamy was tym co najważniejsze czyli spokój w zaciszu domowym ');    
    }, 5000);
     

}
auto()
