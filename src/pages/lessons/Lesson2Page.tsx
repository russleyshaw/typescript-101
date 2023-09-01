import { CodeBlock } from "../../components/CodeBlock";
import { observer } from "mobx-react";

export const Lesson2Page = observer(() => {
    return (
        <>
            <h1>Lesson 2 - Types</h1>

            <p>
                You can give a variable a type by using the <code>ident: type</code> syntax.
            </p>

            <CodeBlock language="ts">{`
const foo: number = 1;
const bar: number = "3"; // Error: Type '"3"' is not assignable to type 'number'.
`}</CodeBlock>

            <h2>Union Types</h2>

            <p>
                Union types are types that can be one of several types. They are defined using the{" "}
                <code>|</code> operator.
            </p>

            <CodeBlock language="ts">{`
let foo2: number | string = 1;
foo2 = "3";
foo2 = true; // Error: Type 'true' is not assignable to type 'string | number'.
`}</CodeBlock>

            <h2>Type Aliases</h2>

            <p>
                Type aliases are a way to give a type a name. They are defined using the{" "}
                <code>type</code> keyword.
            </p>

            <CodeBlock language="ts">{`
type UserId = number;
const userId: UserId = 1;

// Union types can be used to create type aliases.
type BoolString = "true" | "false";

let foo3: BoolString = "true";
foo3 = "false";
foo3 = "maybe"; // Error: Type '"maybe"' is not assignable to type '"true" | "false"'.
`}</CodeBlock>

            <h2>Optional Types</h2>

            <p>
                A type can be marked as optional by using the <code>?</code> operator. An optional
                type can also be <code>undefined</code> if it is not provided.
            </p>

            <CodeBlock language="ts">{`
let reference?: number;
console.log(reference); // undefined

reference = 1;
console.log(reference); // 1
`}</CodeBlock>
        </>
    );
});
