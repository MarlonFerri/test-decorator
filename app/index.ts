import ClassOne from './controller/ClassOne'
// import ClassTwo from './controller/ClassTwo'
const ClassTwo = require('./controller/ClassTwo').default

const myClassOne = new ClassOne()
const myClassTwo = new ClassTwo()

/**
 * 1st test, just call those methods alone, before Decorator implementation
 * Prompt work fine:
 * I'm in function doSomething from ClassOne
 * I'm in function doSomething from ClassOne
 * I'm in function doSomething from ClassTwo
 * I'm in function doSomething from ClassTwo
 */
// myClassOne.doSomething()
// myClassOne.doSomething()

// myClassTwo.doSomething()
// myClassTwo.doSomething()


/**
 * 2nd test, look for differences between import class and requeired class
 * As expected prompt was:
 * [class ClassOne]
 * [class ClassTwo]
 */
// console.dir(ClassOne)
// console.dir(ClassTwo)


/**
 * 3th test, look for diff between instances for imported and required classes
 * Prompt:
 * ClassOne {}
 * ClassTwo {}
 */
// console.dir(myClassOne)
// console.dir(myClassTwo)

/**
 * 4th test, look for diff between classes for imported and required classes with decorator
 * ClassOne has decorator
 * Prompt:
 * [class ClassOne]
 * [class ClassTwo]
 */
// console.dir(ClassOne)
// console.dir(ClassTwo)

/**
 * 5th test, look for diff between instances for imported and required classes
 * ClassOne has decorator
 * Prompt:
 * ClassOne {}
 * ClassTwo {}
 */
// console.dir(myClassOne)
// console.dir(myClassTwo)

/**
 * 6th test, just call those methods alone
 * ClassOne has decorator
 * Prompt work fine:
 * I'm in function connect from ClassOne
 * I'm in function connect from ClassOne
 * I'm in function doSomething from ClassTwo
 * I'm in function doOtherthing from ClassTwo
 * I'm in function doSomething from ClassOne
 * I'm in function doOtherthing from ClassOne
 * I'm in function disconnect from ClassOne
 * I'm in function disconnect from ClassOn
 */
myClassOne.doSomething()
myClassOne.doOtherthing()

myClassTwo.doSomething()
myClassTwo.doOtherthing()



