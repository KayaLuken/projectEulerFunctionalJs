import {isBoolean} from 'ramda-adjunct'
import err from "../utils/err";
import typeErrorMessage from "../utils/typeErrorMessage";



function assert(bool, msg) {
    if(!isBoolean(bool)){
        err(typeErrorMessage('assert', 1, 'bool', typeof bool))
    }
}

export default assert