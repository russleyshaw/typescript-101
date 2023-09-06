import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";

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
            <h3>setTimeout</h3>

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
        </>
    );
});
