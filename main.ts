export function counter(initValue: number = 0): [Function, Function] {
    let counterValue: number = initValue
    
    const get = () => counterValue;

    const next = () => {
        counterValue++
    }

    return [get, next]
}

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