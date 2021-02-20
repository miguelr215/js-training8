/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
// function doSomeMath(a, b) {
//     let c = a + b;
//     return c;
//   }
  
  // Function expression:
//   const doMoreMath = function (a = 3, b = 2) {
//     let c = a * b;
//     return c;
//   };
  
//   console.log("Do some math:", doSomeMath(5, 6));
//   console.log("Do more math:", doMoreMath(5, 6));
  
  // Immediately Invoked Function Expression (IIFE)
  // (function () {
  //   let a = 4;
  //   let b = 6;
  //   let c = doSomeMath(a, b);
  //   console.log(`The sum of a and b is: ${c}`);
  // })();


/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
  };

  const addPack1 = function (currentPack) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
      </ul>
    `;
    return newArticle;
  };

/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
  
  const addPack2 = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
      </ul>
    `;
    return newArticle;
  };
  
  const main = document.querySelector("main");
  main.append(addPack1(greenPack));

  // OR, you can set the function to a variable
  const theArticle = addPack2(greenPack);
  console.log(theArticle);