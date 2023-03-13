// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const catsAddedEnd = [...cats, name];
    return catsAddedEnd;
}

function prependCat(name){
    const catsAddedBeginning = [name, ...cats];
    return catsAddedBeginning;
}

function removeLastCat(){
    const catsWithoutLast = cats.slice(0, cats.length-1);
    return catsWithoutLast;
}

function removeFirstCat(){
    const catsWithoutFirst = cats.slice(1);
    return catsWithoutFirst;
}