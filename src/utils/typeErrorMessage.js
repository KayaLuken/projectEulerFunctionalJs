import {blue, green, red} from 'chalk'



function typeErrorMessage(funcName, argIndex, expectedType, receivedType) {
    return `
    ${red('TYPE ERROR!')}\n
    name: ${blue(funcName)}\n
    arg: ${blue(argIndex)}\n
    ${green('expected: ')} ${green(expectedType)}\n
    ${red(received)}: ${red(receivedType)}
    `
}

export default typeErrorMessage