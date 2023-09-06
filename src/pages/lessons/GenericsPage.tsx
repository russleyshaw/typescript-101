import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";

export const GenericsPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Generics</h1>

            <code>type Nullable&gt;T&lt; = T | null;</code>

            <CodeBlock>{`
const foo: Nullable&lt;number&gt; = 1;
const bar: Nullable&lt;number&gt; = null;
const baz: Nullable&lt;number&gt; = "3"; // Error: Type '"3"' is not assignable to type 'number | null'.
`}</CodeBlock>

            <CodeBlock>{`
type Pair<T, U> = [first: T, second: U];
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
