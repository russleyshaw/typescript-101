import { observer } from "mobx-react";
import { useLessonNumber } from ".";
import { CodeBlock } from "../../components/CodeBlock";
import { Code, QuizDiv } from "../../components/styled";
import { FillInTheBlank } from "../../components/FillInTheBlank";

export const AsyncAwaitPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Async & Await</h1>

            <p>
                JavaScript excels at processing and handling asyncronous state. One way to handle
                this is callbacks
            </p>

            <CodeBlock>{`
window.addEventListener("load", () => {
    // This function is only called after the page has loaded.
    console.log("The page has loaded!");
});

console.log("This is logged first");

// This is logged first
// The page has loaded!
`}</CodeBlock>

            <h2>Promises</h2>

            <p>
                Another way is promises. A promise is a value that will be available in the future.
                A new promsie can be created with <Code>new Promise(fn)</Code>
            </p>

            <p>
                You can then retreive the value of a promise using either{" "}
                <Code>promise.then(...)</Code> or <Code>promise.catch(...)</Code> if it rejected
            </p>

            <CodeBlock>{`

const p1 = new Promise((resolve, reject) => {
    // call the resolve function to resolve the promise
    return resolve(32);
});

p1.then((value) => {
    console.log(value); // 32
});

const p1 = new Promise((resolve, reject) => {
    // call the reject function to reject the promise
    return reject(new Error("Something went wrong"));
});

p1.catch((err) => {
    console.log(err.message); // "Something went wrong"
});

`}</CodeBlock>

            <CodeBlock>{`

const p = delayMs(1000);

p.then(() => {
    console.log("This is logged after 1 second");
});


console.log("This is logged first");


// Create a promise that will resolve after ms milliseconds.
function delayMs(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

`}</CodeBlock>

            <h2>Async/Await</h2>

            <p>
                Juggling promises can be tedious so an easier, newer, and generally better way to
                handle them is with <Code>async/await</Code>. They are designed to make asyncronous
                code look more syncronous and "normal"
            </p>

            <p>
                First, a function will be marked as <Code>async</Code>. This makes the function
                always return a Promise.{" "}
            </p>

            <CodeBlock>{`

async function foo(): Promise<number | null> {
    await delayMs(1000);
    console.log("This is logged after 1 second");

    // Try to get some data from a server or something
    try {
        const value = await fetchValue();
        return value;
    } catch (err) {
        return null;
    }
}

foo().then((val) => {
    console.log("This is logged after foo() is done");
});

console.log("This is logged first");

`}</CodeBlock>

            <p>
                Inside an async function, we can use <Code>await</Code> to wait for a promise to
                resolve.
            </p>

            <p>
                Async functions can also be used with <Code>try/catch</Code> blocks to handle
                errors.
            </p>

            <QuizDiv>
                <FillInTheBlank
                    question="How can we get the data from a resolved promise?"
                    explaination="You can get the value of a resolved promise using the .then() method."
                    answer="then"
                    code={`
fetchData().____(data => {
    console.log(data);
}))
    `}
                />

                <FillInTheBlank
                    question="What type should be used for the return value of the function below?"
                    hint="Functions marked as async always return a promise."
                    explaination="The function is marked as async so it will always return a promise."
                    answer={"Promise<number>"}
                    code={`
async function foo(): ____ {
    await delayMs(100);
    return 3;
}
    `}
                />
            </QuizDiv>
        </>
    );
});
