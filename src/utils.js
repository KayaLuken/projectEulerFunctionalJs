import {tap} from "ramda";


export const assert = curry((pred, x) => {
    if (pred(x)) {
        return x
    } else {
        throw new Error("ASSERTION ERROR")
    }
})

export const each = curry((fns, x) => map(applyTo(x), fns))

export const peek = tap(console.log)

export const pip = flip(reduce(applyTo)) // c2(flip, reduce, applyTo) p2(applyTo, reduce, flip)

export const steps = curry((fns, x) => scan(applyTo, x, fns))

export const then = curry((f, g, x) => g(f(x), x)
)
