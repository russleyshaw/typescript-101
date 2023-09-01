# Control Flow and Truthiness

## Control Flow

`if` statements allow for branching. The `else` statement is optional.

```ts
let foo = 1;
if (foo === 1) {
    console.log("Foo is 1");
}

if (foo === 2) {
    console.log("Foo is 2");
} else {
    console.log("Foo is not 2");
}
```

The ternary operator (`?`) is a shorthand for `if`/`else` statements.

```ts
const foo = 1;

const bar = foo === 1 ? "Foo is 1" : "Foo is not 1";
console.log(bar); // Foo is 1
```

### Truthiness

Truthiness is the concept of statements evaluating as true or false in conditionals.

Things other than explicit booleans can evaluate as true or false.

| type        | `true`                     | `false`     |
| ----------- | -------------------------- | ----------- |
| `number`    | `n != 0`, `12`, `-34`      | `n == 0`    |
| `string`    | `str.length > 0`, `"abcd"` | `""`        |
| `null`      |                            | `null`      |
| `undefined` |                            | `undefined` |
| `object`    | `obj != null`, `{}`        | `null`      |
| `array`     | `arr.length > 0`, `[]`     |             |

Because of this, we sometimes need to be careful when comparing values. For example, if a value `foo` is `number | null`, if we evaluated `if(foo)`, it would evaluate as `true` if foo was any non-zero value; however, we may want to check if `foo` is not `null` or `undefined`. We can do this by using the `!=` operator.

```ts
printTruthy(1); // 1 is truthy
printTruthy(0); // 0 is falsy
printTruthy(-1); // -1 is truthy

printTruthy(""); // "" is falsy
printTruthy("foo"); // "foo" is truthy

printTruthy(null); // null is falsy
printTruthy(undefined); // undefined is falsy

printTruthy({}); // {} is truthy
printTruthy([]); // [] is truthy

let foo: number | null = 1;
printTruthy(foo); // 1 is truthy

foo = null;
printTruthy(foo); // null is falsy
foo = 0;
printTruthy(foo); // 0 is falsy

function printTruthy(value: any) {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
}
```

### Null, Undefined, Nullish

Because JavaScript has both `null` and `undefined`, we have the concept of `nullish`, which is anything that is either `null` or `undefined`.

We can use the `foo == null` expression to check if a value is `nullish`.

```ts
type Nullish = null | undefined;

printNullish(1); // 1 is not nullish
printNullish(0); // 0 is not nullish

printNullish(""); // "" is not nullish
printNullish("foo"); // "foo" is not nullish

printNullish(null); // null is nullish
printNullish(undefined); // undefined is nullish

function printNullish(value: Nullish) {
    if (value == null) {
        console.log(`${value} is nullish`);
    } else {
        console.log(`${value} is not nullish`);
    }
}
```
