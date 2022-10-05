export function counter(initValue: number = 0): [Function, Function] {
    let counterValue: number = initValue
    
    const get = () => counterValue;

    const next = () => {
        counterValue++
    }

    return [get, next]
}