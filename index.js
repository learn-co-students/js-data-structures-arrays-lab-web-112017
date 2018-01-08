const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver);
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(newDriver) {
  let newArr = drivers.slice(0);
  newArr.push(newDriver);
  return newArr;
}

function prependDriver(newDriver) {
  let newArr = drivers.slice(0);
  newArr.unshift(newDriver);
  return newArr;
}

function removeLastDriver() {
  return drivers.slice(0, 2);
}

function removeFirstDriver() {
  return drivers.slice(1, 3);
}
