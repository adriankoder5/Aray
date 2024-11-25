console.log('Hello :3');
// is milk a fruit?
const /*let*/ fruitBowl = ['cheese', 'milk', 'yougurt', 'fløte', 'milkshake', ''];
console.log(fruitBowl);
console.log(fruitBowl[3]);

const idkcard = ['greenBasicLand', 'kløver7', 'reverse', '1 energy 6 sheald'];
console.log(idkcard);
console.log(idkcard[2]);

// const idk = idkcard[1]
// console.log(idk);

const idAbcd = document.querySelector('#abcd');
const idEfgh = document.querySelector('#efgh');
const idIjkl = document.querySelector('#ijkl');
const idMnop = document.querySelector('#mnop');
console.log(idAbcd, idEfgh, idIjkl, idMnop);

idAbcd.textContent = idkcard[0];
idEfgh.textContent = idkcard[1];
idIjkl.textContent = idkcard[2];
idMnop.textContent = idkcard[3];

// uhhh tror det er skrevet feil vei
const advIdkcard = [{'greenBasicLand':'magick'},{'kløver7':'normalekort'},{'reverse': 'uno'},{'1 energy 6 sheald': 'avrage roglike card game'}];
console.log(advIdkcard);
// na her betyr not aged (tekniks set feil)
const smolFruitBowl = {'NAmilk':['milk','milkshake','fløte'], 'Amilk':['cheese','yougurt']};
console.log(smolFruitBowl);
console.log(smolFruitBowl.Amilk);
console.log(smolFruitBowl.Amilk[0]);