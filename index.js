// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  return drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  return drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  const arr2 = [...drivers, name]
  return arr2
}

function prependDriver(name) {
  const arr2 = [name, ...drivers]
  return arr2
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver() {
  return drivers.slice(1, drivers.length)
}
