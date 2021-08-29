// let nameGroup = "Nirvana";
// let nameSong = "Dumb";
// let tabPDF = "./tabs/dumb.pdf"


// document.querySelector(".nameGroup").innerText = nameGroup;
// document.querySelector(".nameSong").innerText = nameSong;

// let tab = {
//     nameGroup: "Nirvana",
//     nameSong: "Dumb",
//     doc: "./tabs/dumb.pdf"
// }

// document.querySelector('#tab-info').innerText = ` ${tab.nameGroup}  
//                                                   ${tab.nameSong}
//                                                   ${tab.doc}
//                                                   `;

class Tab {
    constructor(nameGroup,nameSong,doc){
        this.nameGroup = nameGroup;
        this.nameSong = nameSong;
        this.doc = doc;
    }
}

let dumb = new Tab("Nirvana","Dumb","./tabs/Dumb.pdf");
let exhausted = new Tab("Foo Fighter","Exhausted","./tabs/Exhausted.pdf");
let heartShapedBox = new Tab("Nirvana", "Heart Shaped Box","./tabs/HeartShapedBox.pdf");
let lakeOfFire = new Tab("Nirvana", "Lake of fire","./tabs/LakeOfFire.pdf");
let lithium = new Tab("Nirvana", "Lithium","./tabs/Litium.pdf");
let loveBuzz = new Tab("Nirvana", "Love Buzz","./tabs/LoveBuzz.pdf");
let myHero = new Tab("Foo Fighter","My Hero","./tabs/MyHero.pdf");
let pennyRoyalTea = new Tab("Nirvana", "Penny Royal Tea","./tabs/PennyRoyalTea.pdf");
let sappy = new Tab("Nirvana", "Sappy","./tabs/Sappy.pdf");
let somethingInTheWay = new Tab("Nirvana", "Something in the way","./tabs/SomethingInTheWay.pdf");
let theManWhoSoldTheWorld = new Tab("Nirvana", "The Man Who Sold The World","./tabs/TheManWhoSoldTheWorld.pdf");
let whereDidYouSleepLastNight = new Tab("Nirvana", "Where did you sleep last night","./tabs/WhereDidYouSleepLastNight.pdf");

let tabs = [dumb, exhausted, heartShapedBox, lakeOfFire, lithium, loveBuzz, myHero, pennyRoyalTea, sappy, somethingInTheWay, theManWhoSoldTheWorld, whereDidYouSleepLastNight];
tabs.sort(function compare(a,b){
if(a.nameGroup < b.nameGroup){return -1;}
/*if(a.nameGroup > b.nameGroup){return 1;}
else{return 0;}
*/
});

const body = document.querySelector("body");
const main = document.querySelector("#main");

for(let i = 0; i < tabs.length; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("tab-frame");
    let newGroup = document.createElement("h1");
    newGroup.innerText = tabs[i].nameGroup;
    let a = document.createElement("a");
    let newSong = document.createElement("h2");
    newSong = tabs[i].nameSong;
    a.setAttribute("href", tabs[i].doc);
    a.append(newSong);

    body.append(main);
    main.append(newDiv)
    newDiv.append(newGroup);
    newDiv.append(a);

}