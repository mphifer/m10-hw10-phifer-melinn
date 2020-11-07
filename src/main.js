// It is always helpful to use comments in your code!
console.log('test');

const boilingWater = () => {
  document.getElementById("boiling-temp").innerHTML = "212";
};
boilingWater();

const freezingWater = () => {
  document.getElementById("freezing-temp").innerHTML = "32";
};
freezingWater();

const currentWater = () => {
  document.getElementById("water-temp").innerHTML = "98";
};
currentWater();

let myTemp = 98;

setTimeout(function waterTemps() {
  if (myTemp > 212) {
    document.getElementById("boiling").classList.remove("hide");
    document.getElementById("boiling").classList.add("show");
    }
  else if (myTemp < 32) {
    document.getElementById("frozen").classList.remove("hide");
    document.getElementById("frozen").classList.add("show");
    }
  else {
    document.getElementById("good-temp").classList.remove("hide");
    document.getElementById("good-temp").classList.add("show");
    }
}, 3000);
