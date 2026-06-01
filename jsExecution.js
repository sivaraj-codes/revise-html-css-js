// var aGlobalVar="globalVar"
// function main(){
//     var bMainVar="main";
//     console.log("main var", { bMainVar });
// }
//  console.log("gl var", { aGlobalVar, });

// main();

const set = new Set([1, 2, 2, 3]);
console.log(set);

function x() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log("i", i);
    }, i * 1000);
  }

  console.log("Namaste");
}

document.addEventListener("DOMContentLoaded", () => {
  let customArea = document.getElementById("cutom-area");
  customArea.innerHTML = `<h1>New Head</h1>`;
  console.log("customArea", { customArea });

  let containerEl = document.createElement("div");
  containerEl.setAttribute("class", "container");

  let rowEl = document.createElement("div");
  rowEl.setAttribute("class", "row");

  let cellEl = document.createElement("div");
  cellEl.classList.add("col");
  cellEl.innerText = "this is cell Text";

  rowEl.append(cellEl);
  containerEl.append(rowEl);
  customArea.append(containerEl);

  
});
