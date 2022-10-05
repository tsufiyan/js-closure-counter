import "jasmine"
import { counter } from "./counter"

describe("Test the counter function", () => {
    it("Check if the function defined", () => {
        expect(counter).toBeDefined()
        const [get, next] = counter()
        expect(get).toBeDefined()
        expect(next).toBeDefined()
    })

    it("Check for no-argument counter", () => {
        const [get, next] = counter();
        expect(get()).toBe(0)
        next()
        expect(get()).toBe(1)
    })

    it("Check for argument counter", () => {
        const [get, next] = counter(10);
        next()
        expect(get()).toBe(11)
        next()
        next()
        next()
        next()
        expect(get()).toBe(15)
    })
})

