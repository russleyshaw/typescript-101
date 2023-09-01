# Lesson 2 - Types

You can give a variable a type by using the `ident: type` syntax.

```ts
const foo: number = 1;
const bar: number = "3"; // Error: Type '"3"' is not assignable to type 'number'.
```

### Union Types

Union types are types that can be one of several types. They are defined using the `|` operator.

```ts
let foo2: number | string = 1;
foo2 = "3";
foo2 = true; // Error: Type 'true' is not assignable to type 'string | number'.
```

### Type Aliases

Type aliases are a way to give a type a name. They are defined using the `type` keyword.

```ts
type UserId = number;
const userId: UserId = 1;

// Union types can be used to create type aliases.
type BoolString = "true" | "false";

let foo3: BoolString = "true";
foo3 = "false";
foo3 = "maybe"; // Error: Type '"maybe"' is not assignable to type '"true" | "false"'.
```

### Optional Types

A type can be marked as optional by using the `?` operator. An optional type can also be `undefined` if it is not provided.

```ts
let reference?: number;
console.log(reference); // undefined

reference = 1;
console.log(reference); // 1
```

```

```
