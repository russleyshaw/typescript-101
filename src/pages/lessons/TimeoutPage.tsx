import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";
import { Code } from "../../components/styled";

export const TimeoutPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Timeout & Interval</h1>
            <p>
                JavaScript is single threaded and asyncronous. This means that it can only do one
                thing at a time, and it can do things while waiting for other things to happen.
            </p>
            <p>
                It does this using an event loop (a concept that is not important to understand for
                this course).
            </p>
            <p>
                There are two main ways to initiate an asyncronous operation in JavaScript:
                `setTimeout` and `setInterval`.
            </p>
            <h2>setTimeout</h2>

            <p>
                `setTimeout` is a function that takes a callback function and a delay in
                milliseconds. It will call the callback function after the delay has passed.
            </p>
            <CodeBlock>{`
// setTimeout(callback, delayMs)

sayHello();
console.log("I'm first!"); // This will be printed first

// Then 1 second later, "Hello world!" will be printed.

function sayHello() {
    setTimeout(() => {
        console.log("Hello world!");
    }, 1000);
}
`}</CodeBlock>

<h2>setInterval</h2>
    <p>
        <Code>setInterval(func, ms)</Code> can be used to declare that a function should be called regularly until it is cancelled. Use <Code>clearInterval</Code> to cancel the interval.
    </p>

    <CodeBlock>{`

const intervalId = setInterval(() => {
    console.log("Prints every 500ms");
}, 500);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000); // Cancel the interval after 5 seconds

`}</CodeBlock>

        </>
    );
});
