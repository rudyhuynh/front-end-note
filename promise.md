# Promise

* A promise is an object for us to define some callbacks to resolve (if success) or reject (if fail).
* Many API in Javascript (example: [fetch API](https://github.com/github/fetch)) return a promise.

# First example
````
fetch('http://my.api.com/data').then((data) => {
    //handle when request success
}, (error) => {
    //handle when request fail
})
````
* We just defined two callbacks (resolve and reject) using `promise.then()` method.

# Chaining promise
````
fetch('https://my.api.com/data').then(data => {
    return data.json()
}).then(jsonData => {
    console.log(jsonData)
})
````
* `then()` method of the promise returns a promise, so we can `then()` and `then()`...
* This will make our code easier to read (if we careful) than just pass in callback many times.

# Using `promise.catch(...)`
````
fetch('http://my.api.com/data').then(data => {
    return data.json()
}).then(jsonData => {
    console.log(jsonData)
}).catch(err => {
    console.log(err)
})
````
* Use `promise.catch(...)` to handle any exception inside the promise chain.
* Be careful when use `promise.catch(...)` because it can swallow helpful exception, or maybe don't use it at all, instead, use the second parameter of `then()` method to handle fail case.

# Create a promise ourself
````
function getProducts(){
    return new Promise((reject, resolve) => {
        fetch('https://some.api.com/products').then(data => {
            data.json().then(json => {
                resolve(json)
            })
        }, error => {
            const notOriginal = doSomethingDifference(error)
            reject(notOriginal)
        })
    })
}

// Usage:
getProduct().then(json => {
    //...
}, error => {
    //...
})
````






