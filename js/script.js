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
let lakeOfFire= new Tab("Nirvana", "Lake of fire","./tabs/LakeOfFire.pdf");
let whereDidYouSleepLastNight = new Tab("Nirvana", "Where did you sleep last night","./tabs/WhereDidYouSleepLastNight.pdf");
let somethingInTheWay = new Tab("Nirvana", "Something in the way","./tabs/SomethingInTheWay.pdf");
let sappy = new Tab("Nirvana", "Sappy","./tabs/Sappy.pdf");

let tabs = [dumb, lakeOfFire, whereDidYouSleepLastNight, somethingInTheWay,sappy];


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