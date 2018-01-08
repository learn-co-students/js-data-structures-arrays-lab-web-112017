// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  return a = [...drivers, name]
}

function prependDriver(name) {
  return a = [name, ...drivers]
}

function removeLastDriver() {
  return a = drivers.slice(0, -1)
}

function removeFirstDriver() {
  return a = drivers.slice(1)
}
