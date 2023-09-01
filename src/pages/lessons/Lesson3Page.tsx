import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { HTMLTable } from "@blueprintjs/core";

export const Lesson3Page = observer(() => {
    return (
        <>
            <h1>Lesson 3 - Functions</h1>

            <p>There are 3 main ways to define a function in TypeScript.</p>

            <HTMLTable>
                <thead>
                    <tr>
                        <th>Function Type</th>
                        <th>Example</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Named Function</td>
                        <td>
                            <code>{`function funcName(args) { ... }`}</code>
                        </td>
                        <td>A function that is defined with a name.</td>
                    </tr>
                    <tr>
                        <td>Anonymous Function</td>
                        <td>
                            <code>{`const funcName = function (args) { ... }`}</code>
                        </td>
                        <td>A function that is not defined with a name.</td>
                    </tr>
                    <tr>
                        <td>Function Expressions</td>
                        <td>
                            <code>{`const funcName = (args) => { ... }`}</code>
                        </td>
                        <td>
                            A shorthand notation for a function. It also does not have its own{" "}
                            <code>this</code> scope.
                        </td>
                    </tr>
                </tbody>
            </HTMLTable>

            <CodeBlock language="ts">{`
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
`}</CodeBlock>

            <h2>Side-Effects</h2>

            <p>
                Side effects are changes to the state of the program that are not directly related
                to the return value of the function.
            </p>

            <CodeBlock language="ts">{`
let foo = 3;

function updateFoo() {
    foo = 4; // Side effect. We generally want to avoid this, especially in large scopes.
}
`}</CodeBlock>

            <h2>When To Infer/Declare function types.</h2>

            <ul>
                <li>
                    Infer function parameters, and return when the function is consumed by other
                    code.
                </li>
            </ul>

            <CodeBlock language="ts">{`
// The inner function does not need to declare its parameters or return type
// They are "defined" by the consuming \`on\` function.
button.on("change", value => {
    console.log(value);
});
`}</CodeBlock>

            <ul>
                <li>
                    Treat functions as boundary layers. Explicitly declare function parameters and
                    return types to ensure that the function is used correctly.
                </li>
            </ul>

            <h2>Optional/Default Parameters</h2>

            <p>
                Use <code>?</code> to define an optional parameter. The parameter will be{" "}
                <code>undefined</code> if not provided.
            </p>

            <CodeBlock language="ts">{`
function foo(arg1: number, arg2: number = 2, arg3?: number) {
    console.log(arg1, arg2, arg3);
}

foo(1); // 1, 2, undefined
foo(1, 3); // 1, 3, undefined
foo(1, 3, 4); // 1, 3, 4
`}</CodeBlock>
        </>
    );
});
