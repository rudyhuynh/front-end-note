function* doSomething(){
    yield 1
    yield 2
    yield 3
    return 4
}

const generatorObject = doSomething()

generatorObject.next() // {value: 1, done: false}
generatorObject.next() // {value: 2, done: false}
generatorObject.next() // {value: 3, done: false}
generatorObject.next() // {value: 4, done: true}