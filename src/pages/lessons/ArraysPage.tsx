import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";
import { Code, QuizDiv } from "../../components/styled";
import { FillInTheBlank } from "../../components/FillInTheBlank";

export const ArraysPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Arrays</h1>

            <p>
                Arrays are a collection of values. Depending on the type, they can either all be the
                same type, or different types.
            </p>

            <h2>Declaring Arrays</h2>
            <Code>const myArray = [1, 2, 3, 4]</Code>

            <p>
                When you declare an array, using <Code>const</Code> means that the array cannot be{" "}
                reassigned, but the values inside the array can be changed. Declaring the array with{" "}
                <Code>let</Code> means the array can be reassigned.
            </p>

            <h2>Arrays</h2>
            <CodeBlock>{`
const arr: number[] = [1, 2, 3, 4, 5, 1000];

// Find index of a value
const index = arr.indexOf(3);

// Find a value
const value = arr.find(num => num > 100);
`}</CodeBlock>

            <QuizDiv>
                <h2>Quiz</h2>

                <FillInTheBlank
                    code={`
const arr = [1, 2, 3, 4, 5, 200, 1000];
const result = arr.____(num => num % 2 === 0);
// [2, 4, 200, 1000]
                `}
                    answer="map"
                    explaination="The map function will return an array of entries that match the condition."
                />

                <FillInTheBlank
                    code={`
const arr = [1, 2, 3, 4, 5, 200, 1000];
const result = arr.____(num => num > 100);
// [200, 1000]
                `}
                    answer="filter"
                    explaination="The filter function will return an array of entries that match the condition."
                />
            </QuizDiv>
        </>
    );
});
