const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
  }
 
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function removeFirstCat() {
    cats.shift();
  }

  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = positionToInteger(dodger.style.left);
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  
  function positionToInteger(position) {
    return parseInt(position.split('px')[0]);
  }

function removeFirstCat() {
  const [, ...newCats] = cats;
  return newCats;
}
