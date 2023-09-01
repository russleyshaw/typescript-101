# Lesson 3 - Functions

```ts
function add(arg1: number, arg2: number): number {
    return arg1 + arg2;
}

function subtract(arg1: number, arg2: number): number {
    return "foo"; // Error: Type '"foo"' is not assignable to type 'number'.
}

// Typescript can infer return types
function multiply(arg1: number, arg2: number) {
    // Return type is inferred.
    return arg1 * arg2;
}

function divide(arg1: number, arg2: number) {
    return "foo";
}

// But we shoudl consider carefully when to explicitly to declare them.
const result: number = divide(1, 2);

type BasicFunc = (arg1: number, arg2: number) => number;
const add2: BasicFunc = (arg1, arg2) => arg1 + arg2;
```

### Side-Effects

Side effects are changes to the state of the program that are not directly related to the return value of the function.

```ts
let foo = 3;

function updateFoo() {
    foo = 4; // Side effect. We generally want to avoid this, especially in large scopes.
}
```

### When To Infer/Declare function types.

-   Infer function parameters, and return when the function is consumed by other code.

```ts
// The inner function does not need to declare its parameters or return type
// They are "defined" by the consuming `on` function.
button.on("change", value => {
    console.log(value);
});
```

-   Treat functions as boundary layers. Explicitly declare function parameters and return types to ensure that the function is used correctly.

### Optional/Default Parameters

Use `?` to define an optional parameter. The parameter will be `undefined` if not provided.

```ts
function foo(arg1: number, arg2: number = 2, arg3?: number) {
    console.log(arg1, arg2, arg3);
}

foo(1); // 1, 2, undefined
foo(1, 3); // 1, 3, undefined
foo(1, 3, 4); // 1, 3, 4
```
