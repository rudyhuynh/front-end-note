# What we actually do when functional programming?

* In short, we use function as basic block of our code, such as:
  * Use `filter()`, `map()`, `reduce()`, ... instead of for loop.
  * Create a React component using function instead of class.

```javascript
//input sample: 
let cartItems = [
    {quantity: 11, unitPrice: 1},
    {quantity: 12},
    {quantity: 13, unitPrice: 3}
]

//Below are two ways to calculate total price of cart items:
        
//using for loop - the old way
function getTotalPrice(cartItems = []){
  let result = 0
  for (var i = 0; i < cartItems.length; i++){
    let item = cartItems[i]
    if (typeof item.unitPrice === 'number'){
      let p = item.quantity * item.unitPrice
      result += p
    }
  }
  return result
}

//using filter(), map(), reduce() - the prefer way
function getTotalPrice(cartItems = []){
  return cartItems
    .filter(item => typeof item.unitPrice === 'number')
    .map(item => item.quantity * item.unitPrice)
    .reduce((prev, current) => prev + current, 0)
}
```
* In advance, we bring concepts from functional programming into our code, such as:
  * Higher order function
  * Immutable object
  * Pure function
  * Currying
* The benefits is to make the code declarative, easier to read and test.

(To be continued)

[Index](README.md)
