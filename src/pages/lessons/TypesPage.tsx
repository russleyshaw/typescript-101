import { CodeBlock } from "../../components/CodeBlock";
import { observer } from "mobx-react";
import { Code, QuizDiv } from "../../components/styled";
import { FillInTheBlank } from "../../components/FillInTheBlank";
import { useLessonNumber } from ".";

export const TypesPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Types</h1>

            <p>
                You can give a variable a type by using the <Code>ident: type</Code> syntax.
            </p>

            <CodeBlock language="ts">{`
const foo: number = 1;
const bar: number = "3"; // Error: Type '"3"' is not assignable to type 'number'.
`}</CodeBlock>

            <h2>Union Types</h2>

            <p>
                Union types are types that can be one of several types. They are defined using the{" "}
                <Code>|</Code> operator.
            </p>

            <CodeBlock language="ts">{`
let foo2: number | string = 1;
foo2 = "3";
foo2 = true; // Error: Type 'true' is not assignable to type 'string | number'.
`}</CodeBlock>

            <h2>Type Aliases</h2>

            <p>
                Type aliases are a way to give a type a name. They are defined using the{" "}
                <Code>type</Code> keyword.
            </p>

            <CodeBlock>{`
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
                A type can be marked as optional by using the <Code>?</Code> operator. An optional
                type can also be <Code>undefined</Code> if it is not provided.
            </p>

            <CodeBlock>{`
let reference?: number;
console.log(reference); // undefined

reference = 1;
console.log(reference); // 1
`}</CodeBlock>

            <QuizDiv>
                <h2>Quiz!</h2>

                <FillInTheBlank
                    code={`
const foo: ____ = true;
                `}
                    answer="boolean"
                    explaination="Booleans represent true/false values."
                    hint="The type that represents true/false values."
                />

                <FillInTheBlank
                    code={`
let foo: ____ = "one";
foo = 1;
                `}
                    answer={["string | number", "number | string"]}
                    explaination="Union types allow a variable to be one of several types."
                    hint="Use | to allow choosing of multiple types."
                />
                <FillInTheBlank
                    code={`
let foo____ = undefined;
foo = 1;
                `}
                    answer={"?: number"}
                    explaination="A type can be marked as optional using the ? operator."
                    hint="We want foo to be optional."
                />
            </QuizDiv>
        </>
    );
});
