import { CodeBlock } from "../../components/CodeBlock";
import { observer } from "mobx-react";
import { styled } from "styled-components";

const MyTable = styled.table`
    border-collapse: collapse;
    border: 1px solid black;

    th,
    td {
        border: 1px solid black;
        padding: 0.5rem;
    }
`;

export const Lesson1Page = observer(() => {
    return (
        <>
            <h1>Lesson 1: Variables & Constants</h1>

            <p>
                Just like in JavaScript, you can define constants with the <code>const</code>{" "}
                keyword and variables with the <code>let</code> keyword.
            </p>

            <MyTable>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <code>boolean</code>
                        </td>
                        <td>A true or false value.</td>
                        <td>
                            <code>true</code>, <code>false</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>number</code>
                        </td>
                        <td>A number.</td>
                        <td>
                            <code>1</code>, <code>2</code>, <code>3.14</code>, <code>NaN</code>,{" "}
                            <code>Infinity</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>string</code>
                        </td>
                        <td>A string of characters.</td>
                        <td>
                            <code>'hello'</code>, <code>"world"</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>null</code>
                        </td>
                        <td>A value that represents nothing.</td>
                        <td>
                            <code>null</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>undefined</code>
                        </td>
                        <td>A value that represents something that has not been defined.</td>
                        <td>
                            <code>undefined</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>object</code>
                        </td>
                        <td>A collection of key/value pairs.</td>
                        <td>
                            <code>{`{ a: 1, b: 2 }`}</code>, <code>{`{ a: 1, b: { c: 3 } }`}</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>array</code>
                        </td>
                        <td>A collection of values.</td>
                        <td>
                            <code>[1, 2, 3]</code>, <code>{`['a', 'b', 'c']`}</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>function</code>
                        </td>
                        <td>A block of code that can be called later.</td>
                        <td>
                            <code>() =&gt; console.log("foo")</code>
                        </td>
                    </tr>
                </tbody>
            </MyTable>

            <CodeBlock language="ts">{`
const foo = 1;
let bar = 2;

foo = 3; // Error: Cannot assign to 'foo' because it is a constant.
bar = 4; // bar is now 4

var baz = 5; // var is bad. Don't use it.

const foos = [1, 2, 3];
foos.push(4); // foos is now [1, 2, 3, 4]

const foo1 = { a: 1, b: 2 };
foo1.b = 3; // b can be set because foo1 is a constant reference to an object. The object itself is still mutable.
    `}</CodeBlock>
        </>
    );
});
/*
# Lesson 1 - Variables & Constants

Just like in JavaScript, you can define constants with the `const` keyword and variables with the `let` keyword.

| Type        | Description                                                  | Examples                                  |
| ----------- | ------------------------------------------------------------ | ----------------------------------------- |
| `boolean`   | A true or false value.                                       | `true`, `false`                           |
| `number`    | A number.                                                    | `1`, `2`, `3.14`, `NaN`, `Infinity`       |
| `string`    | A string of characters.                                      | `'hello'`, `"world"`                      |
| `null`      | A value that represents nothing.                             | `null`                                    |
| `undefined` | A value that represents something that has not been defined. | `undefined`                               |
| `object`    | A collection of key/value pairs.                             | `{ a: 1, b: 2 }`, `{ a: 1, b: { c: 3 } }` |
| `array`     | A collection of values.                                      | `[1, 2, 3]`, `['a', 'b', 'c']`            |
| `function`  | A block of code that can be called later.                    | `() => console.log("foo")`                |

```ts
const foo = 1;
let bar = 2;

foo = 3; // Error: Cannot assign to 'foo' because it is a constant.
bar = 4; // bar is now 4

var baz = 5; // var is bad. Don't use it.

const foos = [1, 2, 3];
foos.push(4); // foos is now [1, 2, 3, 4]

const foo1 = { a: 1, b: 2 };
foo1.b = 3; // b can be set because foo1 is a constant reference to an object. The object itself is still mutable.
```
*/
