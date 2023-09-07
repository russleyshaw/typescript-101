import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";
import { Code } from "../../components/styled";

export const GenericsPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Generics</h1>

            <p>
                Generics are a way to make a type more flexible. Use the{" "}
                <Code>{`type ident<T>`}</Code> syntax to define a new generic on that type.
            </p>

            <p>One common example is to make a type nullable</p>

            <CodeBlock>{`type Nullable<T> = T | null;`}</CodeBlock>

            <CodeBlock>{`
const foo: Nullable<number>; = 1;
const bar: Nullable<number> = null;
const baz: Nullable<number> = "3";
// Error: Type '"3"' is not assignable to type 'number | null'.
`}</CodeBlock>

            <br />
            <p>Another example is to join interfaces</p>

            <CodeBlock>{`
type Requirable<T> = T & { required: true };

interface Person {
    id: number;
    name: string;
    age: number;
}

type RequiredPerson = Requirable<Person>;

const person: RequiredPerson = {
    id: 1,
    name: "John",
    age: 25,
    required: true
};
`}</CodeBlock>
            <br />

            <p>Generics can also be used on functions.</p>

            <CodeBlock>{`

// A pair of values.
type Pair<T, U> = [first: T, second: U];

// Make a pair of values.
// This utility is sometimes useful because TypeScript can't infer the type of a tuple.
function makePair<T, U>(first: T, second: U): Pair<T, U> {
    return [first, second];
}
`}</CodeBlock>

            <CodeBlock>{`
const coord = makePair(1, 2);
const fullName = makePair("John", "Doe");
const nameAndAge = makePair("John", 42);
    `}</CodeBlock>
        </>
    );
});
