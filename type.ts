let zmienna: string = "napis";
let zmienna2: string = `costam ${zmienna}`;
console.log(zmienna);

let liczba: number = 12;
let liczba2: number = 12.455;
let hex: number = 0xfff;
let binary: number = 0b11101;
let octal: number = 0o361;

console.log(`dziesietny: ${hex}, po przecinku: ${liczba2}, binarny: ${binary}, osemkkowy ${octal}`);

let mezczyzna: boolean;
let kobieta: boolean;

const agnieszka: string = "kobieta";

if(agnieszka == "kobieta"){
    kobieta = true;
    mezczyzna = false;
}else{
    kobieta = false;
    mezczyzna = true;
}
console.log(`zmienna mezczyzna ma wartosc ${mezczyzna}, a kobieta ma wartosc ${kobieta}`);

let cokolwiek: any;
cokolwiek = "szkola";
console.log(cokolwiek);
cokolwiek = 45;
console.log(cokolwiek);

let wspolna: string | number;
wspolna = 123
wspolna = "zmienna moze przyjac rozne wartosci";
console.log(wspolna);

