import { HTMLTable } from "@blueprintjs/core";
import { CodeBlock } from "../../components/CodeBlock";
import { observer } from "mobx-react";
import { styled } from "styled-components";
import { FillInTheBlank } from "../../components/FillInTheBlank";
import { YesNoQuiz } from "../../components/YesNoQuiz";

const MyTable = styled(HTMLTable).attrs({ bordered: true })``;

const QuizDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Lesson1Page = observer(() => {
    return (
        <>
            <h1>Lesson 1: Variables & Constants</h1>

            <p>You can create a new variable two ways.</p>

            <HTMLTable bordered>
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
                            <code>const foo = 4;</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Variable</td>
                        <td>A variable that can be reassigned.</td>
                        <td>
                            <code>let foo = 4;</code>
                        </td>
                    </tr>
                </tbody>
            </HTMLTable>

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
                            <code>boolean</code>
                        </td>
                        <td>A true or false value.</td>
                        <td>
                            <code>true</code>, <code>false</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>number</code>
                        </td>
                        <td>A number.</td>
                        <td>
                            <code>1</code>, <code>2</code>, <code>3.14</code>, <code>NaN</code>,{" "}
                            <code>Infinity</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>string</code>
                        </td>
                        <td>A string of characters.</td>
                        <td>
                            <code>'hello'</code>, <code>"world"</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>null</code>
                        </td>
                        <td>A value that represents nothing.</td>
                        <td>
                            <code>null</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>undefined</code>
                        </td>
                        <td>A value that represents something that has not been defined.</td>
                        <td>
                            <code>undefined</code>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>object</code>
                        </td>
                        <td>A collection of key/value pairs.</td>
                        <td>
                            <code>{`{ a: 1, b: 2 }`}</code>, <code>{`{ a: 1, b: { c: 3 } }`}</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>array</code>
                        </td>
                        <td>A collection of values.</td>
                        <td>
                            <code>[1, 2, 3]</code>, <code>{`['a', 'b', 'c']`}</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>function</code>
                        </td>
                        <td>A block of code that can be called later.</td>
                        <td>
                            <code>() =&gt; console.log("foo")</code>
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
foo1.b = 3; // b can be set because foo1 is a constant reference to an object. The object itself is still mutable.
    `}</CodeBlock>

            <h1>Quiz!</h1>
            <QuizDiv>
                <FillInTheBlank
                    question={`
____ foo = 1;
foo = 2;
                    `}
                    answer="let"
                    hint="You can use const or let to declare a value."
                    explaination="The value of a variable decalred with let can be reassigned."
                />

                <FillInTheBlank
                    question={`
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
