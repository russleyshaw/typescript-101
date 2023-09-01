# Lesson 5 - Timeout/Interval

JavaScript is single threaded and asyncronous. This means that it can only do one thing at a time, and it can do things while waiting for other things to happen.

It does this using an event loop (a concept that is not important to understand for this course).

There are two main ways to initiate an asyncronous operation in JavaScript: `setTimeout` and `setInterval`.

## setTimeout

`setTimeout` is a function that takes a callback function and a delay in milliseconds. It will call the callback function after the delay has passed.

```ts
// setTimeout(callback, delayMs)

sayHello();
console.log("I'm first!"); // This will be printed first

// Then 1 second later, "Hello world!" will be printed.

function sayHello() {
    setTimeout(() => {
        console.log("Hello world!");
    }, 1000);
}
```

{
// setTimeout(callback, delay)

    sayHello();
    console.log("I'm first!"); // This will be printed first

    function sayHello() {
        setTimeout(() => {
            console.log("Hello world!");
        }, 1000);
    }

}
