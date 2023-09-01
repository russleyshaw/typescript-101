import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";

export const Lesson4Page = observer(() => (
    <>
        <h1>Lesson 4 - Arrays</h1>

        <p>
            Arrays are a collection of values. Depending on the type, they can either all be the
            same type, or different types.
        </p>

        <h2>Declaring Arrays</h2>
        <code>const myArray = [1, 2, 3, 4]</code>

        <p>
            When you declare an array, using <code>const</code> means that the array cannot be{" "}
            reassigned, but the values inside the array can be changed. Declaring the array with{" "}
            <code>let</code> means the array can be reassigned.
        </p>

        <h2>Arrays</h2>
        <CodeBlock language="ts">{`
const arr: number[] = [1, 2, 3, 4, 5, 1000];

// Find index of a value
const index = arr.indexOf(3);

// Find a value
const value = arr.find(num => num > 100);
`}</CodeBlock>
    </>
));
