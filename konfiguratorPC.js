const gfx = [
    {
        id: 1,
        name: "Karta graficzna Gigabyte Radeon RX 570 Gaming 8GB GDDR5",
        price: 600
    },
    {
        id: 2,
        name: "Karta graficzna Gigabyte GeForce GTX 1660 OC 6GB GDDR5",
        price: 900
    },
    {
        id: 3,
        name: "Karta graficzna Gigabyte Radeon RX 5700 XT Gaming OC 8GB GDDR6",
        price: 1700
    },
    {
        id: 4,
        name: "Karta graficzna MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 1800
    },
]
const cpu = [
    {
        id: 1,
        name: "Procesor Intel Core i5-10400F, 2.9GHz, 12 MB",
        price: 700
    },
    {
        id: 2,
        name: "Procesor AMD Ryzen 5 3600, 3.6GHz, 32 MB",
        price: 900
    },
    {
        id: 3,
        name: "Procesor Intel Core i5-9600KF, 3.7GHz",
        price: 850
    },
    {
        id: 4,
        name: "Procesor AMD Ryzen 3 3100, 3.6GHz, 16 MB",
        price: 450
    },
]
const psu = [
    {
        id: 1,
        name: "be quiet! System Power 9 600W 80 Plus Bronze",
        price: 289
    },
    {
        id: 2,
        name: "ASUS ROG Strix 750W 80 Plus Gold",
        price: 750
    },
    {
        id: 3,
        name: "SilentiumPC Supremo L2 650W 80 Plus Gold",
        price: 359
    },
    {
        id: 4,
        name: "Corsair TX 750W 80 Plus Gold",
        price: 499
    },
]
const mobo = [
    {
        id: 1,
        name: "MSI MPG B550 GAMING PLUS",
        price: 679
    },
    {
        id: 2,
        name: "Gigabyte B450 AORUS ELITE",
        price: 399
    },
    {
        id: 3,
        name: "Gigabyte B360 AORUS GAMING 3 WIFI",
        price: 529
    },
    {
        id: 4,
        name: "MSI MAG Z390 TOMAHAWK",
        price: 719
    },
]
let summaryCompHandler = document.getElementById('summaryComp');
/*
document.write("1-sza karta graficzna:"+gfx[0]+"<br>")
document.write("2-ga karta graficzna:"+gfx[1]+"<br>")
document.write("3-cia karta graficzna:"+gfx[2]+"<br>")
document.write("4-ta karta graficzna:"+gfx[3]+"<br>")*/


/*
document.write("1-sza karta graficzna:"+gfx[0]+"<br>")
document.write("2-ga karta graficzna:"+gfx[1]+"<br>")
document.write("3-cia karta graficzna:"+gfx[2]+"<br>")
document.write("4-ta karta graficzna:"+gfx[3]+"<br>")*/



function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}

for(let i=0; i<4; i++){
    addOpt("gfx", gfx[i].id, gfx[i].name)
}
for(let i=0; i<4; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name)
}
for(let i=0; i<4; i++){
    addOpt("psu", psu[i].id, psu[i].name)
}
for(let i=0; i<4; i++){
    addOpt("mobo", mobo[i].id, mobo[i].name)
}




