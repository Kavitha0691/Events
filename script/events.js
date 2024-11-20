const showContent = event => console.log(event.target.textContent)
document.querySelector(".porcupine").onclick = showContent;

const showName = event => console.log(event.target.tagName)
document.querySelector(".panther").onclick = showName;

window.onclick = event => console.log(event.target);

document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase());

window.onclick = event => console.log(event.target.textContent.toUpperCase());

const pelicanLove = () => {
       for (i=0; i<3; i++) {
        console.log("I Love Pelicans!");
       }
}
document.querySelector(".pelican").addEventListener("click", pelicanLove);

const birdLove = animal => console.log(`${animal} is a pretty boy!`);

document.querySelector(".parrot").addEventListener("click", event => birdLove(event.target.textContent));
document.querySelector(".peacock").addEventListener("click", event => birdLove(event.target.textContent));


const notAnteater = () => console.log("i am not anteater")
const notArmadillo = () => console.log("i am not armadillo")

document.querySelector(".pangolin").addEventListener("click",notAnteater);
document.querySelector(".pangolin").addEventListener("click",notArmadillo);

// let x = document.querySelectorAll(".tab")
// console.log(x)
// let tabs = Array.from(x);
// tabs.forEach(item => item.addEventListener("click", () =>alert.textcontent));


// const bestAnimal = animal =>console.log(animal.tolowerCase() === "panther") ? `${animal} is the jungle assassin`: `${animal} is the best;
const bestAnimal = animal => {
       if (animal.toLowerCase() === "panther") {
              console.log(`${animal} is the jungle assassin`);
       } else {
              console.log(`${animal} is the best`)
       }
}
              
             
let animalTabs = Array.from (document.querySelectorAll(".tab"));
animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)));

document.querySelector("footer p span").addEventListener("click", () => console.log("span"));
document.querySelector("footer").addEventListener("click", () => console.log("footer"), true);
document.querySelector("footer p").addEventListener("click", () => console.log("paragraph"), true);


const setActive = (clickedTab) => {
       animalTabs.forEach(tab => tab.classList.remove("active"))
clickedTab.classList.add("active");
document.querySelector(".h1").textContent = clickedTab.textContent; // change the h1 to div names which we clicked on the div tag names
}
animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)));

document.querySelector(".pangolin").addEventListener("click",notAnteater);


let animalContent = Array.from (document.querySelectorAll(".content"));
const findContent = classToMatch => {
       animalContent.forEach (contentDiv => {
              if (contentDiv.classList.contains(classToMatch)) {
                     contentDiv.classList.add("featured")
              } else {
                     contentDiv.classList.remove("featured")
              }
       })
}

animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
       findContent(tab.textContent.toLowerCase())
}))

//excersice 10

const searchInput = document.querySelector("#search")
// document.addEventListener("input", () => console.log(searchInput.value))

const findTab = () => {
     animalTabs.forEach(tab => {
       if (tab.textContent.toLowerCase().includes(searchInput.value)) {
              tab.classList.add(`active`)
       }else {
             tab.classList.remove(`active`)
       }
     })
}

searchInput.addEventListener("input", findTab)