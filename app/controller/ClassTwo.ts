import { myConnectionDecorator } from "./MyDecorator";
import MyInterface from "./MyInterface";

export default class ClassTwo implements MyInterface
{
    connect() {
        console.log(`I'm in function connect from ${this.constructor.name}`)
    }
    disconnect() {
        console.log(`I'm in function disconnect from ${this.constructor.name}`)
    }

    
    doSomething() {
        console.log(`I'm in function doSomething from ${this.constructor.name}`)
    }
    doOtherthing() {
        console.log(`I'm in function doOtherthing from ${this.constructor.name}`)
    }

}