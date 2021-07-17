import {} from 'ramda'
import {isArray, isFunction} from 'ramda-adjunct'
import argNames from "./argNames";


export default function argTypes(types, f){
    if(!isArray(types)){
        throw new Error(`argTypes( ---> types <---, f ) expected array of functions, but got: ${types}`)
    }
    if(!isFunction(f)){
        throw new Error(`argTypes( types, ---> f <--- ) expected function, but got: ${f}`)
    }
    let args = argNames(f)
    let numArgs = args.length


}
