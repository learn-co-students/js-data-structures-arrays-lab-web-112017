// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver);
  return drivers;
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver);
  return drivers;
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function appendDriver(driver) {
  newDriverArray = [...drivers, driver];
  return newDriverArray;
}

function prependDriver(driver) {
  newDriverArray = [driver, ...drivers];
  return newDriverArray;
}

function removeLastDriver() {
  shortArray = drivers.slice(0, drivers.length-1);
  return shortArray
}

function removeFirstDriver() {
  shortArray = drivers.slice(1)
  return shortArray;
}
