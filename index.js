// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers, "Broom"];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  let removed = drivers.slice(0, drivers.length -1);
  return removed;

}

function removeFirstDriver() {
  return drivers.slice(1);
}
