import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { FillInTheBlank } from "../../components/FillInTheBlank";
import { YesNoQuiz } from "../../components/YesNoQuiz";
import { Code, ColDiv, MyTable, QuizDiv, WrapRowDiv } from "../../components/styled";
import { useLessonNumber } from ".";

export const VariablesPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Variables & Constants</h1>

            <p>You can create a new variable two ways.</p>

            <MyTable>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Constant</td>
                        <td>A constant variable that cannot be reassigned.</td>
                        <td>
                            <Code>const foo = 4;</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>Variable</td>
                        <td>A variable that can be reassigned.</td>
                        <td>
                            <Code>let foo = 4;</Code>
                        </td>
                    </tr>
                </tbody>
            </MyTable>

            <p>
                Creating a constant means the value cannot be reassigned. This is useful to prevent
                unintended reassignments later in the application.
            </p>

            <p>
                Creating a variable means the value can be reassigned; however, note that allowing
                or preventing reassignment is not the same as terms such as immutable, readonly,
                etc.
            </p>

            <h3>Base Types</h3>

            <p>TypeScript has several different types that can be used.</p>

            <MyTable>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <Code>boolean</Code>
                        </td>
                        <td>A true or false value.</td>
                        <td>
                            <ColDiv>
                                <Code>true</Code>
                                <Code>false</Code>
                            </ColDiv>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Code>number</Code>
                        </td>
                        <td>A number.</td>
                        <td>
                            <WrapRowDiv>
                                <Code>1</Code>
                                <Code>2</Code>
                                <Code>3.14</Code>
                                <Code>NaN</Code>
                                <Code>Infinity</Code>
                            </WrapRowDiv>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Code>string</Code>
                        </td>
                        <td>A string of characters.</td>
                        <td>
                            <ColDiv>
                                <Code>'hello'</Code>
                                <Code>"world"</Code>
                            </ColDiv>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Code>null</Code>
                        </td>
                        <td>A value that represents nothing.</td>
                        <td>
                            <Code>null</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>undefined</Code>
                        </td>
                        <td>A value that represents something that has not been defined.</td>
                        <td>
                            <Code>undefined</Code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Code>object</Code>
                        </td>
                        <td>A collection of key/value pairs.</td>
                        <td>
                            <ColDiv>
                                <Code>{`{ a: 1, b: 2 }`}</Code>
                                <Code>{`{ a: 1, b: { c: 3 } }`}</Code>
                            </ColDiv>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>array</Code>
                        </td>
                        <td>A collection of values.</td>
                        <td>
                            <ColDiv>
                                <Code>[1, 2, 3]</Code>
                                <Code>{`['a', 'b', 'c']`}</Code>
                            </ColDiv>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>function</Code>
                        </td>
                        <td>A block of code that can be called later.</td>
                        <td>
                            <Code>() =&gt; console.log("foo")</Code>
                        </td>
                    </tr>
                </tbody>
            </MyTable>

            <p></p>

            <CodeBlock language="ts">{`
const foo = 1;
let bar = 2;

foo = 3; // Error: Cannot assign to 'foo' because it is a constant.
bar = 4; // bar is now 4

var baz = 5; // var is bad. Don't use it.

const foos = [1, 2, 3];
foos.push(4); // foos is now [1, 2, 3, 4]

const foo1 = { a: 1, b: 2 };
foo1.b = 3;
// b can be set because foo1 is a constant reference to an object.
// The object itself is still mutable.
    `}</CodeBlock>

            <h1>Quiz!</h1>
            <QuizDiv>
                <FillInTheBlank
                    code={`
____ foo = 1;
foo = 2;
                    `}
                    answer="let"
                    hint="You can use const or let to declare a value."
                    explaination="The value of a variable decalred with let can be reassigned."
                />

                <FillInTheBlank
                    code={`
____ foo = 1;
foo = 2; // Error: Cannot assign to 'foo'.
                `}
                    answer="const"
                    hint="You can use const or let to declare a value."
                    explaination="The value of a constant declared with const cannot be reassigned."
                />

                <YesNoQuiz
                    question="Is the following recommended?"
                    answer="no"
                    code="var foo = 1;"
                    hint="There are two main ways to declare a variable in TypeScript."
                    explaination="var is a holdover from JavaScript. It is not recommended to use it in TypeScript."
                />
            </QuizDiv>
        </>
    );
});
