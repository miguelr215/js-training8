const greenPack = {
    name: "Frog Pack",
    color: "green",
    brand: "Froggy-style by Kermit",
    volume: 8,
    pocketNum: 3,
    coolFactor: 6,
    numberOfStraps: 2
  };

  const addPack1 = function (currentPack) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Color: ${currentPack.color}</li>
        <li>Volume: ${currentPack.volume}</li>
        <li>Brand: ${currentPack.brand}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
        <li>Number of Straps: ${currentPack.numberOfStraps}</li>
        <li>Coolness Factor: ${currentPack.coolFactor}</li>
      </ul>
    `;
    return newArticle;
  };

const main = document.querySelector("article");
main.append(addPack1(greenPack));

function colorTitle(color){
    const title = document.querySelector("h1");
    title.style.color = color;
};

colorTitle(greenPack.color);

const colorFirstChild = function (color) {
    const firstChild = document.querySelector("li:first-child");
    firstChild.style.color = color;
    firstChild.style.backgroundColor = "gold";
};

colorFirstChild(greenPack.color);

const coolnessHighlight = () => {
    const lastChild = document.querySelector("li:last-child");
    lastChild.classList.add("highlight");
}

coolnessHighlight();