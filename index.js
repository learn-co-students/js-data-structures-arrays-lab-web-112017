// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

let destructivelyAppendDriver = (name) => drivers.push(name)
let destructivelyPrependDriver = (name) => drivers.unshift(name)
let destructivelyRemoveLastDriver = () => drivers.pop()
let destructivelyRemoveFirstDriver = () => drivers.shift()
let appendDriver = (name) => [...drivers, name]
let prependDriver = (name) => [name, ...drivers]
let removeFirstDriver = () => drivers.slice(1)
let removeLastDriver = () => drivers.slice(0,drivers.length-1)
