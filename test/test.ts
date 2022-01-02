import 'mocha'
import { expect } from 'chai';

import chalk from 'chalk';

import ClassOne from '../app/controller/ClassOne'
import ClassOneWithDecorator from '../app/controller/ClassOneWithDecorator'

describe(chalk.yellow.bold('Starting test console'), () => { 
    //* Note that this tests do not have the goal to work as a test as well
    //* They just are been used because we want to test decorators in mocha


    it('Teste if imported class works without decorator',()=>{
        const myClass = new ClassOne()
        myClass.doSomething()
        expect(true).true
    })
    it('Teste if imported class works with decorator', ()=>{
        const myClass = new ClassOneWithDecorator()
        myClass.doSomething()
        expect(true).true
    })
    it('Test if required class works without decorator',()=>{
        const classRequired = require('../app/controller/ClassTwo').default
        const myClass = new classRequired()
        myClass.doSomething()
        expect(true).true        
    })
    it('Test if required class works with decorator',()=>{
        try {
            const classRequired = require('../app/controller/ClassTwoWithDecorator').default
            const myClass = new classRequired()
            myClass.doSomething()
            expect(true).true
        } catch (error) {
            console.log(error)
            expect(false).true
        }
        
        
    })

    //! Until this point, only the forth test fail because it trown 'error TS1219: Experimental support for decoratior'


})