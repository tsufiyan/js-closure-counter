import { counter } from "./counter"

const [getA, nextA] = counter(1)
console.log(getA())
nextA()
console.log(getA())

const [getB, nextB] = counter(10)
nextB()
console.log(getA())
console.log(getB())

nextA()
console.log(getA())
console.log(getB())