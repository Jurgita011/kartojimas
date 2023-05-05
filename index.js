 console.log( "einam kavos");

 let racoon1 ='good';
 const racoon2 = 'bad';
 console.log(racoon1, racoon2);
 
const racoon3 = {
    what:'good',
    size: 'big',
}
const racoon4 = {
    what : 'bad',
    size: 'big'
}
console.log(racoon3 == racoon4 );
console.log(racoon3, racoon4 );

let fox1 = racoon1;
racoon1 = 'bad';
console.log(racoon1 == fox1);

let fox3 = racoon3;
racoon3.what ='evil';
fox3.size = ' 100px';

console.log(racoon3 == fox3);

let fox4 = {...racoon3, ...racoon4 }
racoon4.what = 'evil';
fox4. size = '200px'
console.log('fox', fox4, 'racoon:', racoon4);// issiaiskinti si uzrasyma
console.log('fox', fox1, 'racoon:', racoon1);
console.log('fox', fox3, 'racoon:', racoon3);

//const what = racoon3.what;
//const size = racoon3.size;


const{what, size}= racoon3;
console.log(what, size);

const home = [
    'Ieva',
    'Simas',
    'Beaver'
];
home.push('Petras');
home.unshift('Marge');

home[1] = 'Fox'
console.log(home, home[1], home.length);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let h= 0;

do {
    const now = rand(0,1) ? 'H':'S';
     now == 'H' && h++;
console.log('%c' + now , 'color:red');
} while (h<3);
 
let bolt =0;
const grandpa = rand (0,600);
bolt =grandpa;
console.log(bolt);


