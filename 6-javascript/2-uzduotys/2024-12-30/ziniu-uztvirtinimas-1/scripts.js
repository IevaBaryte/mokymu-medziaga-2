// Duomenys

let darbovalandos = 8;
let kepalai = 14; 
let darbuotojai = 7;
let savikaina = 0.89;
let kaina = 2.75;
let uzsakymai = 687;

console.log((kepalai * darbovalandos * darbuotojai) + ' Iškepti kepalai per valandą');

console.log((kepalai * darbovalandos * darbuotojai) * savikaina + '\x80 Visų kepalų savikaina');
console.log((kepalai * darbovalandos * darbuotojai) * kaina + '\x80 Gautos pajamos');
console.log(((uzsakymai) * kaina) - ((kepalai * darbovalandos * darbuotojai) * savikaina) + '\x80 Gautas pelnas');

if (uzsakymai <= (kepalai * darbovalandos * darbuotojai)) {
    console.log(' Kepykla spės padaryti užsakymą')
} else console.log(uzsakymai - (kepalai * darbovalandos * darbuotojai) + 'Kepykla užsakymo nespės įvykdyti');

console.log(uzsakymai * kaina + '\x80 Gautos pajamos už užsakymus');

console.log((uzsakymai * kaina) - ((kepalai * darbovalandos * darbuotojai) * savikaina) + '\x80 Gautas pelnas')